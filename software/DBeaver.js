'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/dbeaver/dbeaver/releases/latest'
  },
  download: 'https://dbeaver.io/files/dbeaver-ce-latest-win32.win32.x86_64.zip',
  install: 'install',
  other: {
    ee: { // Enterprise Edition
      url: 'https://dbeaver.com/release-notes/',
      version: ['a[name]', 'name'],
      changelog: '.bullet_list>ul',
      commercial: 2,
      download: 'https://dbeaver.com/files/dbeaver-ee-latest-win32.win32.x86_64.zip'
    }
  }
}
module.exports = data
