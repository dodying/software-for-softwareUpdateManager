'use strict'

let data = {
  url: 'http://skype.gmw.cn/down/skype-for-windows-desktop.html',
  version: {
    selector: '#textArea > div > div > p.action > a',
    attr: 'href'
  },
  download: {
    selector: '#textArea > div > div > p.action > a'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
