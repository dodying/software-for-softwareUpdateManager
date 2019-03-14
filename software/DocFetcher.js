'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/docfetcher/files/docfetcher/',
  version: {
    selector: '[headers="files_name_h"]>a'
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res.request.uri.href, fns, {
      selector: '[headers="files_name_h"]>a',
      sort: true
    }, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: 'portable.zip'
    })
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
