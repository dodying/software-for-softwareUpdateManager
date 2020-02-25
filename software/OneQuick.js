'use strict'

let data = {
  commercial: 2,
  url: 'https://github.com/OneQuick/OneQuick.github.io/tree/master/bin',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '.content .js-navigation-open',
    sort: true,
    match: /OneQuick.([\d.]+).x64.zip/
  }),
  changelog: ['https://raw.githubusercontent.com/OneQuick/OneQuick.github.io/master/update-information.xml', 'ChangeLog'],
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '.content .js-navigation-open',
    sort: true,
    matchCheck: /OneQuick.([\d.]+).x64.zip/
  }, {
    selector: '#raw-url'
  }),
  install: 'install_inno'
}
module.exports = data
