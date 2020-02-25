'use strict'

let data = {
  commercial: 3,
  url: 'https://download.smallpdf.com/desktop/win32/RELEASES',
  version: (res, $) => res.body.match(/Smallpdf-(.*?)-full.nupkg/),
  download: 'https://download.smallpdf.com/desktop/win/Smallpdf-{version}-full.nupkg',
  install: ['install', null, 'lib\\net*']
}
module.exports = data
