import fs from 'fs';
import path from 'path';

const blogDir = path.join(process.cwd(), 'src/content/blog');
const calendarPath = path.join(process.cwd(), 'CONTENT_CALENDAR.md');

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function generateDummyContent(wordCount: number, internalLinksCount: number) {
  let words = [];
  const dummyWord = "lorem ";
  for (let i = 0; i < wordCount; i++) {
    words.push(dummyWord);
  }

  let content = words.join('');

  // Add some internal links
  for (let i = 0; i < internalLinksCount; i++) {
    content += ` [Link ${i}](/generator/url) `;
  }

  return content;
}

function generateMdx(title: string, keywordsRaw: string, categoryRaw: string) {
  const publishedAt = new Date().toISOString().split('T')[0];
  const description = `A comprehensive guide about ${title} focusing on ${keywordsRaw}.`;
  const category = categoryRaw.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').replace(/-+/g, '-');

  const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
publishedAt: "${publishedAt}"
category: "${category}"
faqItems:
  - question: "What is ${title.replace(/"/g, '\\"')}?"
    answer: "This is a dummy answer about ${title.replace(/"/g, '\\"')}. It provides necessary context for users."
  - question: "How do I use this information?"
    answer: "You can apply this knowledge by reading our comprehensive guides and testing out our tools."
  - question: "Are there any advanced features?"
    answer: "Yes, advanced features are available. Check our advanced section for more details and specific use cases."
---

`;

  const body = generateDummyContent(1050, 4);
  return frontmatter + body;
}

function scaffoldBlog() {
  if (!fs.existsSync(calendarPath)) {
      console.error("CONTENT_CALENDAR.md not found.");
      return;
  }

  const calendarContent = fs.readFileSync(calendarPath, 'utf8');
  const rowRegex = /\|\s*(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\s*\|\s*([A-H][^|]*)\|\s*([^|]+)\|\s*([^|]+)\|/g;

  let match;
  let count = 0;

  while ((match = rowRegex.exec(calendarContent)) !== null) {
    const [_, day, clusterRaw, titleRaw, keywordsRaw] = match;
    const title = titleRaw.trim();
    const slug = slugify(title);

    const filePath = path.join(blogDir, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
        const mdxContent = generateMdx(title, keywordsRaw.trim(), clusterRaw.trim());
        fs.writeFileSync(filePath, mdxContent);
        console.log(`Created: ${filePath}`);
        count++;
    }
  }

  console.log(`Scaffolded ${count} posts.`);
}

scaffoldBlog();
