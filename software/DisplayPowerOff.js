'use strict'

let data = {
  url: 'https://sourceforge.net/projects/doff/files/DisplayPowerOff/',
  version: {
    selector: '[headers="files_name_h"]>a'
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: '.7z'
    })
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, 'x64')
  }
}
module.exports = data
