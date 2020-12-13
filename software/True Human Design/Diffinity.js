'use strict'

let data = {
  url: 'http://truehumandesign.se/s_diffinity.php',
  version: ['.downloadtable', 'text', /Version: ([\d.]+)/],
  changelog: {
    selector: '.content',
    attr: 'text',
    match: /^\[Diffinity [\d.]+/,
    split: true
  },
  download: 'a[href^="dl.php"]',
  install: 'install_nsis'
}
module.exports = data
