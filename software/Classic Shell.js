'use strict'

let data = {
  url: 'https://sourceforge.net/projects/classicshell/files/',
  version: {
    selector: '[headers="files_name_h"]>a'
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a'
    }, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: /ClassicShellSetup_.*?.exe/
    })
  }
}
module.exports = data
