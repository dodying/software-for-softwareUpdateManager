'use strict'

let data = {
  commercial: 3,
  url: 'https://www.cfos.de/en/download/download.htm',
  version: '#cfosbc_release_x86_version',
  changelog: {
    url: 'https://www.cfos.de/en/broadband-connect/whats-new.txt',
    match: /^cFos BC [\d.]+/,
    split: true
  },
  download: '.cfosbc_release_x64_link'
}
module.exports = data
