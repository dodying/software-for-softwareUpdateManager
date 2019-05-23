'use strict'

let data = {
  url: 'https://sourceforge.net/projects/mcwin32/files/',
  version: {
    selector: '[headers="files_name_h"]>a'
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
