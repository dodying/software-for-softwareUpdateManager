'use strict'

let data = {
  url: 'http://www.psytec.co.jp/freesoft/01/',
  version: {
    selector: '[colspan="5"]>b:nth-child(2)'
  },
  download: {
    plain: 'http://www.psytec.co.jp/freesoft/01/PsQREdit.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  },
  other: {
    chs: {
      url: null,
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_118843.html'
      }
    }
  }
}
module.exports = data
