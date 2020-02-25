'use strict'

let data = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/sss/files/SSS/'
  },
  versionChoice: /SSS V(.*?) for Windows/,
  downloadChoice: [null, '.exe'],
  install: 'install_inno'
}
module.exports = data
