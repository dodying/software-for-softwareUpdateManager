'use strict'

let data = {
  url: 'https://www.python.org/downloads/windows/',
  version: {
    selector: 'a[href^="/downloads/release/python-3"]'
  },
  download: {
    plain: 'https://www.python.org/ftp/python/{version}/python-{version}-amd64.exe'
  },
  install: function (output, iPath) {
    let excludes = [/^py\.exe$/i, /\.msi$/i]
    let installMsi = ['core.msi', 'dev.msi', 'doc.msi', 'exe.msi', 'lib.msi', 'tcltk.msi', 'test.msi', 'tools.msi']

    const path = require('path')
    const fse = require('fs-extra')
    const cp = require('child_process')

    let install = () => {
      let { dir: parentPath, name } = path.parse(iPath)
      while (parentPath.toLowerCase().split(/[/\\]+/).includes('bin')) {
        parentPath = path.parse(parentPath).dir
      }

      cp.execSync(`plugins\\dark.exe "${output}" -x ".\\unzip\\${name}"`)

      let fromNew = `unzip\\${name}\\AttachedContainer`
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
          require('./../js/copy')(folderNew, `${path.parse(__dirname).dir}\\${fromNew}`, excludes)
          fse.removeSync(folderNew)
        }
      }
      require('./../js/copy')(fromNew, parentPath, excludes)
      return true
    }

    let killed = require('./../js/kill')(output, iPath)
    if (!killed) return false

    try {
      let installed = install()
      return installed
    } catch (error) {
      console.error(error)
      return false
    }
  },
  afterInstall: async function (output, iPath) {
    const path = require('path')
    const fse = require('fs-extra')
    const cp = require('child_process')

    let { dir: parentPath } = path.parse(iPath)

    let bundledPath = path.resolve(parentPath, 'Lib\\ensurepip\\_bundled')
    let whls = fse.readdirSync(bundledPath)
    let pip = whls.filter(i => i.match(/^pip-/))[0]
    pip = path.resolve(bundledPath, pip)
    let pipNew = path.resolve(parentPath, 'pip.whl')
    fse.copySync(pip, pipNew)
    whls.forEach(whl => {
      cp.execSync(`cd /d ${parentPath} & ${path.resolve(parentPath, 'python.exe')} pip.whl/pip install --no-index ${path.resolve(bundledPath, whl)}`)
    })
    fse.unlinkSync(pipNew)
  }
}
module.exports = data
