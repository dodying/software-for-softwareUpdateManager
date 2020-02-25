'use strict'

let data = {
  url: 'https://spacedesk.net/',
  version: '[href="/downloadidd64"]',
  download: 'https://spacedesk.net/downloadidd64',
  install: 'install_msi_cli',
  other: {
    win7: {
      version: ['[href="/downloadlegacy64"]', 'text', /version: ([\d.]+)/],
      download: 'https://spacedesk.net/downloadlegacy64'
    }
  }
}
module.exports = data
