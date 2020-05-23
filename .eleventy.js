const htmlmin = require("html-minifier");
const markdownIt = require("markdown-it");
const markdownItEmoji = require("markdown-it-emoji");
const options = {
    html: true
};

module.exports = function(eleventyConfig) {
  let markdownLib = markdownIt(options).use(markdownItEmoji);
  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('img');
  return {
    passthroughFileCopy: true
  }
}