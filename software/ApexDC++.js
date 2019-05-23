'use strict'

let data = {
  url: 'https://sourceforge.net/projects/apexdc/files/ApexDC%2B%2B/',
  version: {
    selector: '[headers="files_name_h"]>a'
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a'
    }, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: 'x64_setup.exe'
    })
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
