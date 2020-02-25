'use strict'

let data = {
  url: 'https://en.smath.com/view/SMathStudio/history',
  version: '.stable>h3>b',
  changelog: {
    selector: '.reviews',
    attr: 'text',
    match: /^Version: [\d.]+/,
    split: true
  },
  download: '.stable [href$=".msi"]',
  install: ['install_zipped', 'install'],
  other: {
    beta: {
      version: '.beta>h3>b',
      download: '.beta [href$=".msi"]'
    }
  }
}
module.exports = data
