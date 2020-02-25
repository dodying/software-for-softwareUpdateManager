'use strict'

let data = {
  url: 'https://www.itsk.com/thread-396280-1-1.html',
  version: '#thread_subject',
  changelog: {
    selector: '[id^="postmessage"]',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: '[href$=".7z"][href*="EasyU"]',
  install: 'install'
}
module.exports = data
