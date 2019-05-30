'use strict'

let data = {
  url: 'https://www.inviska.com/mkvextract/',
  version: {
    selector: '[href$="x86-64_Portable.7z"]',
    attr: 'href'
  },
  download: {
    plain: 'https://www.inviska.com/files/mkvextract/win/Inviska_MKV_Extract_{version}_x86-64_Portable.7z'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
