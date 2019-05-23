'use strict'

let data = {
  url: 'https://sourceforge.net/projects/beebeep/files/Windows/',
  version: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a',
      sort: true,
      matchCheck: '.zip',
      match: /(\d+[\d.]+\d+)/
    })
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a',
      sort: true,
      matchCheck: '.zip'
    })
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
