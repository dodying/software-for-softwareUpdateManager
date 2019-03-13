'use strict'

let data = {
  url: 'https://caret.io/',
  version: {
    selector: '.button--download',
    attr: 'href',
    match: /download\/(.*?)\//
  },
  download: {
    selector: '.button--download'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped')(output, iPath, 'install', 'full.nupkg', null, 'lib\\net45')
  }
}
module.exports = data
