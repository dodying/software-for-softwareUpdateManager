'use strict'

let data = {
  url: 'https://qemu.weilnetz.de/w64/',
  version: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[href^="qemu-w64-setup-"][href$=".exe"]',
      sort: true,
      match: /qemu-w64-setup-(.*?).exe/
    })
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[href^="qemu-w64-setup-"][href$=".exe"]',
      sort: true
    })
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
