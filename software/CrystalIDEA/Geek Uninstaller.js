'use strict'

let data = {
  url: 'https://geekuninstaller.com/download',
  version: 'h1+b',
  changelog: {
    selector: '.stripe+.stripe>div',
    attr: 'text',
    match: /^[\d.]+ \[/,
    split: true
  },
  download: 'https://geekuninstaller.com/geek.7z',
  install: 'install_zipped_single'
}
module.exports = data
