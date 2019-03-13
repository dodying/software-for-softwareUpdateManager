'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/xlideit/files',
  version: {
    selector: 'a.download .sub-label'
  },
  download: {
    plain: 'https://sourceforge.net/projects/xlideit/files/latest/download'
  },
  install: function (output, iPath) {
    return require('./../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
