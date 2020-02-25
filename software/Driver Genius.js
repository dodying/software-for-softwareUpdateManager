'use strict'

let data = {
  useProxy: true,
  commercial: 3,
  url: 'http://www.driver-soft.com/download.html',
  version: 'p>strong',
  changelog: {
    selector: '.k_s',
    attr: 'text',
    match: /^Driver Genius [\d.]+/,
    split: true
  },
  download: 'http://www.driver-soft.com/products/DG_Setup.exe',
  install: 'install_inno'
}
module.exports = data
