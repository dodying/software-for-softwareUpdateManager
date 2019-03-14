'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/clip-angel/files/',
  version: {
    selector: '[headers="files_name_h"]>a'
  },
  download: {
    selector: '[headers="files_name_h"]>a'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
