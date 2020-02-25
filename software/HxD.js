'use strict'

let data = {
  url: 'https://mh-nexus.de/en/hxd/changelog.php',
  version: '[id^="v_"]',
  changelog: ['https://mh-nexus.de/en/hxd/changelog.php', '[id^="v_"]+td'],
  download: 'https://mh-nexus.de/downloads/HxDSetup.zip',
  install: ['install_zipped', 'install_inno_type', null, /HxD,\d+.exe/, '7']
}
module.exports = data
