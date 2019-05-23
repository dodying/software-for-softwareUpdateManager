'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/dosbox/files/dosbox/',
  version: {
    selector: '[headers="files_name_h"]>a'
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a'
    }, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: 'win32-installer.exe'
    })
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath, 'innounp.exe')
  }
}
module.exports = data
