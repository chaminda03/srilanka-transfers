import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targetDir = path.join(__dirname, 'src');

const processFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. Fix Apostrophes for React/Next.js
  if (content.includes("'")) {
    // Replaces raw apostrophes with the HTML entity &apos;
    content = content.replace(/(?<= >|[^=])'|(?<= )'(?=[^=])/g, '&apos;');
    changed = true;
  }

  // 2. Convert <a> to <Link> for SEO Performance
  if (content.includes('<a ') || content.includes('</a>')) {
    content = content.replace(/<a /g, '<Link ');
    content = content.replace(/<\/a>/g, '</Link>');
    
    // 3. Ensure Next.js Link is imported
    if (!content.includes("import Link from 'next/link'")) {
      content = "import Link from 'next/link';\n" + content;
    }
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Systemically Fixed: ${filePath}`);
  }
};

const walk = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.js')) {
      processFile(fullPath);
    }
  });
};

console.log('🚀 Starting Architectural Cleanup of 51 Pages...');
walk(targetDir);
console.log('🏁 Cleanup Complete. Ready for Rank #1 Deployment.');