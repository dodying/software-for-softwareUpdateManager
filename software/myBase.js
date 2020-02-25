'use strict'

let data = {
  commercial: 3,
  url: 'http://www.wjjsoft.com/download.html',
  version: '.CLS_Item:contains("Windows")>td+td',
  changelog: ['http://www.wjjsoft.com/mybase_v7_changelog.html', 'h2+div>ol'],
  download: (res, $) => '/dl_' + $('.CLS_Item:contains("Windows") a').eq(0).attr('href').match(/javascript:dl\('(.*?)'\);/)[1],
  install: ['install_zipped', 'install_inno']
}
module.exports = data
