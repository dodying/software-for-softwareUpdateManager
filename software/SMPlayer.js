'use strict'

let data = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/smplayer/files/SMPlayer/'
  },
  downloadChoice: [null, '.7z'],
  install: 'install',
  other: {
    beta: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/smplayer/files/SMPlayer/Development-builds/'
      },
      versionChoice: /smplayer-(.*)-x64.exe/,
      downloadChoice: /smplayer-(.*)-x64.exe/,
      install: 'install_nsis'
    }
  }
}
module.exports = data
