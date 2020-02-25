'use strict'

let data = {
  commercial: 3,
  url: 'https://www.cfos.de/en/download/download.htm',
  version: '#cfos_release_x86_version',
  changelog: {
    url: 'https://www.cfos.de/en/cfos-professional/whats-new.txt',
    match: /^cFos [\d.]+/,
    split: true
  },
  download: '.cfos_release_x64_link'
}
module.exports = data
