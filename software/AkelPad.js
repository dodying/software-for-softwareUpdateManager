'use strict'

let data = {
  url: 'https://sourceforge.net/projects/akelpad/files/AkelPad%204/',
  version: {
    selector: '[headers="files_name_h"]>a'
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a'
    }, {
      selector: '[headers="files_name_h"]>a'
    }, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: 'x64-setup.exe'
    })
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, '$_11_')
  }
}
module.exports = data
