'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/innounp/files/innounp/',
  version: {
    selector: '[headers="files_name_h"]>a'
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a'
    }, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: /\d+(?!src)\.rar/
    })
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath, 'innounp.exe')
  }
}
module.exports = data
