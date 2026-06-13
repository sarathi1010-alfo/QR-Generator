import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: string;
  content: string;
  author?: string;
  updatedAt?: string;
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) return [];

  const fileNames = fs.readdirSync(blogDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      category: data.category,
      author: data.author,
      updatedAt: data.updatedAt,
    } as BlogPost;
  });

  return allPostsData.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      category: data.category,
      author: data.author,
      updatedAt: data.updatedAt,
    } as BlogPost;
  } catch (e) {
    return null;
  }
}
