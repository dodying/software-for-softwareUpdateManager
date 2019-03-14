'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/xlideit/files',
  version: {
    selector: '[headers="files_name_h"]>a'
  },
  download: {
    selector: '[headers="files_name_h"]>a'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
