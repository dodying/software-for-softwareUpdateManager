'use strict'

let data = {
  commercial: 3,
  url: 'https://www.diskinternals.com/mail-recovery-express/',
  version: {
    selector: '.divh5'
  },
  download: {
    plain: 'https://www.diskinternals.com/download/Mail_Recovery_Express.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
