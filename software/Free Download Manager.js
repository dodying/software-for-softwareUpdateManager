'use strict'

let data = {
  url: 'https://www.freedownloadmanager.org/download.htm',
  version: {
    selector: '.download_btn_new+div'
  },
  download: {
    selector: '.download_btn_new'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath, null, { '{code_CefInstallDir}': '{dir}' })
  }
}
module.exports = data
