'use strict'

let data = {
  url: 'https://sqlitestudio.pl/index.rvt?act=download',
  version: 'a[href$=".zip"][href*="SQLiteStudio"]',
  changelog: ['https://sqlitestudio.pl/index.rvt?act=changelog', '.mainTdInternal>ul'],
  download: 'a[href$=".zip"][href*="SQLiteStudio"]',
  install: 'install'
}
module.exports = data
