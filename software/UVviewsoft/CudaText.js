'use strict'

let data = {
  site: {
    FossHub: 'https://www.fosshub.com/CudaText.html'
  },
  downloadChoice: /cudatext-win-x64-(.*).zip/,
  install: 'install',
  other: {
    beta: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/cudatext/files/beta_version/'
      },
      versionChoice: /cudatext-win-x64-(.*).zip/
    }
  }
}
module.exports = data
