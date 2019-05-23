'use strict'

let data = {
  url: 'https://sourceforge.net/projects/emuleplus/files/eMulePlus/',
  version: {
    selector: '[headers="files_name_h"]>a',
    match: /eMulePlus-(.*)/
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a'
    }, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: 'Installer.exe'
    })
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
