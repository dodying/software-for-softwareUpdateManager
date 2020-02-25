'use strict'

let data = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/emulemorph/files/MorphXT/'
  },
  versionChoice: /MorphXT ([\d.]+)/,
  downloadChoice: [/MorphXT ([\d.]+)/, 'installer.exe'],
  install: 'install_inno_type'
}
module.exports = data
