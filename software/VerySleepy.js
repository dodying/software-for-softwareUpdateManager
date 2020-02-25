'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/VerySleepy/verysleepy/releases/latest'
  },
  downloadChoice: '[href$=".exe"]',
  install: 'install_inno_type',
  other: {
    beta: {
      site: {
        AppVeyor: 'https://ci.appveyor.com/api/projects/CyberShadow/verysleepy'
      },
      downloadChoice: '.exe'
    }
  }
}
module.exports = data
