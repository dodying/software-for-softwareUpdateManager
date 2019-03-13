'use strict'

let data = {
  url: 'http://www.pcfreetime.com/formatfactory/CN/download.html',
  version: {
    selector: '.infor>ul>li'
  },
  download: {
    plain: 'http://down.pcgeshi.com/FormatFactory_setup.exe'
  },
  install: function (output, iPath) {
    return require('./../js/install_nsis')(output, iPath)
  }
}
module.exports = data
