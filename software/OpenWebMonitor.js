'use strict'

let data = {
  url: 'http://owm.fatecore.com/',
  version: {
    selector: 'a[href$=".zip"]',
    attr: 'href'
  },
  download: {
    selector: 'a[href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_zipped', '.exe', 'install', 'app-32.7z')
  }
}
module.exports = data
