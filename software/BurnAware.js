'use strict'

let data = {
  commercial: 3,
  url: 'http://www.burnaware.com/download.html',
  version: 'h4:contains("BurnAware Professional")+h5+p',
  download: 'a[href$=".exe"][href*="_pro_"]',
  install: 'install_inno'
}
module.exports = data
