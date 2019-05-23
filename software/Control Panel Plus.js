'use strict'

let data = {
  url: 'https://controlpanelplus.github.io/',
  version: {
    selector: 'h1[id]'
  },
  download: {
    plain: 'https://controlpanelplus.github.io/ControlPanelPlus.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
