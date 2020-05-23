const htmlmin = require("html-minifier");
const markdownIt = require("markdown-it");
const markdownItEmoji = require("markdown-it-emoji");
const options = {
    html: true
};

module.exports = function(eleventyConfig) {
  let markdownLib = markdownIt(options).use(markdownItEmoji);
  eleventyConfig.setLibrary("md", markdownLib);
  
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });
  
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('img');
  return {
    passthroughFileCopy: true
  }
}