'use strict'

let data = {
  url: 'http://www.wofficebox.com/js/common.js',
  version: (res, $) => res.body.match(/versionNumber="(.*?)"/)[1],
  download: (res, $) => res.body.match(/stanHref="(.*?)"/)[1],
  install: ['install_zipped', 'install_inno']
}
module.exports = data
