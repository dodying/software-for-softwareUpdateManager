'use strict'

let data = {
  url: 'https://neosmart.net/Software/Changelog/28',
  version: 'a[name]',
  changelog: 'ul',
  download: async (res, $, fns) => fns.download.neosmart(res, $, fns),
  install: 'install_single'
}
module.exports = data
