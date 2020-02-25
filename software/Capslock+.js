'use strict'

let data = {
  url: 'https://cjkis.me/capslock+/',
  version: ['a[download]', 'href', /v(.*?).exe/],
  changelog: '.change-log ul>li',
  download: 'a[download]',
  install: 'install_single'
}
module.exports = data
