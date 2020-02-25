'use strict'

let data = {
  url: 'https://glogg.bonnefon.org/files/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '[href$="-x86_64-setup.exe"]',
    attr: 'text',
    match: /glogg-v(.*?)-x86_64-setup.exe/,
    sort: true
  }),
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '[href$="-x86_64-setup.exe"]',
    sort: true
  }),
  install: 'install_nsis'
}
module.exports = data
