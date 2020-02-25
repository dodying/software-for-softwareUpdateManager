'use strict'

let data = {
  url: 'https://qemu.weilnetz.de/w64/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '[href^="qemu-w64-setup-"][href$=".exe"]',
    sort: true,
    match: /qemu-w64-setup-(.*?).exe/
  }),
  changelog: {
    selector: 'body',
    attr: 'text',
    match: /^\d+-\d+-\d+:/,
    split: true
  },
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '[href^="qemu-w64-setup-"][href$=".exe"]',
    sort: true
  }),
  install: 'install_nsis'
}
module.exports = data
