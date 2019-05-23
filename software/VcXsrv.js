'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/vcxsrv/files/vcxsrv/',
  version: {
    selector: '[headers="files_name_h"]>a'
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a'
    }, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: /vcxsrv-64\.(.*)\.installer\.exe/
    })
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
