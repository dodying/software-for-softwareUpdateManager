'use strict'

let data = {
  withoutHeader: true,
  url: 'https://sourceforge.net/projects/crengine/files/CoolReader3/cr3-newui-opengl/',
  version: {
    selector: '[headers="files_name_h"]>a[href*="win32"][href$=".zip/download"]'
  },
  download: {
    selector: '[headers="files_name_h"]>a[href*="win32"][href$=".zip/download"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
