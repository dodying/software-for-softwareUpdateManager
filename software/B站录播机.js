'use strict'

let data = {
  url: 'http://live.weibo333.com/',
  version: ['[href$=".zip"][href*="B站直播录制机64位"]', 'href', /64位-v(.*?).zip/],
  download: '[href$=".zip"][href*="B站直播录制机64位"]',
  install: ['install', null, 'live-recorder-win32-x64\\']
}
module.exports = data
