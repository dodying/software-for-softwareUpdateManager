'use strict'

let data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Internet/E-mail/Mail-Utilities/InstaMailer.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
