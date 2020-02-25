'use strict'

let data = {
  useProxy: true,
  url: 'https://www.libreoffice.org/download/download/',
  version: '.dl_version_number',
  changelog: {
    url: '.dl_release_notes_link_text>a',
    selector: '#toc'
  },
  download: async (res, $, fns, choice) => fns.walkLink('https://mirrors.tuna.tsinghua.edu.cn/libreoffice/libreoffice/stable/', fns, {
    selector: '.link>a',
    sort: true
  }, {
    selector: '.link>a',
    matchCheck: 'win'
  }, {
    selector: '.link>a',
    matchCheck: 'x86_64'
  }, {
    selector: '.link>a',
    matchCheck: /LibreOffice_(.*?)_Win_x64.msi/
  }),
  install: ['install_msi', null, 'program/swriter.exe']
}
module.exports = data
