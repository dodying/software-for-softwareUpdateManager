'use strict'

let data = {
  site: {
    download: 'https://www.emclient.com/download'
  },
  versionChoice: ['https://www.emclient.com/dist/latest/setup.msi', /dist\/v([\d.]+)\/setup.msi/],
  install: ['install_msi', null, 'MailClient.exe']
}
module.exports = data
