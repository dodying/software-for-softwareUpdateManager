'use strict'

let data = {
  commercial: 0,
  url: 'https://www.trisunsoft.com/file-folder-lister/',
  version: {
    selector: '.green-button>span:nth-child(3)'
  },
  download: {
    plain: 'https://www.trisunsoft.com/freeware/file-folder-lister.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath, null, { '{userappdata}': require('path').resolve(iPath, './../../') })
  }
}
module.exports = data
