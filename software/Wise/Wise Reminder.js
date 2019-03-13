'use strict'

let data = {
  url: 'https://www.wisecleaner.com/wise-reminder.html',
  version: {
    selector: '#free-download+p'
  },
  download: {
    plain: 'http://downloads.wisecleaner.com/soft/WRMSetup.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install_inno')(output, iPath)
  }
}
module.exports = data
