'use strict'

let data = {
  url: 'https://care-eyes.com/release.html',
  version: 'h4[id^="version"]',
  changelog: 'h4[id^="version"]+p+ul',
  download: 'https://care-eyes.com/careueyes/v1/package/CareUEyes_setup.exe',
  install: 'install_inno'
}
module.exports = data
