'use strict'

let data = {
  url: 'https://www.xmedia-recode.de/en/download.php',
  version: '.download_table tr>td:nth-child(2)',
  changelog: {
    url: 'https://www.xmedia-recode.de/en/version.php',
    selector: '#page_content',
    attr: 'text',
    match: /^XMedia Recode [\d.]+/,
    split: true
  },
  download: '[href$="x64.zip"]',
  install: 'install'
}
module.exports = data
