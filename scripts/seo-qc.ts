import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');
const MIN_WORDS = 300;
const MIN_INTERNAL_LINKS = 2;

interface QCReport {
  file: string;
  wordCount: number;
  hasFaq: boolean;
  internalLinks: number;
  errors: string[];
}

function analyzeMarkdown(content: string): { wordCount: number, internalLinks: number } {
  // basic word count
  const words = content.replace(/[#*`_\[\]()]/g, ' ').split(/\s+/).filter(w => w.length > 0);

  // basic markdown link extraction for relative links starting with /
  const linkRegex = /\[.*?\]\(\/(.*?)\)/g;
  let match;
  let internalLinks = 0;

  while ((match = linkRegex.exec(content)) !== null) {
    internalLinks++;
  }

  return { wordCount: words.length, internalLinks };
}

function runQC() {
  if (!fs.existsSync(BLOG_DIR)) {
    console.error(`Blog directory not found: ${BLOG_DIR}`);
    return;
  }

  const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.mdx'));
  let totalErrors = 0;

  console.log('Running SEO Quality Control...\n');

  files.forEach(file => {
    const fullPath = path.join(BLOG_DIR, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const { wordCount, internalLinks } = analyzeMarkdown(content);
    const hasFaq = Array.isArray(data.faqItems) && data.faqItems.length > 0;

    const errors: string[] = [];

    if (wordCount < MIN_WORDS) {
      errors.push(`Word count (${wordCount}) is below minimum of ${MIN_WORDS}`);
    }

    // According to strategy: minimum 3-5 Q&As (AEO Optimization Layer)
    if (!hasFaq || data.faqItems.length < 3) {
      errors.push(`FAQ schema missing or insufficient. Requires at least 3 FAQ items for AEO.`);
    }

    if (internalLinks < MIN_INTERNAL_LINKS) {
      errors.push(`Internal links (${internalLinks}) are below minimum of ${MIN_INTERNAL_LINKS}`);
    }

    if (errors.length > 0) {
      console.log(`❌ ${file}`);
      errors.forEach(err => console.log(`   - ${err}`));
      totalErrors += errors.length;
    } else {
      console.log(`✅ ${file} (Words: ${wordCount}, FAQs: ${data.faqItems.length}, Links: ${internalLinks})`);
    }
  });

  console.log('\nQC Complete.');
  if (totalErrors > 0) {
    console.log(`Found ${totalErrors} issues that need to be addressed before publishing.`);
  } else {
    console.log('All files passed QC!');
  }
}

runQC();
