const markdownIt = require('markdown-it');
const yaml = require('js-yaml');
const { DateTime, Settings } = require('luxon');
const { parse } = require('csv-parse/sync');
Settings.defaultLocale = 'en-AU';

module.exports = function(eleventyConfig) {
  const md = new markdownIt({
    html: true
  });

  eleventyConfig.addDataExtension('yaml', contents => yaml.load(contents));
  eleventyConfig.addDataExtension('csv', contents => parse(contents, {
    skip_empty_lines: true
  }));

  eleventyConfig.addPassthroughCopy('assets/img');
  eleventyConfig.addPassthroughCopy('assets/files');
  eleventyConfig.addPassthroughCopy({'assets/root': '.'});

  eleventyConfig.addFilter('readableDate', function(dateVal) {
    return DateTime.fromJSDate(dateVal, {zone: 'utc'}).toLocaleString(DateTime.DATE_HUGE);
  });
  eleventyConfig.addFilter('shortDate', function(dateVal) {
    return DateTime.fromJSDate(dateVal, {zone: 'utc'}).toLocaleString(DateTime.DATE_SHORT);
  });

  eleventyConfig.addPairedShortcode('markdown', (content) => {
    return md.render(content);
  });

  // Raw text partials (headings pulled into a styled <h1>). Watched explicitly
  // because .txt is not a template format, so --serve would otherwise ignore
  // edits to them.
  eleventyConfig.addWatchTarget('./src/_content/**/*.txt');

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
};
