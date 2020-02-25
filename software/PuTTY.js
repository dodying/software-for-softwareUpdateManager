'use strict'

let data = {
  url: 'https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html',
  version: 'h1',
  changelog: {
    url: 'https://www.chiark.greenend.org.uk/~sgtatham/putty/changes.html',
    selector: 'body',
    attr: 'text',
    match: /^These features/,
    split: true
  },
  download: 'a[href$="installer.msi"]',
  install: ['install_msi', null, 'putty.exe']
}
module.exports = data
