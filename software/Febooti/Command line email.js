'use strict'

let data = {
  commercial: 3,
  url: 'https://www.febooti.com/products/command-line-email/history/',
  version: '.m1>strong',
  changelog: '.m1',
  download: async (res, $, fns, choice) => fns.walkLink('https://www.febooti.com/downloads/x64/', fns, '[href$="x64.msi"][href*="/febootimail"]'),
  install: ['install_msi', null, 'febootimail.exe']
}
module.exports = data
