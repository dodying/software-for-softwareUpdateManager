'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/dxwnd/files/Latest%20build/',
  version: {
    selector: '.file .name',
    match: /(.*)_build.rar/
  },
  download: {
    selector: '.file a'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
