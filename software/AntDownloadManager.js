'use strict'

let data = {
  commercial: 2,
  url: 'https://antdownloadmanager.com/download.php',
  version: ['.download_header:contains("Current version")', 'text', /Current version: (\d+[\d.]+\d+) Build (\d+) \(.*$/, '$1.$2'],
  changelog: '.download_item>ul',
  download: 'https://antdownloadmanager.com/cgi/download.cgi',
  install: ['install_inno', null, { '{code_AppPath}': '{dir}' }],
  other: {
    beta: {
      version: '.download_item_beta .download_a>a',
      download: '.download_item_beta .download_a>a'
    }
  }
}
module.exports = data
