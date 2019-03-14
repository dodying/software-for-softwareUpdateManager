'use strict'

let data = {
  url: 'https://privazer.com/download-shellbag-analyzer-shellbag-cleaner.php',
  version: {
    selector: 'h1'
  },
  download: {
    plain: 'https://privazer.com/shellbag_analyzer_cleaner.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
