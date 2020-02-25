'use strict'

let data = {
  commercial: 2,
  site: {
    download: 'https://www.airdroid.com/get.html'
  },
  versionChoice: ['https://srv3.airdroid.com/p20/web/getbinaryredirect?type=exe', /AirDroid_Desktop_Client_(.*?).exe/],
  install: 'install_nsis'
}
module.exports = data
