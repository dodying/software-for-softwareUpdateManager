'use strict'

let data = {
  site: {
    BitBucket: 'https://api.bitbucket.org/2.0/repositories/hbons/sparkleshare/downloads'
  },
  versionChoice: /sparkleshare-windows-(.*?).msi/,
  install: ['install_msi', null, 'SparkleShare.exe']
}
module.exports = data
