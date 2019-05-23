'use strict'

let data = {
  url: 'https://www.osforensics.com/tools/volatility-workbench.html',
  version: {
    selector: '.feature:contains("Download")+p'
  },
  download: {
    plain: 'https://www.osforensics.com/downloads/VolatilityWorkbench.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
