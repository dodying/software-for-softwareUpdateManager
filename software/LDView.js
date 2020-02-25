'use strict'

let data = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/ldview/files/01.%20LDView/'
  },
  versionChoice: /LDView (.*)/,
  downloadChoice: [null, /LDView64-(.*).exe/],
  install: 'install_inno_type',
  other: {
    beta: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/ldview/files/03.%20Beta%20Releases/'
      }
    }
  }
}
module.exports = data
