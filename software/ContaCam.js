'use strict'

let data = {
  url: 'https://www.contaware.com/downloads/latest/ContaCam/english/',
  version: {
    selector: 'a[href$="Setup.exe"]',
    attr: 'href',
    match: /ContaCam-(.*?)-Setup.exe/
  },
  download: {
    selector: 'a[href$="Setup.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
