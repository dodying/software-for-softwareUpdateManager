'use strict'

let data = {
  url: 'https://www.centbrowser.cn/history.html',
  version: ['.list>p', 'id'],
  changelog: '.list>span',
  download: '.list a[href$="x64_portable.exe"]',
  install: 'install',
  other: {
    beta: {
      url: 'https://static.centbrowser.com/win_beta/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        match: /centbrowser_(.*?)_x64_portable.exe/,
        sort: true
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        matchCheck: /centbrowser_(.*?)_x64_portable.exe/,
        sort: true
      })
    }
  }
}
module.exports = data
