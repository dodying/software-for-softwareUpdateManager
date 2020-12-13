'use strict'

let data = {
  url: 'https://theoven.org/index.php?topic=933.0',
  version: '[href*="action=dlattach"]:contains("Easy_DISM")',
  download: '[href*="action=dlattach"]:contains("Easy_DISM")',
  install: ['install_zipped', 'install_inno', 'EZ_Install_x64.exe']
}
module.exports = data
