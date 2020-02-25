'use strict'

let data = {
  commercial: 3,
  url: 'https://bulkimagedownloader.com/',
  version: '.smalldark',
  changelog: ['https://bulkimagedownloader.com/bulk-image-downloader-version-history/', 'div:contains("What\'s new")+div>ul'],
  download: 'a[href*="/files/"]',
  install: 'install_inno'
}
module.exports = data
