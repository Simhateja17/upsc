const fs = require('fs');
const path = require('path');

const files = [
  'image-removebg-preview (59) 1.png',
  'image-removebg-preview (65) 1.png',
  'image-removebg-preview (68) 1.png',
  'image-removebg-preview (71) 1.png',
  'tag-one.png',
  '📚.png'
];

const srcDir = path.join(__dirname, '..');
const destDir = path.join(__dirname, 'public');

console.log('Copying missing images...\n');

files.forEach(file => {
  const src = path.join(srcDir, file);
  const dest = path.join(destDir, file);
  
  try {
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`✓ Copied: ${file}`);
    } else {
      console.log(`✗ Not found: ${file}`);
    }
  } catch (error) {
    console.log(`✗ Error copying ${file}: ${error.message}`);
  }
});

console.log('\nDone!');
