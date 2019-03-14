'use strict'

let data = {
  url: 'https://www.videoder.com/download/videoder-for-windows?arch=64',
  version: {
    selector: '#restart-download-button',
    attr: 'href',
    match: /Setup%20(.*?).exe/
  },
  download: {
    selector: '#restart-download-button'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'app-64.7z')
  }
}
module.exports = data
