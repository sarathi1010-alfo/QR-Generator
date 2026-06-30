const fs = require('fs');

const file = 'src/content/blog/qr-code-size-guide.mdx';
let content = fs.readFileSync(file, 'utf8');

// Replace any bad links we found earlier if they still exist.
// Like [QRBuild Free Generator](/) -> [QRBuild Free Generator](/#generator)
content = content.replace(/\[QRBuild Free Generator\]\(\/\)/g, '[QRBuild Free Generator](/#generator)');

fs.writeFileSync(file, content);
