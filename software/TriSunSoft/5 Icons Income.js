'use strict'

let data = {
  commercial: 3,
  url: 'http://huufs.com/5-icons-income.htm',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'http://huufs.com/f/5-icons-income.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
