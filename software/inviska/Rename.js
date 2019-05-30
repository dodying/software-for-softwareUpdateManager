'use strict'

let data = {
  url: 'https://www.inviska.com/rename/',
  version: {
    selector: '[href$="x86-64_Portable.7z"]',
    attr: 'href'
  },
  download: {
    plain: 'https://www.inviska.com/files/rename/win/Inviska_Rename_{version}_x86-64_Portable.7z'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
