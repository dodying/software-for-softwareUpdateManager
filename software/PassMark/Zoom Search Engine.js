'use strict'

let data = {
  url: 'https://www.zoomsearchengine.com/zoom/index.html',
  version: {
    selector: '.latestnews',
    match: /V(\d.*)/
  },
  download: {
    plain: 'https://www.zoomsearchengine.com/ftp/zoomsearch.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
