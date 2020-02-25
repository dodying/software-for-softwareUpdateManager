'use strict'

let data = {
  url: 'https://www.cfos.de/en/ping/ping.htm',
  version: '[href*="hrping"][href$=".zip"]',
  changelog: {
    url: 'https://www.cfos.de/en/ping/whats-new.txt',
    match: /^hrPing v[\d.]+/,
    split: true
  },
  download: (res, $) => 'https://www.cfos.de' + $('[href*="hrping"][href$=".zip"]').eq(0).attr('href').match(/\?file=(.*)$/)[1],
  install: 'install'
}
module.exports = data
