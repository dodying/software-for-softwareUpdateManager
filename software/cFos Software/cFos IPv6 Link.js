'use strict'

let data = {
  commercial: 3,
  url: 'https://www.cfos.de/en/download/download.htm',
  version: '#cfos6link_release_x86_version',
  changelog: {
    url: 'https://www.cfos.de/en/cfos-ipv6-link/whats-new.txt',
    match: /^cfos6link [\d.]+/,
    split: true
  },
  download: '.cfos6link_release_x64_link'
}
module.exports = data
