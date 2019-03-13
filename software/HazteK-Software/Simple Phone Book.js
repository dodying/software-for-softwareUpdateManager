'use strict'

let data = {
  url: 'https://updates.haztek-software.com/changes.php?appid=5',
  version: {
    selector: 'h1+div+div'
  },
  download: {
    plain: 'https://www.haztek-software.com/files/SPB_Portable.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
