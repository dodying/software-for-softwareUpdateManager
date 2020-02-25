'use strict'

let data = {
  url: 'https://mirrors.ustc.edu.cn/kde/stable/kate/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a',
    sort: true,
    match: /KF(\d+[\d.]+\d+)-64bit.exe/
  }),
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a',
    sort: true,
    matchCheck: /KF(\d+[\d.]+\d+)-64bit.exe/
  }),
  install: 'install_nsis'
}
module.exports = data
