'use strict'

let data = {
  commercial: 3,
  url: 'https://www.cfos.de/en/download/download.htm',
  version: '#cfosspeed_release_x86_version',
  changelog: {
    url: 'https://www.cfos.de/en/cfosspeed/whats-new.txt',
    match: /^cFosSpeed [\d.]+/,
    split: true
  },
  download: '#cfosspeed_release_x86_link'
}
module.exports = data
