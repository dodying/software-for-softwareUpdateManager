'use strict'

let data = {
  url: 'https://lynx.invisible-island.net/release/breakout/CHANGES',
  version: {
    selector: 'body',
    match: /\d+-\d+-\d+ \((.*?)\)/
  },
  download: {
    plain: 'https://invisible-island.net/datafiles/current/lynx-cs-setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
