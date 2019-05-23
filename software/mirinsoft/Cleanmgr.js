'use strict'

let data = {
  url: 'http://www.mirinsoft.com/cleanmgrplus/summary/11-cleanmgr/50-cleanmgr',
  version: {
    selector: '#component-area-1529739248826 > div > div > div:nth-child(2) > div > ul > li > strong:nth-child(1)'
  },
  download: {
    plain: 'http://www.mirinsoft.com/cleanmgrplus/send/11-cleanmgr/50-cleanmgr'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
