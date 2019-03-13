'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/mpcbe/files/',
  version: {
    selector: 'a.download .sub-label'
  },
  download: {
    plain: 'https://sourceforge.net/projects/mpcbe/files/latest/download'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped')(output, iPath, 'install_inno')
  }
}
module.exports = data
