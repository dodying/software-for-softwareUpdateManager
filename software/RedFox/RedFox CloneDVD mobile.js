'use strict'

let data = {
  commercial: 3,
  url: 'https://www.redfox.bz/en/download.html',
  version: '[href="/download/changes_clonedvdmobile.txt"]',
  changelog: {
    url: 'https://www.redfox.bz/download/changes_clonedvdmobile.txt',
    match: /^Version [\d.]+/,
    split: true
  },
  download: 'https://www.redfox.bz/download/SetupCloneDVDmobile.exe',
  install: 'install_nsis_cli'
}
module.exports = data
