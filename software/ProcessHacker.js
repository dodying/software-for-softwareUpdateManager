'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/processhacker/processhacker/releases/latest'
  },
  install: ['install', null, '64bit'],
  other: {
    nightly: {
      site: {
        AppVeyor: 'https://ci.appveyor.com/api/projects/processhacker/processhacker'
      },
      downloadChoice: 'bin.zip'
    }
  }
}
module.exports = data
