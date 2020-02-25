'use strict'

let data = {
  commercial: 3,
  url: 'http://xi-soft.com/download.htm',
  version: ['[href="downloads/NXSetup_x64.zip"]', 'text', /Net Transport v(.*)/],
  changelog: 'p+ol',
  download: 'http://xi-soft.com/downloads/NXSetup_x64.zip',
  install: ['install_zipped', 'install_inno_type']
}
module.exports = data
