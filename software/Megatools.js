'use strict'

let data = {
  url: 'https://megatools.megous.com/',
  version: 'a[href$="-win64.zip"]',
  changelog: {
    url: 'https://megatools.megous.com/builds/NEWS',
    match: /^megatools [\d.]+/,
    split: true
  },
  download: 'a[href$="-win64.zip"]',
  install: ['install', 'mega.ini']
}
module.exports = data
