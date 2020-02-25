'use strict'

const readlineSync = require('readline-sync')
const fs = require('fs')
const cp = require('child_process')
const path = require('path')

let shell, portable, regDll

let data = {
  url: 'https://www.bandisoft.com/bandizip/history/',
  version: '.content>font',
  changelog: '.content>ul',
  download: 'https://dl.bandisoft.com/bandizip/BANDIZIP-SETUP.EXE',
  install: 'install',
  beforeInstall: info => {
    if (info.choice) {
      [shell] = info.choice
    } else {
      shell = readlineSync.keyInYNStrict('Do you use context menu in Windows Explorer?')
      portable = shell ? false : readlineSync.keyInYNStrict('Make it portable?')
    }
    regDll = `${info.parentPath}\\data\\RegDll64.exe`

    if (fs.existsSync(regDll) && shell) cp.execSync(`${regDll} /calldll "${info.parentPath}\\bdzshl64.dll" UnregSvr`)

    try {
      if (fs.existsSync(`${info.parentPath}\\bdzshl64.dll`)) fs.renameSync(`${info.parentPath}\\bdzshl64.dll`, `${info.parentPath}\\bdzshl64.dll.bak`)
    } catch (error) {
      console.error('Error:\tPlease install Bandizip after Restart')
      return false
    }
  },
  afterInstall: info => {
    if (shell) cp.execSync(`${regDll} /calldll "${info.parentPath}\\bdzshl64.dll" RegSvr`)
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
