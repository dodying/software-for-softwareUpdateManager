'use strict'

let data = {
  url: 'https://developers.viber.com/releases/',
  version: 'h3[id]',
  changelog: {
    selector: '.releases',
    attr: 'text',
    split: true
  },
  download: 'https://download.cdn.viber.com/desktop/windows/ViberSetup.exe',
  install: ['install_wix', null, 'ViberSetup.msi', 'Viber.exe']
}
module.exports = data
