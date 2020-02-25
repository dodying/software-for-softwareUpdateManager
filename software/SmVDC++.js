'use strict'

let data = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/smvdc/files/'
  },
  versionChoice: /SmVDC\+\+ ([\d.]+)/,
  downloadChoice: [/SmVDC\+\+ ([\d.]+)/, 'Setup.x64.exe'],
  install: 'install_nsis'
}
module.exports = data
