'use strict'

let data = {
  url: 'https://www.ne.jp/asahi/mighty/knight/download.html',
  version: ['a[href*="pix64"]', 'href', /pix64_(.*?)e.exe/],
  changelog: {
    url: 'https://www.ne.jp/asahi/mighty/knight/history.html',
    selector: '.half>.padding',
    attr: 'text',
    match: /ver. [\d.]+/,
    split: true
  },
  download: 'a[href*="pix64"]',
  installType: 'InstallShield'
}
module.exports = data
