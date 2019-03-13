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
  install: function (output, iPath) {
    return require('./../js/install_msi')(output, iPath, null, data.preferPath)
  },
  other: {
    portable: {
      download: {
        plain: 'https://calibre-ebook.com/dist/portable'
      },
      install: function (output, iPath) {
        let killed = require('./../js/kill')(output, iPath)
        if (!killed) return false
        let path = require('path')
        let parentPath = path.parse(iPath).dir
        parentPath = path.parse(parentPath).dir
        require('child_process').execSync(`"${output}" "${parentPath}"`)
        return true
      }
    }
  }
}
module.exports = data
