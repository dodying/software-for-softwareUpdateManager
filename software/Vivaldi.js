'use strict'

let data = {
  url: 'https://vivaldi.com/',
  version: {
    selector: 'a[href$=".exe"]',
    attr: 'href'
  },
  download: {
    selector: 'a[href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', null, null, 'Vivaldi-bin')
  }
}
module.exports = data
