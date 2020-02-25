'use strict'

let data = {
  commercial: 2,
  url: 'https://tianruoocr.cn/server/update/README.md',
  version: (res, $) => res.body.match(/版本：([\d.]+)/),
  changelog: {
    match: /^# 版本：[\d.]+/,
    split: true
  },
  other: {
    'free': {
      commercial: 0,
      site: {
        GitHub: 'https://github.com/miyouzi/tianruoocr_last/releases/latest'
      },
      downloadChoice: '[href$=".7z"]',
      install: 'install'
    }
  }
}
module.exports = data
