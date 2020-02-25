'use strict'

let data = {
  url: 'http://avanti.arrozcru.org/',
  version: ['[href^="downloads/avanti-"][href$=".7z"]', 'href', /avanti-([\d]+)\.7z$/],
  changelog: {
    url: 'http://avanti.arrozcru.org/changelog.htm',
    selector: '.txt0',
    attr: 'text',
    match: /AVANTI [\d.]+/,
    split: true
  },
  download: '[href^="downloads/avanti-"][href$=".7z"]',
  install: ['install', null, 'Avanti-ffmpeg-GUI-*\\*']
}
module.exports = data
