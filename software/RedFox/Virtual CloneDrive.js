'use strict'

let data = {
  url: 'https://www.redfox.bz/en/download.html',
  version: '[href="/download/changes_vcd.txt"]',
  changelog: {
    url: 'https://www.redfox.bz/download/changes_vcd.txt',
    match: /^Virtual CloneDrive [\d.]+/,
    split: true
  },
  download: 'https://www.redfox.bz/download/SetupVirtualCloneDrive.exe',
  install: 'install_nsis_cli'
}
module.exports = data
