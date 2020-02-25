'use strict'

let data = {
  commercial: 3,
  url: 'https://www.hamrick.com/vuescan/vuescan.htm',
  version: 'p:has([name="changes"])',
  changelog: 'p:has([name="changes"])+ul',
  download: (res, $, fns, choice) => fns.walkLink('https://www.hamrick.com/download.html', fns, '.vsDownloadLink'),
  install: 'install_single'
}
module.exports = data
