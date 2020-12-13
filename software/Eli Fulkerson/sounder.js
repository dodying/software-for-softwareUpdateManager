'use strict';

module.exports = {
  url: 'https://download.elifulkerson.com/files/sounder/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '.glyph+a:not([href=".."])',
    sort: true,
    match: /(.*)/,
    attr: 'text'
  }),
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '.glyph+a:not([href=".."])',
    sort: true
  }, '.glyph+a[href$=".exe"]'),
  install: 'install_single'
};
