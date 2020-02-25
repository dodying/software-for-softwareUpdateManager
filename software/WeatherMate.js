'use strict'

let data = {
  url: 'https://ravib.com/wm/relnotes.htm',
  version: ['[color="#900000"]>b', 'text', /Version (.*?),/],
  changelog: 'body > center > table:nth-child(3) > tbody > tr > td > center > table > tbody > tr > td > p:nth-child(3) > table > tbody > tr:nth-child(2)',
  download: 'https://ravib.com/wm/bin/wm4.zip',
  install: 'install'
}
module.exports = data
