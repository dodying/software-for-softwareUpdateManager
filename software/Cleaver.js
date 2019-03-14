'use strict'

let data = {
  url: 'https://blog.getcleaver.com/',
  version: {
    selector: 'h2'
  },
  download: {
    plain: 'https://getcleaver.com/downloads/windows'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_zipped', null, 'install', 'app-32.7z')
  }
}
module.exports = data
