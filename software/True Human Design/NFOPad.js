'use strict'

let data = {
  url: 'https://truehumandesign.se/s_nfopad.php',
  version: '.downloadtable .menutd',
  changelog: {
    selector: '.content',
    attr: 'text',
    match: /^\[NFOPad [\d.]+/,
    split: true
  },
  download: 'a[href^="dl.php"]',
  install: 'install_nsis'
}
module.exports = data
