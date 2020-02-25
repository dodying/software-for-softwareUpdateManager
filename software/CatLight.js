'use strict'

let data = {
  commercial: 3,
  url: 'https://catlight.io/downloads',
  version: '.platform-info',
  changelog: async (res, $, fns, choice) => [(await fns.walkLink('https://support.catlight.io/s1-general/updates', fns, {
    selector: '.topic-list__title>a[href*="catlight"]'
  }, {
    selector: '.topic__item',
    attr: 'html'
  })), true],
  download: 'https://catlight.io/downloads/win/beta',
  install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
}
module.exports = data
