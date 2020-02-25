'use strict'

let data = {
  url: 'https://www.rapidee.com/en/download',
  version: ['#winxp', 'text', /([\d.]+) build (\d+)/, '$1.$2'],
  changelog: '.block>ul',
  download: 'https://www.rapidee.com/download/RapidEEx64.zip',
  install: 'install_zipped_single'
}
module.exports = data
