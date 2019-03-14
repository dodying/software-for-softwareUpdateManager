'use strict'

let data = {
  commercial: 1,
  url: 'https://www.xnview.com/en/xnviewmp/',
  version: {
    selector: '.muted'
  },
  download: {
    plain: 'https://download.xnview.com/XnViewMP-win-x64.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
