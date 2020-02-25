'use strict'

let data = {
  url: 'https://neosmart.net/Software/Changelog/10',
  version: 'a[name]',
  changelog: 'ul',
  download: async (res, $, fns) => fns.download.neosmart(res, $, fns),
  install: 'install_zipped_single'
}
module.exports = data
