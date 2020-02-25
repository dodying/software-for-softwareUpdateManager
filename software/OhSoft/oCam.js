'use strict'

let data = {
  url: 'https://github.com/ohsoft/archive/tree/master/ocam',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '.content .js-navigation-open',
    sort: true
  }, {
    selector: '.content .js-navigation-open',
    match: /_v([\d.]+)_sign.exe/
  }),
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '.content .js-navigation-open',
    sort: true
  }, {
    selector: '.content .js-navigation-open',
    matchCheck: /_v([\d.]+)_sign.exe/
  }, {
    selector: '#raw-url'
  }),
  install: 'install_inno'
}
module.exports = data
