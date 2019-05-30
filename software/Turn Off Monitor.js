'use strict'

let data = {
  url: 'https://sourceforge.net/projects/turnoffmonitor/files/',
  version: {
    selector: '[headers="files_name_h"]>a'
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: '.zip'
    })
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
