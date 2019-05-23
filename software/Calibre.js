'use strict'

let data = {
  url: 'https://github.com/kovidgoyal/calibre/releases/latest',
  preferPath: 'calibre.exe',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  download: {
    plain: 'https://calibre-ebook.com/dist/win64'
  },
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  },
  other: {
    portable: {
      download: {
        plain: 'https://calibre-ebook.com/dist/portable'
      },
      install: function (output, iPath, fns) {
        return fns.install.cli(output, iPath, output, [require('path').resolve(iPath, './../../')])
      }
    }
  }
}
module.exports = data
