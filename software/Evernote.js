'use strict'

let data = {
  url: 'https://evernote.com/intl/zh-cn/download',
  preferPath: 'Evernote.exe',
  version: ['h1+p>a', 'href'],
  download: 'h1+p>a',
  install: async info => {
    let fs = require('fs')
    let path = require('path')
    let cp = require('child_process')
    let msi = path.resolve(process.env.LOCALAPPDATA, 'Temp', 'Evernote.msi')
    if (fs.existsSync(msi)) fs.unlinkSync(msi)
    await new Promise((resolve, reject) => {
      let process = cp.spawn(info.output)
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
      let tmp = path.resolve(info.fns.dirname, 'unzip/Evernote.msi')
      fs.copyFileSync(msi, tmp)
      info.output = tmp
      info.fns.install.msi(info, null, data.preferPath)
      fs.unlinkSync(msi)
      return true
    } catch (error) {
      return false
    }
  }
}
module.exports = data
