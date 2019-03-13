'use strict'

let data = {
  commercial: 3,
  url: 'https://www.digitalvolcano.co.uk/taskcanvasdownload.html',
  version: {
    selector: '#content li:nth-child(2)'
  },
  download: {
    plain: 'https://www.digitalvolcano.co.uk/download/TaskCanvas_setup.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
