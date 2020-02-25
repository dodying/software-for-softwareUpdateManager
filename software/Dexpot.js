'use strict'

let data = {
  url: 'https://www.dexpot.de/?id=download&lang=en',
  version: ['.ueberschrift+li', 'text', /^([\d.]+) Build (\d+)$/, '$1.$2'],
  changelog: {
    url: 'https://www.dexpot.de/?id=changelog&lang=en',
    selector: '#inhalt',
    attr: 'text',
    match: /^Dexpot [\d.]+/,
    split: true
  },
  download: 'a[href$=".zip"]',
  install: 'install'
}
module.exports = data
