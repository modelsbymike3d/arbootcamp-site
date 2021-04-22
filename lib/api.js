import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
const removeMd = require("remove-markdown");

const getAllFiles = function (dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(join(dirPath, "/", file));
    }
  });
  return arrayOfFiles;
};

export function listFiles(directory) {
  return fs.readdirSync(directory);
}

export function parseMarkdownFile(filePath) {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    ...data,
    content,
    excerpt: removeMd(content).slice(0, 250).trim() + "...",
  };
}

export function parseJsonFile(filePath) {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);
  return data;
}

export function getPages(dirName) {
  const directory = join(process.cwd(), dirName);
  const files = getAllFiles(directory);

  let parsedFiles = [];
  switch (dirName) {
    case "_newsletter": {
      parsedFiles = files
        .map((slug) => parseMarkdownFile(slug))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
      break;
    }
    case "_blog": {
      parsedFiles = files
        .map((slug) => parseMarkdownFile(slug))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
      break;
    }
    case "_guides": {
      parsedFiles = files
        .map((slug) => parseMarkdownFile(slug))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
      break;
    }
    case "_filters": {
      parsedFiles = files
        .map((slug) => parseJsonFile(slug))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
      break;
    }
    default: {
      break;
    }
  }
  return parsedFiles;
}

export function getFileByPath(dirName, pathName) {
  const constructedPath =
    typeof pathName === "string" ? pathName : `${pathName.join("/")}`;
  const files = getPages(dirName);
  let returnFile = null;
  for (const f of files) {
    if (f.path === constructedPath) {
      returnFile = f;
    }
  }
  return returnFile;
}

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
