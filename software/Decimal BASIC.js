'use strict'

let data = {
  url: 'https://decimalbasic.ninja-web.net/EnglishWindows.htm',
  version: ['h4+p', 'text', /Ver\.\s+(\d+[\d.]+\d+)\s+/],
  changelog: {
    selector: 'dl',
    attr: 'text',
    match: /^Ver. [\d.]+/,
    split: true
  },
  download: 'h4+p>a',
  install: 'install'
}
module.exports = data
