'use strict'

let data = {
  url: 'https://weerdbg.com/zh-cn/download.md',
  version: '[href$="windows.zip?r=1"]',
  changelog: {
    url: 'https://weerdbg.com/zh-cn/changelog.md',
    match: /^v[\d.]+/,
    split: true
  },
  download: '[href$="windows.zip?r=1"]',
  install: 'install_zipped_single'
}
module.exports = data
