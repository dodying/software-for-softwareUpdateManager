'use strict'

let data = {
  commercial: 3,
  url: 'https://www.mythicsoft.com/agentransack/information/',
  version: ['.style1', 'text', /([\d.]+) \((\d+)\)/, '$1.$2'],
  changelog: '#version-history .detail',
  download: 'a[href*="agentransack"][href$=".exe"]',
  install: info => {
    const path = require('path')
    const cp = require('child_process')
    const fs = require('fs')

    let name = Math.random().toString().substr(2)
    cp.execSync(`plugins\\7z.exe x -sccUTF-8 -y -o"unzip\\${name}\\" "${info.output}"`)
    let tmp = path.resolve(info.fns.dirname, 'unzip', name)
    let list = info.fns.walk(tmp)

    let shared = list.filter(i => path.basename(i) === '$_3_')[0]
    fs.renameSync(shared, path.resolve(shared, './../', 'shared.cab'))

    let install = list.filter(i => path.basename(i) === '$_2_')[0]
    let installNew = path.resolve(install, './../install.msi')
    fs.renameSync(install, installNew)
    info.output = installNew
    return info.fns.install.msi(info, null, 'AgentRansack.exe')
  }
}
module.exports = data
