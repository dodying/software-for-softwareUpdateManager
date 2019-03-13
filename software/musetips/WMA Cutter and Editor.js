'use strict'

let data = {
  url: 'http://www.musetips.com/free-wma-cutter-and-editor.html',
  version: {
    selector: '#table1>tbody>tr>td:nth-child(2)'
  },
  download: {
    plain: 'http://www.musetips.com/downloads/WMACutterSetup.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install_inno')(output, iPath)
  }
}
module.exports = data
