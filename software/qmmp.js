'use strict'

let data = {
  url: 'http://qmmp.ylsoftware.com/files/windows/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a',
    sort: true,
    matchCheck: /^[\d.]+\/$/
  }, {
    selector: 'a',
    sort: true,
    match: /qmmp-([\d.]+)-win32.exe/
  }),
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a',
    sort: true,
    matchCheck: /^[\d.]+\/$/
  }, {
    selector: 'a',
    sort: true,
    matchCheck: /qmmp-([\d.]+)-win32.exe/
  }),
  install: 'install_nsis'
}
module.exports = data
