'use strict'

let data = {
  useProxy: true,
  url: 'https://www.libreoffice.org/download/download/',
  preferPath: 'program/swriter.exe',
  version: {
    selector: '.dl_version_number'
  },
  download: {
    plain: 'https://mirrors.shu.edu.cn/libreoffice/stable/{version}/win/x86_64/LibreOffice_{version}_Win_x64.msi'
  },
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
