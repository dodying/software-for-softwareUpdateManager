'use strict'

let data = {
  url: 'https://mirillis.com/download-action',
  version: {
    selector: '.download_btn+ul>li'
  },
  download: {
    selector: '.download_btn'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
