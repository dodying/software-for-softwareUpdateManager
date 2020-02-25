'use strict'

let data = {
  url: 'https://www.7-zip.org/download.html',
  version: 'h1+p',
  changelog: {
    url: 'https://www.7-zip.org/history.txt',
    split: true
  },
  download: '.Item>a[href$="x64.exe"]',
  install: 'install',
  other: {
    cli: {
      install: ['install', null, '7z.exe 7z.dll']
    },
    1505: {
      version: () => '15.05',
      download: 'https://sourceforge.net/projects/sevenzip/files/7-Zip/15.05/7z1505-x64.exe/download'
    }
  }
}
module.exports = data
