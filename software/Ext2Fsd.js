'use strict'

let data = {
  url: 'https://sourceforge.net/projects/ext2fsd/files/Ext2fsd/',
  version: {
    selector: '[headers="files_name_h"]>a'
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a'
    }, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: '.7z'
    })
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, '*\\Setup')
  }
}
module.exports = data
