'use strict'

let data = {
  url: 'https://www.xiaohulu.com/zhibozhushou',
  version: ['[href$=".exe"]:contains("离线")', 'href', /web\/(.*?)\/Setup/],
  download: '[href$=".exe"]:contains("离线")'
}
module.exports = data
