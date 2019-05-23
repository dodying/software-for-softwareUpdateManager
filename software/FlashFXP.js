'use strict'

let data = {
  commercial: 3,
  url: 'https://www.flashfxp.com/download',
  version: {
    selector: '#version'
  },
  download: {
    selector: '[title="Download FlashFXP"]'
  },
  fixedPath: '%ProgramFiles(x86)%\\FlashFXP 5\\FlashFXP.exe',
  install: function (output, iPath, fns) {
    return fns.install.cli(output, iPath, output, ['/s'], { wait: true })
  }
}
module.exports = data
