'use strict'

let data = {
  url: 'https://sourceforge.net/projects/rbtray/files/rbtray/',
  version: {
    selector: '[headers="files_name_h"]>a'
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a'
    }, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: '.zip'
    })
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, '64bit')
  }
}
module.exports = data
