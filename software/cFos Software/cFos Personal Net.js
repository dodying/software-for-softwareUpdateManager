'use strict'

let data = {
  commercial: 3,
  url: 'https://www.cfos.de/en/download/download.htm',
  version: '#cfospnet_release_x86_version',
  changelog: {
    url: 'https://www.cfos.de/en/cfos-personal-net/whats-new.txt',
    match: /^cFos Personal Net [\d.]+/,
    split: true
  },
  download: '.cfospnet_release_x86_link'
}
module.exports = data
