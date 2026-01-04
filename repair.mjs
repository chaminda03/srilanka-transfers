import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targetDir = path.join(__dirname, 'src');

const repairFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. REVERSE: Fix escaped quotes in Imports and Logic
  // This looks for &apos; and &quot; specifically inside import/from/style/split statements
  const logicPatterns = [
    /from &apos;([^&]+)&apos;/g,
    /from &quot;([^&]+)&quot;/g,
    /split\(&apos;([^&]+)&apos;\)/g,
    /colorScheme: &apos;([^&]+)&apos;/g,
    /import Link from &apos;([^&]+)&apos;/g
  ];

  logicPatterns.forEach(pattern => {
    if (pattern.test(content)) {
      content = content.replace(pattern, (match, p1) => match.replace(/&apos;/g, "'").replace(/&quot;/g, '"'));
      changed = true;
    }
  });

  // 2. FIX: Duplicate Link imports (seen in your logs)
  if (content.match(/import Link from ['"]next\/link['"];/g)?.length > 1) {
    content = content.replace(/import Link from ['"]next\/link['"];\s*/, "");
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Repaired Logic: ${filePath}`);
  }
};

const walk = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      repairFile(fullPath);
    }
  });
};

console.log('🏗️  Architectural Surgical Repair Starting...');
walk(targetDir);
console.log('🏁 Logic restored. Ready for deployment.');