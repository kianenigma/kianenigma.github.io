require("dotenv").config();
const settings = require("../../helpers/constants");
const fs = require("fs");
const matter = require("gray-matter");
const path = require("path");

const allSettings = settings.ALL_NOTE_SETTINGS;

module.exports = {
  eleventyComputed: {
    layout: (data) => {
      if (data.tags.indexOf("gardenEntry") != -1) {
        return "layouts/index.njk";
      }
      return "layouts/note.njk";
    },
    permalink: (data) => {
      if (data.tags.indexOf("gardenEntry") != -1) {
        return "/";
      }
      return data.permalink || undefined;
    },
    settings: (data) => {
      const noteSettings = {};
      allSettings.forEach((setting) => {
        let noteSetting = data[setting];
        let globalSetting = process.env[setting];

        let settingValue =
          noteSetting || (globalSetting === "true" && noteSetting !== false);
        noteSettings[setting] = settingValue;
      });
      return noteSettings;
    },
    hasSlides: (data) => {
      // Make dg-slides accessible in templates as hasSlides
      return !!data["dg-slides"];
    },
    slidesPermalink: (data) => {
      if (data["dg-slides"]) {
        const basePermalink = data.permalink || `/notes/${data.page.fileSlug}/`;
        // Remove trailing slash and add /slides/
        const slidesPath = basePermalink.replace(/\/$/, "") + "/slides/";
        return slidesPath;
      }
      return "";
    },
    slidesContent: (data) => {
      if (data["dg-slides"] && data.page && data.page.inputPath) {
        try {
          const fileContent = fs.readFileSync(data.page.inputPath, "utf-8");
          const parsed = matter(fileContent);
          // Extract content after frontmatter, removing any <style> tags (we'll handle them separately)
          let content = parsed.content;
          // Remove style tags from content
          content = content.replace(/<style>[\s\S]*?<\/style>/g, "");
          return content.trim();
        } catch (e) {
          console.error("Error reading slides content:", e);
          return "";
        }
      }
      return "";
    },
    slidesStyle: (data) => {
      if (data["dg-slides"] && data.page && data.page.inputPath) {
        try {
          const fileContent = fs.readFileSync(data.page.inputPath, "utf-8");
          const parsed = matter(fileContent);
          const content = parsed.content;
          // Extract style tags
          const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);
          if (styleMatch) {
            return styleMatch[1];
          }
        } catch (e) {
          console.error("Error reading slides style:", e);
        }
      }
      return "";
    },
  },
};
