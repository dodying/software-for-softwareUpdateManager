'use strict'

let data = {
  url: 'http://note.youdao.com/',
  version: {
    selector: '#version-info'
  },
  download: {
    plain: 'http://download.ydstatic.com/notewebsite/downloads/YNote.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
