'use strict'

let data = {
  commercial: 3,
  url: 'https://www.winnc.com/download/',
  version: 'h2',
  changelog: {
    selector: '.section_wrapper',
    attr: 'text',
    match: /^WinNc [\d.]+/,
    split: true
  },
  download: 'http://www.winnc.com/setup.exe',
  install: 'install_inno'
}
module.exports = data
