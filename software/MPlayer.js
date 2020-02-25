'use strict'

let data = {
  withoutHeader: true,
  url: 'http://oss.netfarm.it/mplayer/',
  version: ['#content>ul>li', 'text', /MPlayer (r\d+)/],
  changelog: '.changelog',
  download: 'a[rel="external"][href*="x86_64"]',
  install: 'install'
}
module.exports = data
