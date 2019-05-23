'use strict'

let data = {
  commercial: 3,
  url: 'https://www.fastkeysautomation.com/',
  version: {
    selector: '#footer > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h4:nth-child(1)'
  },
  download: {
    plain: 'https://www.fastkeysautomation.com/download/FastKeys_Setup_Portable.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
