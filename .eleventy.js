module.exports = function(eleventyConfig) {
	
  let markdownIt = require("markdown-it");
  let markdownItEmoji = require("markdown-it-emoji");
  let options = {
    html: true
  };
  let markdownLib = markdownIt(options).use(markdownItEmoji);
  
  eleventyConfig.setLibrary("md", markdownLib);
	
	
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('img');
  return {
    passthroughFileCopy: true
  }
}