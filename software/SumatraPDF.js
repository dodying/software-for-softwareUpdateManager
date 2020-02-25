'use strict'

let data = {
  url: 'https://www.sumatrapdfreader.org/sumatra.js',
  version: (res, $) => res.body.match(/gSumVer = "(.*)"/)[1],
  changelog: ['https://www.sumatrapdfreader.org/news.html', '#version_history~ul'],
  download: 'https://www.sumatrapdfreader.org/dl/SumatraPDF-{version}-64.zip',
  install: 'install_zipped_single'
}
module.exports = data
