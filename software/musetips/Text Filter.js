'use strict'

let data = {
  url: 'http://www.musetips.com/text-filter.html',
  version: {
    selector: '#table1>tbody>tr>td:nth-child(2)'
  },
  download: {
    plain: 'http://www.musetips.com/downloads/TextFilter_Portable.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
