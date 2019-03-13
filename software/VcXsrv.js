'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/vcxsrv/files/',
  version: {
    selector: 'a.download .sub-label',
    match: /-64\.(\d+[\d.]+\d+)/
  },
  download: {
    plain: 'https://sourceforge.net/projects/vcxsrv/files/latest/download'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
