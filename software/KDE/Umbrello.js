'use strict'

let data = {
  url: 'https://mirrors.ustc.edu.cn/kde/stable/umbrello/latest/win64/',
  version: ['a[href$="bin.7z"]', 'text', /mingw64-(.*?)-bin.7z/],
  download: 'a[href$="bin.7z"]',
  install: 'install'
}
module.exports = data
