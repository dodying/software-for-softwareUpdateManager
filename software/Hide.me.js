'use strict'

let data = {
  commercial: 2,
  url: 'https://hide.me/en/software/windows',
  version: {
    selector: '.c-btndownload+p'
  },
  download: {
    plain: 'https://hide.me/download/windows'
  },
  install: function (output, iPath) {
    return require('./../js/install_inno')(output, iPath)
  }
}
module.exports = data
