'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/pyscripter/files/',
  version: {
    selector: 'a.download .sub-label'
  },
  download: {
    plain: 'https://sourceforge.net/projects/pyscripter/files/latest/download'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
