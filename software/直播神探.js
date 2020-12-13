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
  download: '[href*="/download/"][href$=".zip"]'
}
module.exports = data
