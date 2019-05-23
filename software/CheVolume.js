'use strict'

let data = {
  commercial: 3,
  url: 'http://www.chevolume.com/Download.aspx',
  version: {
    selector: '#dlpagedllink'
  },
  download: {
    selector: '#dlpagedllink'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
