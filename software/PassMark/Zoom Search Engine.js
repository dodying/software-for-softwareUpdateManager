'use strict'

let data = {
  url: 'https://www.zoomsearchengine.com/zoom/index.html',
  version: ['.latestnews', 'text', /V(\d.*)/],
  changelog: ['https://www.zoomsearchengine.com/zoom/whatsnew.html', '#windows>ul'],
  download: 'https://www.zoomsearchengine.com/ftp/zoomsearch.exe',
  install: 'install_inno_type'
}
module.exports = data
