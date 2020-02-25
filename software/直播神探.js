'use strict'

let data = {
  url: 'https://www.rtmpsniffer.com/download.html',
  version: '.content>h3',
  changelog: {
    selector: '.content',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: '[href$="%E5%85%8D%E5%AE%89%E8%A3%85.zip"]'
}
module.exports = data
