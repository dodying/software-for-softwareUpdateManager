'use strict'

let data = {
  url: 'http://repo.msys2.org/distrib/x86_64/',
  version: {
    func: async (res, $) => $('a[href$=".tar.xz"]').map((i, j) => $(j).text()).toArray().sort().reverse()[0].match(/msys2-base-x86_64-(\d+).tar.xz/)[1]
  },
  download: {
    func: async (res, $) => 'https://mirrors.shu.edu.cn/msys2/distrib/x86_64/' + $('a[href$=".tar.xz"]').map((i, j) => $(j).text()).toArray().sort().reverse()[0]
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install')
  }
}
module.exports = data
