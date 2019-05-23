'use strict'

let data = {
  url: 'http://www.mirinsoft.com/ca/summary/2-cloneapp/19-cloneapp',
  version: {
    selector: '#component-area-1529739248826 > div > div > div:nth-child(2) > div > ul > li > strong:nth-child(1)'
  },
  download: {
    plain: 'http://www.mirinsoft.com/ca/send/2-cloneapp/19-cloneapp'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
