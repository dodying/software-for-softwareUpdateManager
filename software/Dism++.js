'use strict'

let data = {
  url: 'https://www.chuyu.me/zh-Hans/index.html',
  version: '.subh2',
  changelog: ['https://github.com/Chuyu-Team/Dism-Multi-language/blob/master/UpdateHistory.md', '.markdown-body>h2:contains("更新历史")+p+ul'],
  download: '.butt-holder a[href$=".zip"]',
  install: 'install'
}
module.exports = data
