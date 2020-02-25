'use strict'

let data = {
  commercial: 3,
  url: 'https://www.osforensics.com/whatsnew.html',
  version: ['#sub-content>h4', 'text', /([\d.]+ build \d+)/],
  changelog: {
    selector: '#sub-content',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: 'https://downloads.passmark.com/osforensics/downloads/osf.exe',
  install: 'install_inno'
}
module.exports = data
