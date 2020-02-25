'use strict'

let data = {
  url: 'http://airlink.timelink.cn/download',
  version: ['.down_btn[href$=".exe"]', 'href', /AirLink ([\d.]+).exe/],
  changelog: ['http://airlink.timelink.cn/history', '.total_content'],
  download: '.down_btn[href$=".exe"]',
  install: 'install_nsis_cli',
  other: {
    max: {
      version: ['.down_btn[href$=".exe"][href*="AirLink(M)"]', 'href', /AirLink\(M\) ([\d.]+).exe/],
      download: '.down_btn[href$=".exe"][href*="AirLink(M)"]'
    }
  }
}
module.exports = data
