'use strict'

let data = {
  useProxy: true,
  url: 'https://www.torproject.org/download/',
  version: ['[href*="torbrowser-install-win64"][href$=".exe"]', 'href', /win64-(.*)_/],
  changelog: {
    url: 'https://gitweb.torproject.org/builders/tor-browser-build.git/plain/projects/tor-browser/Bundle-Data/Docs/ChangeLog.txt',
    match: /^Tor Browser [\d.]+/,
    split: true
  },
  download: '[href*="torbrowser-install-win64"][href$=".exe"]',
  install: 'install_nsis_cli',
  // install: ['install_nsis', null, 'Browser\\'],
  other: {
    alpha: {
      url: 'https://www.torproject.org/download/alpha/'
    }
  }
}
module.exports = data
