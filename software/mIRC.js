'use strict'

let data = {
  url: 'https://www.mirc.com/get.html',
  version: 'td>strong',
  changelog: {
    url: 'https://www.mirc.com/news.html',
    selector: 'body > table:nth-child(2) > tbody > tr > td.middle > table',
    attr: 'text',
    match: /^mIRC [\d.]+/,
    split: true
  },
  download: 'https://www.mirc.com/get.php',
  install: 'install_nsis'
}
module.exports = data
