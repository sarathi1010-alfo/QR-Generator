const fs = require('fs');
const files = fs.readdirSync('src/content/blog');
const dupes = [];
for (const file of files) {
  const content = fs.readFileSync('src/content/blog/' + file, 'utf8');
  if (content.includes('lorem lorem lorem')) {
    fs.unlinkSync('src/content/blog/' + file);
    dupes.push(file.replace('.mdx', ''));
    console.log('Deleted:', file);
  }
}
