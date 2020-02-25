'use strict'

let data = {
  url: 'https://fliqlo.com',
  version: '.win>.cap strong',
  changelog: {
    url: 'https://fliqlo.com/version-history.html',
    selector: '#sec-windows>dl',
    attr: 'text',
    match: /^[\d.]+/,
    split: true
  },
  download: '.download.windows',
  install: 'install_zipped_single'
}
module.exports = data
