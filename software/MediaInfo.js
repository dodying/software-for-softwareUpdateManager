'use strict'

let data = {
  url: 'https://mediaarea.net/en/MediaInfo/Download/Windows',
  version: {
    selector: 'a[href$="Windows_x64_WithoutInstaller.7z"]',
    attr: 'href'
  },
  download: {
    selector: 'a[href$="Windows_x64_WithoutInstaller.7z"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  },
  other: {
    cli: {
      version: {
        selector: 'a[href$="Windows_x64.zip"]'
      },
      download: {
        selector: 'a[href$="Windows_x64.zip"]'
      },
      install: function (output, iPath, fns) {
        return fns.install(output, iPath, 'Plugin')
      }
    }
  }
}
module.exports = data
