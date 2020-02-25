'use strict'

let data = {
  url: 'http://repo.msys2.org/distrib/x86_64/',
  version: (res, $) => $('a[href$=".tar.xz"]').map((i, j) => $(j).text()).toArray().sort().reverse()[0].match(/msys2-base-x86_64-(\d+).tar.xz/)[1],
  download: (res, $) => 'https://mirrors.ustc.edu.cn/msys2/distrib/x86_64/' + $('a[href$=".tar.xz"]').map((i, j) => $(j).text()).toArray().sort().reverse()[0],
  install: ['install_zipped', 'install']
}
module.exports = data
