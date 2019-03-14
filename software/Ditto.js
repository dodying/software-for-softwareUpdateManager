'use strict'

let data = {
  withoutHeader: true,
  url: 'https://ditto-cp.sourceforge.io/',
  version: {
    func: async (res, $) => res.body.match(/var versionDots="([\d.]+)"/)[1]
  },
  download: {
    func: async (res, $) => {
      let versionDots = res.body.match(/var versionDots="([\d.]+)"/)[1]
      let versionUnder = res.body.match(/var versionUnder="([\d_]+)"/)[1]
      return 'https://sourceforge.net/projects/ditto-cp/files/Ditto/' + versionDots + '/DittoPortable_64bit_' + versionUnder + '.zip/download'
    }
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
