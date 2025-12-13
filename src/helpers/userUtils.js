const fs = require("fs");
const matter = require("gray-matter");

function userComputed(data) {
  const computed = {};

  // Check for dg-slides frontmatter OR slides tag
  const hasSlides = !!(data["dg-slides"] || (data.tags && data.tags.includes("slides")));
  computed.hasSlides = hasSlides;

  if (hasSlides) {
    // Compute slidesPermalink
    const basePermalink = data.permalink || `/notes/${data.page.fileSlug}/`;
    // Remove trailing slash and add /slides/
    computed.slidesPermalink = basePermalink.replace(/\/$/, "") + "/slides/";

    // Compute slidesContent and slidesStyle
    if (data.page && data.page.inputPath) {
      try {
        const fileContent = fs.readFileSync(data.page.inputPath, "utf-8");
        const parsed = matter(fileContent);

        // slidesContent
        let content = parsed.content;
        content = content.replace(/<style>[\s\S]*?<\/style>/g, "");
        computed.slidesContent = content.trim();

        // slidesStyle
        const styleMatch = parsed.content.match(/<style>([\s\S]*?)<\/style>/);
        if (styleMatch) {
          computed.slidesStyle = styleMatch[1];
        } else {
            computed.slidesStyle = "";
        }

      } catch (e) {
        console.error("Error reading slides content/style:", e);
        computed.slidesContent = "";
        computed.slidesStyle = "";
      }
    } else {
        computed.slidesContent = "";
        computed.slidesStyle = "";
    }
  }

  return computed;
}

exports.userComputed = userComputed;
