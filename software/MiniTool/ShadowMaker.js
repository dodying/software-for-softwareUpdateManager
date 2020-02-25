'use strict'

let data = {
  commercial: 2,
  url: 'https://www.minitool.com/backup/upgrade-history.html',
  version: '.sm-upgrade-history>h3',
  changelog: '.sm-upgrade-history>ul',
  download: 'a[href*="download"][href$=".exe"]',
  install: 'install_inno_type'
}
module.exports = data
