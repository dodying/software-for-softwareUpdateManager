'use strict'

let data = {
  url: 'https://neosmart.net/Software/Changelog/22',
  version: 'a[name]',
  changelog: 'ul',
  download: async (res, $, fns) => fns.download.neosmart(res, $, fns),
  install: 'install'
}
module.exports = data
