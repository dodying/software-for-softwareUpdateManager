'use strict'

let data = {
  url: 'http://www.51dzt.com/',
  preferPath: 'ksolaunch.exe',
  version: {
    selector: 'a[href$=".exe"]',
    attr: 'href'
  },
  download: {
    selector: 'a[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', '\\$EXEFILE', [/^\$/, /^config\.xml$/, /^TypeEasy\.exe$/])
  }
}
module.exports = data
