'use strict'

let data = {
  url: 'http://www.ipneed.com/main/download.html',
  version: {
    selector: '#download > table > tbody > tr:nth-child(5) > td:nth-child(2)'
  },
  download: {
    plain: 'http://www.ipneed.com/download/IPRadar5.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
