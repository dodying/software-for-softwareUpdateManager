'use strict'

let data = {
  url: 'https://lynx.invisible-island.net/release/breakout/CHANGES',
  version: ['body', 'text', /\d+-\d+-\d+ \((.*?)\)/],
  changelog: {
    match: /^\d+-\d+-\d+/,
    split: true
  },
  download: 'https://invisible-island.net/datafiles/current/lynx-cs-setup.exe',
  install: 'install_inno'
}
module.exports = data
