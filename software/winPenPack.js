'use strict'

let data = {
  url: 'https://sourceforge.net/projects/winpenpack/files/winPenPack_Suites/releases/',
  version: {
    selector: '[headers="files_name_h"]>a'
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a'
    }, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: 'win64.zip'
    })
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
