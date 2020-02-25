'use strict'

let data = {
  commercial: 3,
  url: 'http://www.restuner.com/news-history.htm',
  version: '#content>p:contains("Version")',
  changelog: '#content>p:contains("Version")+p',
  download: 'http://www.heaventools.com/download/rtsetup.exe',
  install: 'install_inno'
}
module.exports = data
