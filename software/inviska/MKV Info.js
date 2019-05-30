'use strict'

let data = {
  url: 'https://www.inviska.com/mkvinfo/',
  version: {
    selector: '[href$="x86-64_Portable.7z"]',
    attr: 'href'
  },
  download: {
    plain: 'https://www.inviska.com/files/mkvinfo/win/Inviska_MKV_Info_{version}_x86-64_Portable.7z'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
