'use strict'

let data = {
  url: 'https://github.com/EvilCult/moviecatcher/releases',
  version: {
    selector: '.muted-link.css-truncate',
    match: /Beta(.*)\(/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="Windows.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath, 'Movie Catcher.exe')
  }
}
module.exports = data
