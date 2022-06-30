const yaml = require('js-yaml');
const { DateTime, Settings } = require('luxon');
Settings.defaultLocale = 'en-AU';

module.exports = function(eleventyConfig) {
  eleventyConfig.addDataExtension('yaml', contents => yaml.load(contents));

  eleventyConfig.addPassthroughCopy('assets/img');
  eleventyConfig.addPassthroughCopy('assets/files');
  eleventyConfig.addPassthroughCopy({'assets/root': '.'});

  eleventyConfig.addFilter('readableDate', function(dateVal) {
    return DateTime.fromJSDate(dateVal, {zone: 'utc'}).toLocaleString(DateTime.DATE_HUGE);
  });
  eleventyConfig.addFilter('shortDate', function(dateVal) {
    return DateTime.fromJSDate(dateVal, {zone: 'utc'}).toLocaleString(DateTime.DATE_SHORT);
  });

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
};
