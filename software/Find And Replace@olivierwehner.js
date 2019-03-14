'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/findandreplace/files/findandreplace/',
  version: {
    selector: '[headers="files_name_h"]>a'
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res.request.uri.href, fns, {
      selector: '[headers="files_name_h"]>a',
      sort: true
    }, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: '-win.zip'
    })
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install')
  }
}
module.exports = data
