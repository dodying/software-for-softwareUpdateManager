'use strict'

let data = {
  url: 'https://www.itsk.com/thread-394989-1-1.html',
  version: '#thread_subject',
  changelog: {
    url: 'https://www.itsk.com/thread-373703-1-1.html',
    selector: '#postmessage_9875776',
    attr: 'text',
    match: /^\[[\d.]+\]/,
    split: true
  },
  download: '[href$=".iso"][href*="EasyDrv"][href*="Win10.x64"]'
}
module.exports = data
