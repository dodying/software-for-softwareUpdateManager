'use strict'

let data = {
  url: 'https://greatis.com/stopupdates10/',
  version: '.title+p',
  changelog: '.box:contains("Changelog")>ul',
  download: 'http://www.greatissoftware.com/stopupdates10.zip',
  install: ['install_zipped', 'install_inno_type']
}
module.exports = data
