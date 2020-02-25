'use strict'

let data = {
  url: 'https://www.epicgames.com/store/zh-CN/',
  version: async (res, $, fns, choice) => {
    let uri1 = $('a[href*="EpicGamesLauncherInstaller.msi"]').eq(0).attr('href')
    let res1 = await fns.reqHEAD(uri1)
    return res1.request.uri.href.match(/EpicInstaller-(.*?).msi/)
  },
  download: 'a[href*="EpicGamesLauncherInstaller.msi"]',
  install: ['install_msi', null, 'Portal/Binaries/Win32/EpicGamesLauncher.exe']
}
module.exports = data
