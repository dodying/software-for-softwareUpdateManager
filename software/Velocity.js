'use strict'

let data = {
  commercial: 2,
  url: 'https://velocity.silverlakesoftware.com/',
  version: ['#downloadbutton', 'href', /VelocitySetup-([\d.]+).msi/],
  changelog: ['https://velocity.silverlakesoftware.com/releasenotes', '.page-header+h3+ul+h3+ul+h3+ul'],
  download: '#downloadbutton',
  install: ['install_msi', null, 'Velocity.exe']
}
module.exports = data
