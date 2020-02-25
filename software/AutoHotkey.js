'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/Lexikos/AutoHotkey_L/releases/latest'
  },
  download: 'https://www.autohotkey.com/download/ahk.zip',
  install: 'install',
  afterInstall: info => {
    let path = require('path')
    require('fs').copyFileSync(path.resolve(info.parentPath, 'AutoHotkeyU64.exe'), path.resolve(info.parentPath, 'AutoHotkey.exe'))
  }
}
module.exports = data
