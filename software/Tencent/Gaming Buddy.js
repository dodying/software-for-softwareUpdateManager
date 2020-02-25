'use strict'

let data = {
  url: 'https://syzs.qq.com/downloads/xml/compoment.xml',
  version: ['[localaddpath="AppMarket"]', 'version'],
  download: ['[localaddpath="AppMarket"]', 'url', /^(.*)$/, '.exe'],
  install: 'install',
  afterInstall: async info => {
    try {
      let res = await info.fns.req(data.url)
      let $ = info.fns.cheerio.load(res.body)
      let elem = $(data.version.selector)

      let cp = require('child_process')
      if (elem.attr('writePathToRegKey')) {
        cp.execSync(`REG ADD HKCU\\${elem.attr('writePathToRegKey')} /v "InstallPath" /t REG_SZ /d "${data.parentPath}" /f`).toString().replace(/\s+$/, '')
        cp.execSync(`REG ADD HKCU\\${elem.attr('writePathToRegKey')} /v "Version" /t REG_SZ /d "${elem.attr('version')}" /f`).toString().replace(/\s+$/, '')
      } else if (data.version.selector.match(/TBOX/)) {
        cp.execSync(`REG ADD HKCU\\Software\\AndroidTBox /v "InstallPath" /t REG_SZ /d "${data.parentPath}" /f`).toString().replace(/\s+$/, '')
        cp.execSync(`REG ADD HKCU\\Software\\AndroidTBox /v "Version" /t REG_SZ /d "${elem.attr('version')}" /f`).toString().replace(/\s+$/, '')
      }
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  },
  other: {
    UI: { // Need
      version: ['[localaddpath="UI"]', 'version'],
      download: ['[localaddpath="UI"]', 'url', /^(.*)$/, '.exe']
    },
    VDI: {
      version: ['[localaddpath="VDI"]', 'version'],
      download: ['[localaddpath="VDI"]', 'url', /^(.*)$/, '.exe']
    },
    VDI_100: {
      version: ['[localaddpath="VDI_100"]', 'version'],
      download: ['[localaddpath="VDI_100"]', 'url', /^(.*)$/, '.exe']
    },
    AOW_Rootfs: { // Need
      version: ['[localaddpath="AOW_Rootfs"]', 'version'],
      download: ['[localaddpath="AOW_Rootfs"]', 'url', /^(.*)$/, '.exe']
    },
    VDI_U: {
      version: ['[localaddpath="VDI_U"]', 'version'],
      download: ['[localaddpath="VDI_U"]', 'url', /^(.*)$/, '.exe']
    },
    VDI_U_100: {
      version: ['[localaddpath="VDI_U_100"]', 'version'],
      download: ['[localaddpath="VDI_U_100"]', 'url', /^(.*)$/, '.exe']
    },
    TBOX_32: {
      version: ['[localaddpath="TBOX_32"]', 'version'],
      download: ['[localaddpath="TBOX_32"]', 'url', /^(.*)$/, '.exe']
    },
    TBOX_64: {
      version: ['[localaddpath="TBOX_64"]', 'version'],
      download: ['[localaddpath="TBOX_64"]', 'url', /^(.*)$/, '.exe']
    }
  }
}
module.exports = data
