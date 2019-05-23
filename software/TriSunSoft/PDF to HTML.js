'use strict'

let data = {
  commercial: 3,
  url: 'https://www.pdf-helper.com/pdf-to-html/',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://www.pdf-helper.com/files/pdf-to-html.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath, null, { '{userappdata}': require('path').resolve(iPath, './../../') })
  }
}
module.exports = data
