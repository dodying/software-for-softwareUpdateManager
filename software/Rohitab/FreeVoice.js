'use strict'

let data = {
  url: 'http://www.rohitab.com/freevoice',
  version: ['#Download~a[href$="zip"]', 'text', /FreeVoice (.*)$/],
  download: '#Download~a[href$="zip"]',
  install: 'install'
}
module.exports = data
