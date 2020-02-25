'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/IPOD-TOOLS/Other-IPOD-tools-Updates/iTunes.shtml'
  },
  download: 'https://www.apple.com/itunes/download/win64',
  install: ['install_zipped', 'install_msi', 'iTunes64.msi', null, 'iTunes.exe'],
  other: {
    'appstore': {
      url: 'https://www.apple.com.cn/cn/itunes/',
      version: () => '12.6.3.6',
      download: 'https://secure-appldnld.apple.com/itunes12/091-33626-20170922-F51D3530-A003-11E7-8324-03D19A97A551/iTunes64Setup.exe'
    }
  }
}
module.exports = data
