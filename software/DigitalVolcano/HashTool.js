'use strict'

let data = {
  url: 'https://www.digitalvolcano.co.uk/hash.html',
  version: {
    selector: '#content div+div>p+ul>li:nth-child(2)'
  },
  download: {
    selector: 'a.button-green'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath, 'Hash_Tool.exe')
  }
}
module.exports = data
