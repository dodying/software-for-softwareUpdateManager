'use strict'

let data = {
  url: 'https://texteditor.pro/pages/changes.php',
  version: {
    selector: '#custom-content>pre'
  },
  download: {
    plain: 'http://www.texteditor.pro/downloads/TextEditorPro64.7z'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
