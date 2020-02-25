'use strict'

let data = {
  url: 'https://www.python.org/downloads/windows/',
  version: 'a[href^="/downloads/release/python-3"]',
  changelog: {
    url: 'a[href^="/downloads/release/python-3"]',
    selector: '.main-content'
  },
  download: 'https://www.python.org/ftp/python/{version}/python-{version}-amd64.exe',
  install: info => {
    // ['install_cli', null, ['/quiet', '/passive', 'TargetDir={dir}', 'AssociateFiles=1', 'CompileAll=1', 'PrependPath=1']]
    let excludes = [/^py\.exe$/i, /\.msi$/i]
    let installMsi = ['core.msi', 'dev.msi', 'doc.msi', 'exe.msi', 'lib.msi', 'tcltk.msi', 'test.msi', 'tools.msi']

    const path = require('path')
    const fse = require('fs-extra')
    const cp = require('child_process')

    let install = () => {
      let tmp = path.resolve(info.fns.dirname, 'unzip', info.name)

      cp.execSync(`plugins\\dark.exe "${info.output}" -x "${tmp}"`)

      let fromNew = path.resolve(tmp, 'AttachedContainer')
      let list = fse.readdirSync(fromNew)
      while (list.length === 1) {
        fromNew = path.resolve(fromNew, list[0])
        if (!fse.statSync(fromNew).isDirectory()) {
          fromNew = path.parse(fromNew).dir
          break
        }
        list = fse.readdirSync(fromNew)
      }

      installMsi = list.filter(file => {
        return installMsi.some(i => typeof i === 'string' ? i === file : !!file.match(i))
      })

      for (let file of list) {
        let { name, ext } = path.parse(file)
        if (ext !== '.msi') continue
        let _path = path.resolve('./', fromNew, file)

        if (!installMsi.includes(file)) {
          // fse.removeSync(_path)
          continue
        }

        console.log(`Installing:\tExtract from ${file}`)
        let folderNew = path.resolve(path.parse(__dirname).dir, fromNew, name + '_msi')
        cp.execSync(`start /wait msiexec /a "${_path}" /passive /qr /norestart TARGETDIR="${folderNew}"`)
        fse.removeSync(_path)

        if (fse.existsSync(folderNew)) {
          info.fns.copy(folderNew, path.resolve(info.fns.dirname, fromNew), excludes)
          fse.removeSync(folderNew)
        }
      }
      info.fns.copy(fromNew, info.parentPath, excludes)
      return true
    }

    let killed = info.fns.kill(info.parentPath)
    if (!killed) return false

    try {
      let installed = install()
      return installed
    } catch (error) {
      console.error(error)
      return false
    }
  },
  afterInstall: info => {
    const path = require('path')
    const fse = require('fs-extra')
    const cp = require('child_process')

    let bundledPath = path.resolve(info.parentPath, 'Lib\\ensurepip\\_bundled')
    let whls = fse.readdirSync(bundledPath)
    let pip = whls.filter(i => i.match(/^pip-/))[0]
    pip = path.resolve(bundledPath, pip)
    let pipNew = path.resolve(info.parentPath, 'pip.whl')
    fse.copySync(pip, pipNew)
    whls.forEach(whl => {
      cp.execSync(`cd /d ${info.parentPath} & ${path.resolve(info.parentPath, 'python.exe')} pip.whl/pip install --no-index ${path.resolve(bundledPath, whl)}`)
    })
    fse.unlinkSync(pipNew)
  }
}
module.exports = data
