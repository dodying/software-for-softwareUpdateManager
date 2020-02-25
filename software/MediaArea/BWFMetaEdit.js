'use strict'

let data = {
  url: 'https://mediaarea.net/BWFMetaEdit/Download/Windows',
  version: ['a[href$="Windows_x64_WithoutInstaller.zip"]', 'href'],
  changelog: {
    url: 'https://raw.githubusercontent.com/MediaArea/BWFMetaEdit/master/History_GUI.txt',
    match: /^Version [\d.]+/,
    split: true
  },
  download: 'a[href$="Windows_x64_WithoutInstaller.zip"]',
  install: 'install_zipped_single',
  other: {
    cli: {
      version: 'a[href$="Windows_x64.zip"]',
      download: 'a[href$="Windows_x64.zip"]',
      install: 'install_zipped_single'
    }
  }
}
module.exports = data
