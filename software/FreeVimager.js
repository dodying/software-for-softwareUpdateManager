'use strict'

let data = {
  url: 'https://www.contaware.com/downloads/latest/FreeVimager/english/',
  version: {
    selector: 'a[href$="Setup.exe"]',
    attr: 'href',
    match: /FreeVimager-(.*?)-Setup.exe/
  },
  download: {
    selector: 'a[href$="Setup.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
