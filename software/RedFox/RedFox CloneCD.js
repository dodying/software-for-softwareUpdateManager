'use strict'

let data = {
  commercial: 3,
  url: 'https://www.redfox.bz/en/download.html',
  version: '[href="/download/changes_clonecd.txt"]',
  changelog: {
    url: 'https://www.redfox.bz/download/changes_clonecd.txt',
    match: /^CloneCD [\d.]+/,
    split: true
  },
  download: 'https://www.redfox.bz/download/SetupCloneCD.exe',
  install: 'install_nsis_cli'
}
module.exports = data
