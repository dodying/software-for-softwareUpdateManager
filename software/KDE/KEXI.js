'use strict'

let data = {
  url: 'https://mirrors.ustc.edu.cn/kde/stable/kexi/win64/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a',
    sort: true,
    match: /KEXI_(.*?)_Preview/
  }),
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a',
    sort: true
  }),
  install: 'install_nsis'
}
module.exports = data
