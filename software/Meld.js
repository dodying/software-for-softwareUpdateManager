'use strict'

let data = {
  url: 'http://meldmerge.org/',
  preferPath: 'Meld.exe',
  version: {
    selector: 'a[href$=".msi"]'
  },
  download: {
    func: async (res, $) => 'https://mirrors.ustc.edu.cn/gnome' + new URL($('a[href$=".msi"]').eq(0).attr('href')).pathname
  },
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
