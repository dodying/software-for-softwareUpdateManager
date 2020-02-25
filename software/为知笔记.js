'use strict'

let data = {
  commercial: 3,
  url: 'https://www.wiz.cn/as/blogs/downloads-windows.html?lang=en&clientType=web&clientVersion=4.0',
  version: (res, $) => res.json.result.markdown.match(/最新版本：([\d.]+)/)[1],
  changelog: async (res, $) => {
    let changelog = res.json.result.markdown

    let lineArr = changelog.replace(/[\u0000\r]/g, '').trim().split(/\n/)
    let split = lineArr.filter(line => line.match(/^### [\d.]+/))
    let start = lineArr.indexOf(split[1])
    let end = lineArr.indexOf(split[2])
    end = end === -1 ? lineArr.length : end
    changelog = lineArr.slice(start, end).join('\n')
    return changelog
  },
  download: 'http://url.wiz.cn/u/windows',
  install: 'install_inno'
}
module.exports = data
