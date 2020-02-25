'use strict'

let data = {
  commercial: 2,
  url: 'https://arctime.org/download.html',
  version: '#u6872-2',
  changelog: {
    url: 'http://arctime.cn/changelog.html',
    selector: '#u608-309',
    attr: 'text',
    match: /^Arctime Pro [\d.]+/,
    split: true
  },
  download: 'https://t.arctime.cn/ap2w64',
  install: 'install',
  other: {
    free: {
      commercial: 0,
      version: '#u886-2',
      changelog: {
        url: 'https://arctime.org/changelog.html',
        selector: '#u6750-1427',
        attr: 'text',
        match: /^Arctime [\d.]+/,
        split: true
      },
      download: 'https://t.arctime.cn/a1w64'
    }
  }
}
module.exports = data
