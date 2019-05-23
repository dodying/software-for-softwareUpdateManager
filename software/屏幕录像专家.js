'use strict'

let data = {
  commercial: 3,
  url: 'http://www.tlxsoft.com/xz.htm',
  version: {
    selector: 'a[href$=".zip"]',
    attr: 'href'
  },
  download: {
    selector: 'a[href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_inno', '.exe')
  }
}
module.exports = data
