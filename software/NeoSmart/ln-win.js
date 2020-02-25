'use strict'

let data = {
  url: 'https://neosmart.net/Software/Changelog/16',
  version: 'a[name]',
  changelog: 'ul',
  download: async (res, $, fns) => fns.download.neosmart(res, $, fns),
  install: ['install_zipped_single', 'x64\\ln.exe']
}
module.exports = data
