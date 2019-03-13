'use strict'

let data = {
  url: 'https://updates.haztek-software.com/changes.php?appid=1',
  version: {
    selector: 'h1+div+div'
  },
  download: {
    plain: 'https://www.haztek-software.com/files/StorURL3_Portable.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
