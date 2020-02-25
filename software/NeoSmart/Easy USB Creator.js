'use strict'

let data = {
  commercial: 1,
  url: 'https://neosmart.net/Software/Changelog/21',
  version: 'a[name]',
  changelog: 'ul',
  download: async (res, $, fns) => fns.download.neosmart(res, $, fns),
  install: 'install_single'
}
module.exports = data
