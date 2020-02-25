'use strict'

const readlineSync = require('readline-sync')
const fs = require('fs')
const path = require('path')
const cp = require('child_process')

let shell, portable

let data = {
  url: 'https://www.bandisoft.com/honeyview/history/',
  version: '.content>font',
  changelog: '.content>ul',
  download: 'https://dl.bandisoft.com/honeyview/HONEYVIEW-SETUP.EXE',
  install: 'install_nsis',
  beforeInstall: info => {
    if (info.choice) {
      [shell, portable] = info.choice
    } else {
      shell = readlineSync.keyInYNStrict('Do you use context menu in Windows Explorer?')
      portable = shell ? false : readlineSync.keyInYNStrict('Make it portable?')
    }

    if (shell) cp.execSync(`regsvr32 /u /s "${info.parentPath}\\HVShell64.dll"`)
  },
  afterInstall: info => {
    if (shell) cp.execSync(`regsvr32 /s "${info.parentPath}\\HVShell64.dll"`)
    if (portable) {
      let configFile = path.resolve(info.parentPath, 'config.ini')
      let config = fs.readFileSync(configFile, 'utf-8')
      config = config.replace(/(is_portable\s+=\s+)0/, '$11')
      fs.writeFileSync(configFile, config)
    }
  },
  other: {
    shell: { installChoice: [true, false] },
    portable: { installChoice: [false, true] },
    noshell: { installChoice: [false, false] }
  }
}
module.exports = data
