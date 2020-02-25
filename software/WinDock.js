'use strict'

let data = {
  url: 'http://www.ivanyu.ca/windock/',
  version: (res, $) => $('a[href$=".exe"]').eq(0).attr('href').match(/WinDock_Setup_(.*?).exe/)[1].replace(/_/g, '.'),
  download: 'a[href$=".exe"]',
  install: 'install_inno'
}
module.exports = data
