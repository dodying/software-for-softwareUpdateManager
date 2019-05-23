'use strict'

let data = {
  url: 'http://www.mirinsoft.com/ua/summary/13-ca-ua/47-cloneapp-ua',
  version: {
    selector: '#component-area-1529739248826 > div > div > div:nth-child(2) > div > ul > li > strong:nth-child(1)'
  },
  download: {
    plain: 'http://www.mirinsoft.com/ua/send/13-ca-ua/47-cloneapp-ua'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
