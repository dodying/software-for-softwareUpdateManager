'use strict'

let data = {
  commercial: 2,
  site: {
    download: 'https://www.cherryplayer.com/'
  },
  versionChoice: ['http://cherryplayer.com/download.php', /CherryPlayer-(.*?)-setup.exe/],
  changelog: {
    url: '[href*="cherryplayer.com/cherryplayer"]',
    selector: '.post-content'
  },
  install: 'install_inno'
}
module.exports = data
