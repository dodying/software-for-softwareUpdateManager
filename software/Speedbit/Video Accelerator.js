'use strict'

let data = {
  commercial: 2,
  url: 'http://www.videoaccelerator.com/download/',
  version: '.dwl_details>span',
  download: '[href$=".exe"]',
  fixedPath: '%ProgramFiles(x86)%\\SpeedBit Video Accelerator\\VideoAccelerator.exe',
  install: 'install_cli_s',
  other: {
    beta: {
      url: 'http://www.videoaccelerator.com/beta/'
    }
  }
}
module.exports = data
