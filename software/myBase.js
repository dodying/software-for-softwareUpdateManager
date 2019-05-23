'use strict'

let data = {
  commercial: 3,
  url: 'http://www.wjjsoft.com/download.html',
  version: {
    selector: '.CLS_Item:contains("Windows")>td+td'
  },
  download: {
    func: async (res, $) => {
      return '/dl_' + $('.CLS_Item:contains("Windows") a').eq(0).attr('href').match(/javascript:dl\('(.*?)'\);/)[1]
    }
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install_inno')
  }
}
module.exports = data
