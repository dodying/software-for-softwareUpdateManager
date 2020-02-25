'use strict'

let url

let data = {
  url: 'https://mirrors.ustc.edu.cn/kde/stable/digikam/',
  version: async (res, $, fns, choice) => {
    url = await fns.walkLink(res, fns, {
      selector: 'a',
      sort: true
    }, {
      selector: 'a',
      matchCheck: /-Win64.exe$/
    })
    return url.match(/(\d+[\d.]+\d+)/)[1]
  },
  download: async (res, $, fns, choice) => url,
  install: 'install_nsis'
}
module.exports = data
