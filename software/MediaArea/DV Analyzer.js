'use strict'

let data = {
  url: 'https://mediaarea.net/DVAnalyzer/Download/Windows',
  version: ['a[href$="Windows_x64_WithoutInstaller.7z"]', 'href'],
  changelog: {
    url: 'https://raw.githubusercontent.com/MediaArea/DVAnalyzer/master/History_GUI.txt',
    match: /^Version [\d.]+/,
    split: true
  },
  download: 'a[href$="Windows_x64_WithoutInstaller.7z"]',
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
