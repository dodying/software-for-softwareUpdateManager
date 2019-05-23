'use strict'

let data = {
  commercial: 3,
  url: 'https://www.duplicatedetective.com/download',
  version: {
    selector: '[itemprop="softwareVersion"]'
  },
  download: {
    plain: 'https://s3.amazonaws.com/KeyMetricSoft/Duplicate+File+Detective/DFD6-Setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.ai(output, iPath)
  }
}
module.exports = data
