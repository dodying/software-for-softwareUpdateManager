'use strict'

let data = {
  fixedPath: '%ProgramFiles%/PowerToys/PowerToys.exe',
  site: {
    GitHub: 'https://github.com/microsoft/PowerToys/releases/latest'
  },
  downloadChoice: '[href$=".msi"]',
  install: 'install_msi_cli'
}
module.exports = data
