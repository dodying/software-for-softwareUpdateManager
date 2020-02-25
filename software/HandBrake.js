'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/HandBrake/HandBrake/releases/latest'
  },
  downloadChoice: '[href$="x86_64-Win_GUI.exe"]',
  install: 'install_nsis',
  other: {
    cli: {
      downloadChoice: '[href$="win-x86_64.zip"][href*="HandBrakeCLI"]',
      install: 'install'
    }
  }
}
module.exports = data
