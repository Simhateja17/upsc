const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..');
const publicDir = path.join(__dirname, 'public');

const filesToCopy = [
  { src: 'image-removebg-preview (24) 1 (1).png', dest: 'badge-30day-streak.png' },
  { src: 'image-removebg-preview (23) 1.png', dest: 'badge-quick-learner.png' },
  { src: 'image-removebg-preview (22) 1.png', dest: 'badge-95-accuracy.png' },
  { src: 'Icon.png', dest: 'icon-flashcards.png' },
  { src: 'list-fail.png', dest: 'icon-wrong-attempts.png' },
  { src: 'tree-list.png', dest: 'icon-mindmaps.png' },
  { src: 'newspaper-folding.png', dest: 'icon-quick-notes.png' },
  { src: 'image-removebg-preview (22) 1.png', dest: 'image-removebg-preview (22) 1.png' },
  { src: 'image-removebg-preview (59) 1.png', dest: 'image-removebg-preview (59) 1.png' },
  { src: 'image-removebg-preview (65) 1.png', dest: 'image-removebg-preview (65) 1.png' },
  { src: 'image-removebg-preview (68) 1.png', dest: 'image-removebg-preview (68) 1.png' },
  { src: 'image-removebg-preview (71) 1.png', dest: 'image-removebg-preview (71) 1.png' },
  { src: 'tag-one.png', dest: 'tag-one.png' },
  { src: '📚.png', dest: '📚.png' }
];

console.log('Copying images to public folder...\n');

filesToCopy.forEach(({ src, dest }) => {
  const srcPath = path.join(sourceDir, src);
  const destPath = path.join(publicDir, dest);
  
  try {
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✓ Copied: ${src} → ${dest}`);
    } else {
      console.log(`✗ Source not found: ${src}`);
    }
  } catch (error) {
    console.log(`✗ Error copying ${src}: ${error.message}`);
  }
});

console.log('\nDone!');
