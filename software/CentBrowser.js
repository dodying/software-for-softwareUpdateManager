'use strict'

let data = {
  url: 'https://www.centbrowser.cn/history.html',
  version: {
    selector: '.list>p',
    attr: 'id'
  },
  download: {
    selector: '.list a[href$="x64_portable.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  },
  other: {
    beta: {
      url: 'http://static.centbrowser.com/beta_64/',
      version: {
        func: async (res, $) => $('a[href$="portable.exe"]').eq(-1).text().match(/centbrowser_(.*?)_x64/)[1]
      },
      download: {
        func: async (res, $) => $('a[href$="portable.exe"]').eq(-1).attr('href')
      }
    }
  }
}
module.exports = data
