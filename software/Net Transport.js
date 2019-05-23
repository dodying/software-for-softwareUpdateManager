'use strict'

let data = {
  commercial: 3,
  url: 'http://xi-soft.com/download.htm',
  version: {
    selector: '[href="downloads/NXSetup_x64.zip"]',
    match: /Net Transport v(.*)/
  },
  download: {
    plain: 'http://xi-soft.com/downloads/NXSetup_x64.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_inno_type')
  }
}
module.exports = data
