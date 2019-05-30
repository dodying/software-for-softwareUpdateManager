'use strict'

let data = {
  commercial: 2,
  url: 'http://www.4t-niagara.com/tray.html',
  version: {
    selector: '.download_link>ul>li'
  },
  download: {
    plain: 'http://www.4t-niagara.com/files/4t-min.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
