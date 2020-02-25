'use strict'

let data = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/goldendict/files/goldendict/1.0/'
  },
  versionChoice: /GoldenDict-([\d.-]+)-Install.exe/,
  install: 'install_nsis',
  other: {
    early: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/goldendict/files/early%20access%20builds/'
      },
      versionChoice: /GoldenDict-([\d.]+-RC[\d-]+)-.*Install.exe/
    }
  }
}
module.exports = data
