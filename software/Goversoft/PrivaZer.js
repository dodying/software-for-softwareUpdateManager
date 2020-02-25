'use strict'

let data = {
  url: 'https://privazer.com/download.php',
  version: 'h1',
  changelog: {
    url: 'https://privazer.com/changelog.php',
    selector: '.text1',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: 'https://privazer.com/PrivaZer.exe',
  install: 'install_single'
}
module.exports = data
