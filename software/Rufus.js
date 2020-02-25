'use strict'

let data = {
  url: 'https://rufus.ie/en_IE.html',
  version: 'a[name="changelog"]~ul b',
  changelog: '[name="changelog"]+h2+ul>li',
  download: 'a[name="download"]~ul a[href$="p.exe"]',
  install: 'install_single'
}
module.exports = data
