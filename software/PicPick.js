'use strict'

let data = {
  commercial: 1,
  url: 'https://picpick.app/zh/download',
  version: {
    selector: 'h3+div'
  },
  download: {
    plain: 'https://www.picpick.org/releases/latest/picpick_portable.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
