'use strict'

let data = {
  url: 'http://www.musetips.com/free-mp3-ringtone-maker.html',
  version: {
    selector: '#table1>tbody>tr>td:nth-child(2)'
  },
  download: {
    plain: 'http://www.musetips.com/downloads/MP3RingtoneMaker_Portable.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
