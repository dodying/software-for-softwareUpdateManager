'use strict'

let data = {
  commercial: 3,
  url: 'https://explorermax.drivethelife.com/release-history.html',
  version: '.history-ver',
  changelog: '.history-msg',
  download: async (res, $, fns, choice) => fns.walkLink('https://explorermax.drivethelife.com/thanks/download-explorermax-completed.html', fns, 'a[href$=".exe"]'),
  fixedPath: '%AppData%\\Roaming\\ExplorerMax\\ExplorerMax.exe',
  install: 'install_cli_s'
}
module.exports = data
