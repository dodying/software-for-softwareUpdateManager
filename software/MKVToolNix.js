'use strict'

let data = {
  url: 'https://mkvtoolnix.download/windows/releases/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, { selector: '.fb-n>a', attr: 'text', sort: true }),
  changelog: {
    url: 'https://mkvtoolnix.download/doc/NEWS.md',
    match: /# Version [\d.]+/,
    split: true
  },
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, { selector: '.fb-n>a', sort: true }, '.fb-n>a[href*="64-bit"][href$=".7z"]'),
  install: 'install'
}
module.exports = data
