'use strict'

let data = {
  url: 'https://softpointer.com/AudioShell.htm',
  version: '.header>h2:has(sup)',
  changelog: '.content+.content:contains("version")>ul',
  download: '.download_url',
  install: 'install_inno'
}
module.exports = data
