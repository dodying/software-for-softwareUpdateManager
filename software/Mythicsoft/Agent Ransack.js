'use strict'

let data = {
  url: 'https://www.mythicsoft.com/',
  version: {
    selector: 'a[href*="AgentRansack"][href$=".exe"]',
    attr: 'href'
  },
  download: {
    selector: 'a[href*="AgentRansack"][href$=".exe"]'
  },
  preferPath: 'AgentRansack.exe',
  install: function (output, iPath, fns, choice, cab, preferPath) {
    cab = cab || 'shared.cab'
    preferPath = preferPath || data.preferPath

    const path = require('path')
    const cp = require('child_process')
    const fs = require('fs')

    let name = Math.random().toString().substr(2)
    cp.execSync(`plugins\\7z.exe x -y -o"unzip\\${name}\\" "${output}"`)
    let tmp = path.resolve(fns.dirname, 'unzip', name)
    let list = fns.walk(tmp)

    let shared = list.filter(i => path.basename(i) === '$_3_')[0]
    fs.renameSync(shared, path.resolve(shared, './../', cab))

    let install = list.filter(i => path.basename(i) === '$_2_')[0]
    let installNew = path.resolve(install, './../install.msi')
    fs.renameSync(install, installNew)
    return fns.install.msi(installNew, iPath, null, preferPath)
  }
}
module.exports = data
