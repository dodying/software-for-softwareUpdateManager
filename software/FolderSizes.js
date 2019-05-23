'use strict'

let data = {
  url: 'https://www.foldersizes.com/download',
  version: {
    selector: '.download-button+p'
  },
  download: {
    plain: 'https://s3.amazonaws.com/KeyMetricSoft/FolderSizes/fs8-setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.ai(output, iPath)
  }
}
module.exports = data
