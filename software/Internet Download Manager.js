'use strict'

let data = {
  commercial: 3,
  url: 'https://www.internetdownloadmanager.com/news.html',
  version: ['.style28', 'text', /version ([\d.]+) Build (\d+)/, '$1.$2'],
  changelog: '.style12+ul',
  download: async (res, $, fns, choice) => fns.walkLink('https://www.internetdownloadmanager.com/download.html', fns, 'a[href$=".exe"]'),
  install: ['install_cli', null, ['/skipdlgs'], { wait: true }]
}
module.exports = data
