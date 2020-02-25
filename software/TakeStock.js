'use strict'

let data = {
  url: 'https://ravib.com/takestock/2/relnotes.htm',
  version: ['[bgcolor="aliceblue"] b', 'text', /Version (.*?),/],
  changelog: '[bgcolor="#F9F9F9"]',
  download: 'http://ravib.com/takestock/2/TakeStock2Portable.zip',
  install: 'install'
}
module.exports = data
