'use strict'

let data = {
  commercial: 2,
  url: 'https://freecommander.com/en/downloads/',
  version: ['#post-29 span', 'text', /FreeCommander XE (\d+) Build (\d+\w?) 32-bit public/, '$1.$2'],
  download: 'https://freecommander.com/downloads/FreeCommanderXE-32-public_portable.zip',
  install: 'install',
  other: {
    beta: {
      version: ['#post-29 table~p+p span', 'text', /FreeCommander XE (\d+) Build (\d+\w?) 32-bit public beta/, '$1.$2'],
      download: '#post-29 table~table [href$=".zip"][href*="portable"]'
    }
  }
}
module.exports = data
