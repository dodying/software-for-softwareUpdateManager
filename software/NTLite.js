'use strict'

let data = {
  withoutHeader: true,
  useProxy: true,
  commercial: 2,
  url: 'https://www.ntlite.com/download/',
  version: '.hb-main-content >div:nth-child(2)>.vc_column_container h4',
  changelog: ['https://www.ntlite.com/changelog/', '.hb-main-content>div:nth-child(2) .hb-box-cont-body'],
  download: 'http://downloads.ntlite.com/files/NTLite_setup_x64.exe',
  install: 'install_inno',
  other: {
    beta: {
      version: '.hb-main-content >div:nth-child(2)>.vc_column_container:nth-child(2) h4',
      changelog: {
        url: '.hb-main-content >div:nth-child(2)>.vc_column_container:nth-child(2) h4>[title="Changelog"]',
        selector: '.hb-main-content>div:nth-child(2) .hb-box-cont-body'
      },
      download: 'http://downloads.ntlite.com/files/NTLite_setup_x64_beta.exe'
    }
  }
}
module.exports = data
