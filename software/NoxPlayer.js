'use strict'

let data = {
  url: 'https://www.yeshen.com/',
  version: '.download-btn .sub-title',
  changelog: {
    url: 'https://www.yeshen.com/blog/version/',
    selector: '.entry-content',
    attr: 'text',
    match: /模拟器版本：V[\d.]+/,
    split: true
  },
  download: 'https://www.yeshen.com/cn/download/fullPackage',
  install: 'install'
}
module.exports = data
