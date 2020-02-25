'use strict'

let data = {
  url: 'https://mediaarea.net/MediaConch/Download/Windows',
  version: ['a[href$="Windows_x64_WithoutInstaller.7z"]', 'href'],
  changelog: {
    url: 'https://raw.githubusercontent.com/MediaArea/MediaConch_SourceCode/master/History_GUI.txt',
    match: /^Version [\d.]+/,
    split: true
  },
  download: 'a[href$="Windows_x64_WithoutInstaller.7z"]',
  install: 'install',
  other: {
    cli: {
      version: 'a[href$="Windows_x64.zip"]',
      download: 'a[href$="Windows_x64.zip"]',
      install: 'install',
    }
  }
}
module.exports = data
