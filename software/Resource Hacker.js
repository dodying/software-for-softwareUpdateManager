'use strict'

let data = {
  url: 'http://www.angusj.com/resourcehacker/',
  version: {
    selector: 'a[name="download"]+h3'
  },
  download: {
    plain: 'http://www.angusj.com/resourcehacker/resource_hacker.zip'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped_single')(output, iPath, 'ResourceHacker.exe')
  }
}
module.exports = data
