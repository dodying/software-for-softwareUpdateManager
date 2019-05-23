'use strict'

let data = {
  commercial: 3,
  url: 'http://www.burnaware.com/download.html',
  version: {
    selector: 'h4:contains("BurnAware Professional")+h5+p'
  },
  download: {
    selector: 'a[href$=".exe"][href*="_pro_"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
