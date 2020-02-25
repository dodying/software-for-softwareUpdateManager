'use strict'

let data = {
  url: 'https://docs.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite',
  version: ['#main > p:nth-child(4)', 'text', /Updated: (.*)/],
  download: 'https://download.sysinternals.com/files/SysinternalsSuite.zip',
  install: 'install'
}
module.exports = data
