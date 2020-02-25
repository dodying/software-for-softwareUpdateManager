'use strict'

let data = {
  url: 'https://pandownload.com/',
  version: ['meta[name="description"]', 'content'],
  changelog: '#更新日志+p+ol',
  download: '#下载地址+ul a:contains("本地下载")',
  install: 'install'
}
module.exports = data
