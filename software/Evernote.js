'use strict'

let data = {
  url: 'https://evernote.com/intl/zh-cn/download',
  preferPath: 'Evernote.exe',
  version: {
    selector: 'h1+p>a',
    attr: 'href'
  },
  download: {
    selector: 'h1+p>a'
  },
  install: async function (output, iPath, fns) {
    let fs = require('fs')
    let path = require('path')
    let cp = require('child_process')
    let msi = path.resolve(process.env.LOCALAPPDATA, 'Temp', 'Evernote.msi')
    if (fs.existsSync(msi)) fs.unlinkSync(msi)
    await new Promise((resolve, reject) => {
      let process = cp.spawn(output)
      let checker = () => {
        setTimeout(() => {
          if (fs.existsSync(msi)) {
            setTimeout(() => {
              process.kill()
              cp.execSync('wmic process Where "Caption Like \'msiexec.exe\'" Call Terminate')
              resolve()
            }, 10 * 1000)
          } else {
            checker()
          }
        }, 2000)
      }
      checker()
    })
    try {
      let tmp = path.resolve(__dirname, './../unzip/Evernote.msi')
      fs.copyFileSync(msi, tmp)
      fns.install.msi(tmp, iPath, null, data.preferPath)
      fs.unlinkSync(msi)
      return true
    } catch (error) {
      return false
    }
  }
}
module.exports = data
