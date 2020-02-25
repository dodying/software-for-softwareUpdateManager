'use strict'

let data = {
  url: 'https://www.wireshark.org/download.html',
  version: '[href="#group_accordion_stable"]',
  changelog: ['https://www.wireshark.org/docs/relnotes/wireshark-{version}.html', '#content>.sect1:nth-child(2)'],
  download: '#group_accordion_stable #win64+a',
  install: 'install_nsis',
  other: {
    development: {
      version: '[href="#group_accordion_development"]',
      download: '#group_accordion_development #win64+a'
    },
    oldstable: {
      version: '[href="#group_accordion_oldstable"]',
      download: '#group_accordion_oldstable #win64+a'
    }
  }
}
module.exports = data
