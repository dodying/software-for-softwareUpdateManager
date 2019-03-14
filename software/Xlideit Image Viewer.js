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
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
