'use strict'

let data = {
  url: 'https://sourceforge.net/projects/emule/files/eMule/',
  version: {
    selector: '[headers="files_name_h"]>a',
    match: /(.*)/
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
    return fns.install(output, iPath)
  }
}
module.exports = data
