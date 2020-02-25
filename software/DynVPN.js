'use strict'

let data = {
  useProxy: true,
  url: 'https://dynvpn.com/download/',
  version: 'h3',
  download: 'body > section.section-content > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > a',
  install: 'install_nsis',
  other: {
    cli: {
      download: 'body > section.section-content > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > a'
    }
  }
}
module.exports = data
