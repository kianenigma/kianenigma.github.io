const fs = require("fs");
const matter = require("gray-matter");

function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}
function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
  // Feel free to add any plugin you want here instead of /.eleventy.js

  // Add a collection for slides pages
  eleventyConfig.addCollection("slides", function(collectionApi) {
    const notes = collectionApi.getFilteredByGlob("**/notes/**/*.md");
    const slides = [];

    notes.forEach((note) => {
      if (note.data && note.data["dg-slides"]) {
        // Store inputPath for later use, don't read files during collection creation
        slides.push({
          inputPath: note.inputPath,
          data: {
            ...note.data,
            slidesPermalink: note.data.permalink
              ? note.data.permalink.replace(/\/$/, "") + "/slides/"
              : `/notes/${note.page ? note.page.fileSlug : note.fileSlug}/slides/`,
            slidesTitle: note.data.title || (note.page ? note.page.fileSlug : note.fileSlug),
          }
        });
      }
    });

    return slides;
  });

  // Add a filter to extract slides content
  eleventyConfig.addFilter("extractSlidesContent", function(filePath) {
    return extractSlidesContent(filePath);
  });

  // Add a filter to extract slides style
  eleventyConfig.addFilter("extractSlidesStyle", function(filePath) {
    return extractSlidesStyle(filePath);
  });
}

function extractSlidesContent(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const parsed = matter(fileContent);
    let content = parsed.content;
    // Remove style tags from content (we handle them separately)
    content = content.replace(/<style>[\s\S]*?<\/style>/g, "");
    return content.trim();
  } catch (e) {
    console.error("Error extracting slides content:", e);
    return "";
  }
}

function extractSlidesStyle(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const parsed = matter(fileContent);
    const content = parsed.content;
    const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);
    if (styleMatch) {
      return styleMatch[1].trim();
    }
    return "";
  } catch (e) {
    console.error("Error extracting slides style:", e);
    return "";
  }
}

exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
