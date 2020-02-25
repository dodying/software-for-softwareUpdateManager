'use strict'

let data = {
  url: 'http://pcfreetime.com/picosmos/ps_index.php',
  version: ['a[href$=".exe"][href*="PSX64"]', 'href', /PSX64Setup(.*?).exe/],
  download: 'a[href$=".exe"][href*="PSX64"]',
  install: 'install_nsis'
}
module.exports = data
