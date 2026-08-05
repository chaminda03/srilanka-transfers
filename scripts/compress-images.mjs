import sharp from "sharp";
import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const DIR = process.argv[2];
const MAX_WIDTH = 2400;   // ample for a full-bleed hero even on 2x displays
const WEBP_QUALITY = 78;
const JPEG_QUALITY = 80;

const files = await readdir(DIR);
let before = 0, after = 0;
const rows = [];

for (const name of files) {
  const full = path.join(DIR, name);
  const ext = path.extname(name).toLowerCase();
  if (![".webp", ".jpg", ".jpeg", ".png"].includes(ext)) continue;

  const sizeBefore = (await stat(full)).size;
  before += sizeBefore;

  // Read into a buffer first. On Windows, sharp keeps a handle on a file it
  // opened by path, which makes writing back to that same path fail with EPERM.
  const input = await readFile(full);

  let meta;
  try {
    meta = await sharp(input).metadata();
  } catch {
    rows.push([name, sizeBefore, sizeBefore, "SKIP (unreadable)"]);
    after += sizeBefore;
    continue;
  }

  let pipeline = sharp(input).rotate(); // honour EXIF orientation before stripping it

  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  // Metadata is intentionally NOT copied through — strips EXIF/GPS/ICC bloat.
  if (ext === ".png") {
    pipeline = pipeline.png({ compressionLevel: 9, palette: true });
  } else if (ext === ".webp") {
    pipeline = pipeline.webp({ quality: WEBP_QUALITY, effort: 5 });
  } else {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  }

  let output;
  try {
    output = await pipeline.toBuffer();
  } catch (e) {
    rows.push([name, sizeBefore, sizeBefore, `SKIP (${e.message.slice(0, 30)})`]);
    after += sizeBefore;
    continue;
  }

  // Only keep the re-encode if it actually helps.
  if (output.length < sizeBefore * 0.95) {
    await writeFile(full, output);
    after += output.length;
    rows.push([name, sizeBefore, output.length, `${meta.width}x${meta.height}`]);
  } else {
    after += sizeBefore;
    rows.push([name, sizeBefore, sizeBefore, "kept (already optimal)"]);
  }
}

const mb = (n) => (n / 1024 / 1024).toFixed(2) + " MB";
rows.sort((a, b) => (b[1] - b[2]) - (a[1] - a[2]));
for (const [name, b, a, note] of rows.slice(0, 18)) {
  console.log(`${mb(b).padStart(9)} -> ${mb(a).padStart(9)}   ${name}  [${note}]`);
}
console.log("\n" + "=".repeat(60));
console.log(`TOTAL: ${mb(before)} -> ${mb(after)}  (saved ${mb(before - after)}, ${((1 - after / before) * 100).toFixed(1)}%)`);
