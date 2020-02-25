'use strict'

let data = {
  url: 'https://www.winitor.com/get.html',
  version: '[href="./get.html"]',
  changelog: {
    url: 'https://www.winitor.com/tools/pestudio/changes.log',
    match: /^Version [\d.]+/,
    split: true
  },
  download: 'a[href$=".zip"]',
  install: 'install'
}
module.exports = data
