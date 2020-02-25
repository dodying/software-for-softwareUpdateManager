'use strict'

let data = {
  url: 'http://meldmerge.org/',
  version: 'a[href$=".msi"]',
  changelog: ['https://meldmerge.org/news.html', '.news'],
  download: (res, $) => 'https://mirrors.ustc.edu.cn/gnome' + new URL($('a[href$=".msi"]').eq(0).attr('href')).pathname,
  install: ['install_msi', null, 'Meld.exe']
}
module.exports = data
