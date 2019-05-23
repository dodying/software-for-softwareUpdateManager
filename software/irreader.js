'use strict'

let data = {
  url: 'http://irreader.fatecore.com/',
  version: {
    selector: 'h1'
  },
  download: {
    selector: 'a[href$="green.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_zipped', '.exe', 'install', 'app-32.7z')
  }
}
module.exports = data
