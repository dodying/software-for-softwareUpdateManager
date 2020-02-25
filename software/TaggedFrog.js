'use strict'

let data = {
  url: 'http://lunarfrog.com/projects/taggedfrog/download',
  version: 'h2',
  changelog: '.gap:contains("What\'s new")+ul',
  download: '.link-list>a[href$=".zip"]',
  install: 'install'
}
module.exports = data
