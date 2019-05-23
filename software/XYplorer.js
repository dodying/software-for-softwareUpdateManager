'use strict'

let data = {
  commercial: 2,
  url: 'https://www.xyplorer.com/',
  version: {
    selector: 'a[href$=".zip"]+br+br+p'
  },
  download: {
    plain: 'https://www.xyplorer.com/download/xyplorer_full.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', '.exe')
  }
}
module.exports = data
