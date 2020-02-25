'use strict'

let data = {
  commercial: 3,
  url: 'https://www.rainlendar.net/cms/index.php?option=com_rny_download&all=1',
  version: ['[href$="64bit.exe"][href*="-Pro-"]', 'href', /Rainlendar-Pro-(.*?)-64bit.exe/],
  changelog: {
    url: 'http://www.rainlendar.net/download/Changes.txt',
    match: /^\[[\d.]+/,
    split: true
  },
  download: '[href$="64bit.exe"][href*="-Pro-"]',
  install: 'install_nsis',
  other: {
    lite: {
      commercial: 0,
      version: ['[href$="64bit.exe"][href*="-Lite-"]', 'href', /Rainlendar-Lite-(.*?)-64bit.exe/],
      download: '[href$="64bit.exe"][href*="-Lite-"]'
    }
  }
}
module.exports = data
