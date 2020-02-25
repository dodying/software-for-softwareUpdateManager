'use strict'

let data = {
  url: 'https://www.netsetman.com/en/txt/history',
  version: 'strong',
  changelog: {
    selector: 'body',
    attr: 'text',
    split: true
  },
  download: 'http://www.netsetman.com/netsetman.exe',
  install: ['install_inno_type', null, '1']
}
module.exports = data
