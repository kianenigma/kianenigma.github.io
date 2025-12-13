const fs = require("fs");
const matter = require("gray-matter");

function extractSlidesContent(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const parsed = matter(fileContent);
    let content = parsed.content;
    // Remove style tags from content (we handle them separately)
    content = content.replace(/<style>[\s\S]*?<\/style>/g, "");
    // Convert reveal.js fragment syntax from <!-- element class="fragment" --> to <!-- .element: class="fragment" -->
    content = content.replace(/<!--\s*element\s+class="fragment"\s*-->/g, '<!-- .element: class="fragment" -->');
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

module.exports = class {
  data() {
    return {
      eleventyExcludeFromCollections: true,
      pagination: {
        data: "collections.slides",
        size: 1,
        alias: "slide",
        addAllPagesToCollections: true,
      },
      permalink: (data) => {
        return data.slide.data.slidesPermalink + "index.html";
      },
      layout: "layouts/slides.njk",
      eleventyComputed: {
        title: (data) => data.slide.data.slidesTitle,
        slidesContent: (data) => {
          return extractSlidesContent(data.slide.inputPath);
        },
        slidesStyle: (data) => {
          return extractSlidesStyle(data.slide.inputPath);
        },
      },
    };
  }

  render() {
    // The layout will handle rendering
    return "";
  }
};

