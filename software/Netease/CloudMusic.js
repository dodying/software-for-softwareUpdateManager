'use strict'

let data = {
  site: {
    download: 'https://music.163.com/download'
  },
  versionChoice: ['https://music.163.com/api/pc/download/latest', /cloudmusicsetup([\d.]+).exe/],
  install: 'install_nsis'
}
module.exports = data
