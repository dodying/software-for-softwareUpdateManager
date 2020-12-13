'use strict';

module.exports = {
  url: 'http://www.tomatolist.com/down.html',
  version: '#down_file_link',
  changelog: {
    url: '[href^="show_blog_page.html"]',
    selector: '.container',
    attr: 'text',
    match: /^[\d.]+/,
    split: true
  },
  download: '#down_file_link',
  install: 'install'
};
