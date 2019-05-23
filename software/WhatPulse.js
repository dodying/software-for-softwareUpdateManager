'use strict'

let data = {
  commercial: 2,
  url: 'http://whatpulse.org/downloads/',
  version: {
    selector: '.toolTip[title*="Windows client"]',
    attr: 'title'
  },
  download: {
    plain: 'http://whatpulse.org/downloads/311/'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
