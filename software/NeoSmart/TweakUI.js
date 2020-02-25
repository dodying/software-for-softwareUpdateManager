'use strict'

let data = {
  url: 'https://neosmart.net/Software/Changelog/6',
  version: 'a[name]',
  changelog: 'ul',
  download: async (res, $, fns) => fns.download.neosmart(res, $, fns),
  install: ['install_msi_single', 'TweakUI64.exe']
}
module.exports = data
