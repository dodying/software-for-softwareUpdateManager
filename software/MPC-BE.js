'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/mpcbe/files/MPC-BE/Release%20builds/',
  version: {
    selector: '[headers="files_name_h"]>a',
    match: /(.*)/
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a'
    }, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: '.x64.7z'
    })
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  },
  other: {
    nightly: {
      url: 'https://sourceforge.net/projects/mpcbe/files/MPC-BE/Nightly%20Builds%20%28from%20svn%20trunk%29/'
    }
  }
}
module.exports = data
