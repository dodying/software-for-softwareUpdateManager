'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/findandreplace/files/findandreplace/',
  version: {
    // selector: 'a.download .sub-label'
    func: async (res, $, fns, choice) => fns.walkLink(res.request.uri.href, fns, { selector: '[headers="files_name_h"]>a', attr: 'text', sort: true })
  },
  download: {
    // plain: 'https://sourceforge.net/projects/findandreplace/files/latest/download'
    func: async (res, $, fns, choice) => fns.walkLink(res.request.uri.href, fns, { selector: '[headers="files_name_h"]>a', sort: true }, '[headers="files_name_h"]>a[href*="-win.zip/download"]')
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install')
  }
}
module.exports = data
