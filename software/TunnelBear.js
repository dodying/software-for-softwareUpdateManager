'use strict'

let data = {
  useProxy: true,
  commercial: 2,
  url: 'https://www.tunnelbear.com/core/getVersionHistory?platform=pc',
  version: (res, $) => res.json[0].version.match(/(\d+[\d.]+\d+)/)[1],
  changelog: async (res, $) => [res.json[0].notes, true],
  download: 'https://tunnelbear.s3.amazonaws.com/downloads/pc/public/TunnelBear-Installer.exe',
  install: ['install_wix', null, 'TunnelBear.Setup.msi', 'TunnelBear.exe']
}
module.exports = data
