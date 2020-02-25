'use strict'

let product = 'Dup Scout'

let data = {
  commercial: 3,
  url: 'https://www.dupscout.com/downloads.html',
  version: `.downloads_table tr:contains("${product}")`,
  changelog: ['https://www.dupscout.com/news.html', '.news_item'],
  download: `.downloads_table tr:contains("${product}") a[href$="x64.exe"]`,
  install: 'install_nsis',
  other: {
    Pro: {
      version: `.downloads_table tr:contains("${product} Pro")`,
      download: `.downloads_table tr:contains("${product} Pro") a[href$="x64.exe"]`
    },
    Ultimate: {
      version: `.downloads_table tr:contains("${product} Ultimate")`,
      download: `.downloads_table tr:contains("${product} Ultimate") a[href$="x64.exe"]`
    },
    Server: {
      version: `.downloads_table tr:contains("${product} Server")`,
      download: `.downloads_table tr:contains("${product} Server") a[href$="x64.exe"]`
    },
    Enterprise: {
      version: `.downloads_table tr:contains("${product} Enterprise")`,
      download: `.downloads_table tr:contains("${product} Enterprise") a[href$="x64.exe"]`
    }
  }
}
module.exports = data
