'use strict'

let data = {
  url: 'http://help.jianguoyun.com/?p=1415',
  version: ['[dir="ltr"]>strong', 'text', /（WPF ([\d.]+)）/],
  changelog: {
    selector: '.entry-content',
    attr: 'text',
    split: true
  },
  download: 'https://www.jianguoyun.com/static/exe/installer/NutstoreWindowsInstaller.exe',
  fixedPath: '%ProgramFiles%\\Nutstore\\Nutstore.exe',
  install: 'install_ai_cli'
}
module.exports = data
