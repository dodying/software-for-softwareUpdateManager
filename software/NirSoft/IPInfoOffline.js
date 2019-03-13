'use strict'

let data = {
  url: 'https://www.nirsoft.net/utils/ip_country_info_offline.html',
  version: {
    selector: '.utilcaption'
  },
  download: {
    plain: 'https://www.nirsoft.net/utils/ipinfooffline.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install_zipped_single')(output, iPath)
  }
}
module.exports = data
