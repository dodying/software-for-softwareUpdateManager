'use strict'

let data = {
  url: 'https://mediaarea.net/MediaInfo/Download/Windows',
  version: ['a[href$="Windows_x64_WithoutInstaller.7z"]', 'href'],
  changelog: ['https://mediaarea.net/rss/mediainfo_updates.xml', 'item>description'],
  download: 'a[href$="Windows_x64_WithoutInstaller.7z"]',
  install: 'install',
  other: {
    cli: {
      version: 'a[href$="Windows_x64.zip"]',
      download: 'a[href$="Windows_x64.zip"]',
      install: ['install', 'Plugin']
    }
  }
}
module.exports = data
