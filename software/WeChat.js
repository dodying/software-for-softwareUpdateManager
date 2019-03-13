'use strict'

let data = {
  url: 'https://pc.weixin.qq.com/?t=win_weixin',
  version: {
    selector: '.logo'
  },
  download: {
    plain: 'https://dldir1.qq.com/weixin/Windows/WeChatSetup.exe'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
