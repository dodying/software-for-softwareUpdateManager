'use strict'

let data = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/maxlauncher/files/MaxLauncher/'
  },
  downloadChoice: [null, /maxlauncher_(.*)_portable.zip/],
  install: 'install',
  other: {
    beta: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/maxlauncher/files/MaxLauncher/Beta/'
      }
    }
  }
}
module.exports = data
