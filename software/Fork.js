'use strict'

let data = {
  url: 'https://git-fork.com/releasenoteswin',
  version: '.header4',
  changelog: '.col-md-6>.row+hr+.row',
  download: 'https://git-fork.com/update/win/ForkInstaller.exe',
  install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*'],
  afterInstall: info => {
    const path = require('path')
    const fs = require('fs')
    const cp = require('child_process')

    let git = fs.readdirSync(info.parentPath).filter(i => i.match(/^PortableGit.*\.7z/))
    if (git.length) {
      let version = git[0].split('-')[1]
      let src = path.join(info.parentPath, git[0])
      let dist = path.join(process.env.LOCALAPPDATA, 'Fork\\gitInstance', version)
      cp.execSync(`plugins\\7z.exe x -sccUTF-8 -y -o"${dist}" "${src}"`)
      fs.unlinkSync(src)
    }
  }
}
module.exports = data
