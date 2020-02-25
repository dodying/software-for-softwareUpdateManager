'use strict'

let data = {
  url: 'https://www.mp3tag.de/en/download.html',
  version: ['h2', 'text', /v(\d+\.\w+)/],
  changelog: {
    url: 'https://www.mp3tag.de/en/changelog.html',
    selector: '.changes',
    attr: 'text',
    match: /REL: VERSION [\d.]+/,
    split: true
  },
  download: (res, $) => 'https://download.mp3tag.de/' + $('a[href="dodownload.html"]').text().trim(),
  install: 'install_nsis'
}
module.exports = data
