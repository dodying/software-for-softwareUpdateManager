'use strict'

let data = {
  url: 'https://enigmaprotector.com/en/downloads/changelogenigmavb.html',
  version: ['a[onclick="return openclose(\'content0\');"]', 'text', /(.*)/],
  changelog: '#content0',
  download: 'https://enigmaprotector.com/assets/files/enigmavb.exe',
  install: ['install_inno', 'languages']
}
module.exports = data
