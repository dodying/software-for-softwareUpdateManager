'use strict'

let data = {
  url: 'https://sdi-tool.org/download/',
  version: {
    selector: '#list1 > tbody > tr:nth-child(2) > td:nth-child(3)'
  },
  download: {
    selector: '#list1 > tbody > tr.legend > td.download_button_container > a'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
