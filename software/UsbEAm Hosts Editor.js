'use strict'

let data = {
  url: 'https://www.dogfight360.com/Usbeam/Patch.php',
  version: '.entry-title',
  changelog: {
    selector: 'figure+blockquote',
    attr: 'text',
    match: /^V[\d.]+/,
    split: true
  },
  download: 'a[href$=".zip"]:contains("下载")',
  install: 'install'
}
module.exports = data
