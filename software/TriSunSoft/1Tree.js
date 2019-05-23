'use strict'

let data = {
  url: 'https://1tree.info/basic.htm',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://1tree.info/p/1tree.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
