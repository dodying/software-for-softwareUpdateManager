'use strict'

let data = {
  url: 'https://github.com/ohsoft/archive/tree/master/secretfolder',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '.content .js-navigation-open',
    sort: true
  }, {
    selector: '.content .js-navigation-open',
    match: /v([\d.]+)_sign.exe/
  }),
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '.content .js-navigation-open',
    sort: true
  }, {
    selector: '.content .js-navigation-open',
    matchCheck: /v([\d.]+)_sign.exe/
  }, {
    selector: '#raw-url'
  }),
  install: 'install_inno'
}
module.exports = data
