'use strict'

let data = {
  url: 'https://sourceforge.net/projects/eumat/files/Installer/',
  version: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: '.exe',
      match: /64_(.*?).exe/
    })
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: '.exe'
    })
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
