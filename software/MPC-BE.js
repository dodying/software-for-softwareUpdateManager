'use strict'

let data = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/mpcbe/files/MPC-BE/Release%20builds/'
  },
  downloadChoice: [null, '.x64.7z'],
  install: 'install',
  other: {
    nightly: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/mpcbe/files/MPC-BE/Nightly%20Builds%20%28from%20svn%20trunk%29/'
      },
      versionChoice: /(.*)/
    }
  }
}
module.exports = data
