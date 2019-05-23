'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Internet/Telephony-SMS-GSM/WP7-MarketPlace-Enabler.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
