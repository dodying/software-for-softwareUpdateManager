'use strict'

let data = {
  commercial: 2,
  url: 'https://sourceforge.net/projects/azureus/files/vuze/',
  version: {
    selector: '[headers="files_name_h"]>a'
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a'
    }, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: 'Installer64.exe'
    })
  }
}
module.exports = data
