'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/clip-angel/files/',
  version: {
    selector: 'a.download .sub-label'
  },
  download: {
    plain: 'https://sourceforge.net/projects/clip-angel/files/latest/download'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
