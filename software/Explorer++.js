'use strict'

let data = {
  url: 'https://explorerplusplus.com/download',
  version: 'strong',
  download: '[href$="x64.zip"]',
  install: 'install_zipped_single',
  other: {
    beta: {
      site: {
        AppVeyor: 'https://ci.appveyor.com/api/projects/derceg/explorerplusplus'
      },
      downloadChoice: ['x64.zip', 'x64']
    }
  }
}
module.exports = data
