'use strict'

let data = {
  url: 'https://antibody-software.com/web/software/software/wizfile-finds-your-files-fast/',
  version: '.smalldark',
  changelog: 'div:contains("WizFile")+div>ul',
  download: 'a[href*="/files/"]',
  install: 'install_inno'
}
module.exports = data
