'use strict'

let data = {
  url: 'https://www.hwinfo.com/download/',
  version: '.download>sub',
  changelog: ['https://www.hwinfo.com/version-history/', '.version-released+ul'],
  download: 'a[href$=".zip"][href*="sac.sk"]',
  install: 'install',
  other: {
    beta: {
      version: ['.btn-gray', 'text', /Download latest Beta v([\d.-]+)/],
      download: '.btn-gray a[href$=".zip"]'
    }
  }
}
module.exports = data
