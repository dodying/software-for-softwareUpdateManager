'use strict'

let data = {
  url: 'https://dynvpn.com/download/',
  version: {
    selector: 'h3'
  },
  download: {
    selector: 'body > section.section-content > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > a'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  },
  other: {
    cli: {
      download: {
        selector: 'body > section.section-content > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > a'
      }
    }
  }
}
module.exports = data
