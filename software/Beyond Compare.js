'use strict'

let data = {
  commercial: 3,
  url: 'http://scootersoftware.com/download.php?zz=dl4',
  version: {
    selector: '#content a[href*="zh"]',
    attr: 'href'
  },
  download: {
    selector: '#content a[href*="zh"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
