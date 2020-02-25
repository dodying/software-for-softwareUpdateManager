'use strict'

let data = {
  commercial: 3,
  url: 'https://turbo.net/js/enterprise.js',
  version: (res, $) => res.body.match(/window.location = "(.*?\.msi)"/)[1].match(/turbo-studio-(.*?).msi/)[1],
  download: (res, $) => res.body.match(/window.location = "(.*?\.msi)"/)[1],
  install: ['install_msi', null, 'Studio.exe']
}
module.exports = data
