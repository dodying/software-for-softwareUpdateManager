'use strict'

let data = {
  url: 'http://wpspdf.cn/',
  preferPath: 'ksolaunch.exe',
  version: {
    selector: 'a[href$=".exe"]',
    attr: 'href'
  },
  download: {
    selector: 'a[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return require('./WPS').install(output, iPath, fns)
  }
}
module.exports = data
