'use strict'

let data = {
  url: 'https://www.epicgames.com/store/zh-CN/',
  version: {
    func: async (res, $, fns, choice) => {
      let uri1 = $('a[href*="EpicGamesLauncherInstaller.msi"]').eq(0).attr('href')
      let res1 = await fns.reqHEAD(uri1)
      return res1.request.uri.href.match(/EpicInstaller-(.*?).msi/)
    }
  },
  download: {
    selector: 'a[href*="EpicGamesLauncherInstaller.msi"]'
  },
  preferPath: 'Portal/Binaries/Win32/EpicGamesLauncher.exe',
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
