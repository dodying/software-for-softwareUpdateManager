'use strict'

let data = {
  url: 'https://truehumandesign.se/s_filelister.php',
  version: ['.downloadtable', 'text', /Version: ([\d.]+)/],
  download: 'a[href^="dl.php"]',
  install: 'install_nsis'
}
module.exports = data
