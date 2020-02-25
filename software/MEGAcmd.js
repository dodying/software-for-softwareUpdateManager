'use strict'

let data = {
  url: 'https://raw.githubusercontent.com/meganz/MEGAcmd/master/build/megacmd/megacmd.changes',
  version: ['body', 'text', /- Update to version (\d+[\d.]+\d+):/],
  changelog: {
    match: /linux@mega.co.nz/,
    split: true
  },
  download: 'https://mega.nz/MEGAcmdSetup.exe',
  install: 'install_nsis'
}
module.exports = data
