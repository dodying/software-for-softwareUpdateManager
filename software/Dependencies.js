'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/lucasg/Dependencies/releases/latest'
  },
  downloadChoice: '[href$="x64_Release.zip"]',
  install: 'install',
  other: {
    nopreview: {
      downloadChoice: '[href$="x64_Release_.without_peview.exe.zip"]'
    },
    'x86': {
      downloadChoice: '[href$="x86_Release.zip"]'
    },
    'x64': {
      downloadChoice: '[href$="x64_Release.zip"]'
    }
  }
}
module.exports = data
