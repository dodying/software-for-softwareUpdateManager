'use strict'

let data = {
  useProxy: true,
  commercial: 2,
  preferPath: 'TunnelBear.exe',
  url: 'https://www.tunnelbear.com/core/getVersionHistory?platform=pc',
  version: {
    func: async (res, $) => res.json[0].version.match(/(\d+[\d.]+\d+)/)[1]
  },
  download: {
    plain: 'https://tunnelbear.s3.amazonaws.com/downloads/pc/public/TunnelBear-Installer.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.wix(output, iPath, null, 'TunnelBear.Setup.msi', data.preferPath)
  }
}
module.exports = data
