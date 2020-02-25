'use strict'

let data = {
  commercial: 3,
  url: 'https://www.actualtools.com/filefolders/download/',
  version: '.fix1 > div:nth-child(3) > table:nth-child(6) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(5)',
  changelog: {
    url: 'https://www.actualtools.com/filefolders/whatsnew/',
    selector: 'h1~pre',
    attr: 'text',
    match: /^Actual File Folders [\d.]+/,
    split: true
  },
  download: 'https://www.actualtools.com/files/affsetup.exe',
  install: info => {
    info.choice = info.choice || (require('readline-sync').keyInYNStrict('是否支持系统工具 (像 Tablet PC 输入面板)和管理工具(像注册表编辑器, 电脑管理, 等等.)\n请注意, 尽管更加灵活, 此选项将增加您的系统启动时间') ? '2' : '1')
    return info.fns.install.inno.type(info)
  },
  other: {
    admin: { installChoice: '2' },
    noadmin: { installChoice: '1' }
  }
}
module.exports = data
