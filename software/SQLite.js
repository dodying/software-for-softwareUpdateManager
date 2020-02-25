'use strict'

let data = {
  url: 'https://sqlite.org/download.html',
  version: 'td:has(#a9)+td+td',
  changelog: ['https://sqlite.org/changes.html', '.lessindent'],
  download: (res, $) => res.body.match(/'a9','(.*?)'/)[1],
  install: ['install_zipped_single', 'sqlite3.exe']
}
module.exports = data
