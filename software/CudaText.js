'use strict'

let data = {
  url: 'https://sourceforge.net/projects/cudatext/files/release/Windows/',
  version: {
    selector: '[headers="files_name_h"]>a'
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: /win-x64-(.*?)\.zip/
    })
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  },
  other: {
    beta: {
      url: 'https://sourceforge.net/projects/cudatext/files/beta_version/'
    }
  }
}
module.exports = data
