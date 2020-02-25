'use strict'

let data = {
  url: 'https://www.itsk.com/thread-396278-1-1.html',
  version: '#thread_subject',
  changelog: {
    url: 'https://www.itsk.com/thread-395036-1-1.html',
    selector: '[id^="postmessage"]',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: '[href$=".7z"][href*="EasySysprep"]',
  install: ['install', null, null, '-p"itsk.com"']
}
module.exports = data
