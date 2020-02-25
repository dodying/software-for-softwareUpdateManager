'use strict'

let data = {
  url: 'https://privazer.com/download-shellbag-analyzer-shellbag-cleaner.php',
  version: 'h1',
  changelog: {
    selector: '#settings>.text1',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: 'https://privazer.com/shellbag_analyzer_cleaner.exe',
  install: 'install_single'
}
module.exports = data
