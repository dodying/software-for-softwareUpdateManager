'use strict'

let data = {
  commercial: 3,
  url: 'https://www.folderico.com/download.html',
  version: {
    selector: 'h4.media-heading:contains("Download FolderIco")+p'
  },
  download: {
    plain: 'https://www.folderico.com/download/FolderIcoSetup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath)
  }
}
module.exports = data
