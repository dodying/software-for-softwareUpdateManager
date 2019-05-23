'use strict'

let data = {
  commercial: 3,
  url: 'https://1tree.info/pro.htm',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://1tree.info/p/1tree-pro.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
