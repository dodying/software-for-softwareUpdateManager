'use strict'

let data = {
  url: 'https://sourceforge.net/projects/emulemorph/files/MorphXT/',
  version: {
    selector: '[headers="files_name_h"]>a',
    match: /MorphXT (.*)/
  },
  download: {
    func: async (res, $, fns, choice) => fns.walkLink(res, fns, {
      selector: '[headers="files_name_h"]>a'
    }, {
      selector: '[headers="files_name_h"]>a[href$="/download"]',
      matchCheck: 'installer.exe'
    })
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
