'use strict'

let data = {
  useProxy: true,
  site: {
    Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/ZenMate.shtml'
  },
  download: 'https://zenmate-windows-update.s3-eu-west-1.amazonaws.com/setup.exe',
  install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
}
module.exports = data
