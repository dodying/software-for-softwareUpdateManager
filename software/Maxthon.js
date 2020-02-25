'use strict'

let data = {
  url: 'http://www.maxthon.cn/mx5/changelog/',
  version: 'h2',
  changelog: {
    selector: 'body',
    attr: 'text',
    split: true
  },
  download: 'http://www.maxthon.cn/mx5/portable/dl',
  install: 'install'
}
module.exports = data
