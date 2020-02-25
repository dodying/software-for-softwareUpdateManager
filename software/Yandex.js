'use strict'

let data = {
  url: 'https://browser.yandex.com/',
  version: (res, $) => res.body.match(/"browserVersion":"([\d.]+)"/)[1],
  download: 'https://browser.yandex.com/download/?full=1',
  install: ['install_zipped', 'install', null, null, 'Browser-bin'],
  other: {
    beta: {
      url: 'https://browser.yandex.com/beta/',
      version: '.button2__text',
      download: 'https://browser.yandex.com/download/?full=1&betacusto=1'
    }
  }
}
module.exports = data
