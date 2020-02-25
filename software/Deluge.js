'use strict'

let data = {
  url: 'http://download.deluge-torrent.org/windows/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'td>a[href$=".exe"]',
    match: /deluge-([\d.]+)-win32/,
    sort: true
  }),
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'td>a[href$=".exe"]',
    matchCheck: /deluge-([\d.]+)-win32/,
    sort: true
  }),
  install: 'install_nsis'
}
module.exports = data
