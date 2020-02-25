'use strict'

let data = {
  url: 'https://www.geforce.cn/drivers',
  version: ['[href*="GeForce_Experience"][href$=".exe"]', 'href'],
  download: '[href*="GeForce_Experience"][href$=".exe"]',
  install: 'install'
}
module.exports = data
