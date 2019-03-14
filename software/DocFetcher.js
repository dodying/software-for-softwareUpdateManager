'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/docfetcher/files/docfetcher/',
  version: {
    func: async (res, $, fns, choice) => fns.walkLink(res.request.uri.href, fns, { selector: '[headers="files_name_h"]>a', attr: 'text', sort: true })
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res.request.uri.href, fns, { selector: '[headers="files_name_h"]>a', sort: true }, '[headers="files_name_h"]>a[href*="portable.zip/download"]')
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
