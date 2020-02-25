'use strict'

let data = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/tagstoo/files/'
  },
  versionChoice: /Tagstoo (.*?) win64/,
  downloadChoice: [/Tagstoo (.*?) win64/, '.exe'],
  install: ['install_zipped', 'install', 'app-64.7z']
}
module.exports = data
