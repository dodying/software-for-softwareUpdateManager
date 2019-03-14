'use strict'

let data = {
  useProxy: true,
  site: {
    Softpedia: 'https://www.softpedia.com/get/Internet/Servers/Proxy-Servers/Lantern.shtml'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
