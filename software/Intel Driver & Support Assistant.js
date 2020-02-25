'use strict'

let data = {
  url: 'https://downloadcenter.intel.com/download/28425',
  version: '.version>.value',
  changelog: 'p:contains("What\'s new")+p+ul',
  download: '.download-btn[href$=".exe"]',
  fixedPath: '%ProgramFiles(x86)%\\Intel\\Driver and Support Assistant\\DSATray.exe',
  install: 'install_cli_s'
}
module.exports = data
