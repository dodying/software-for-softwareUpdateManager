'use strict'

let data = {
  url: 'https://www.rejetto.com/hfs/?f=dl',
  version: ['#lastver>b', 'text', /(.*)/],
  changelog: ['https://www.rejetto.com/hfs/?f=wn', '#details1'],
  download: 'https://www.rejetto.com/hfs/hfs.exe',
  install: 'install_single'
}
module.exports = data
