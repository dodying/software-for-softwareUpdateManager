'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/findandreplace/files/',
  version: {
    selector: 'a.download .sub-label'
  },
  download: {
    plain: 'https://sourceforge.net/projects/findandreplace/files/latest/download'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped')(output, iPath, 'install')
  }
}
module.exports = data
