'use strict'

let data = {
  commercial: 3,
  url: 'https://www.actualtools.com/virtualdesktops/',
  version: {
    selector: 'h1>b>span>a'
  },
  download: {
    plain: 'https://www.actualtools.com/files/avdsetup.exe'
  },
  install: function (output, iPath, fns, choice) {
    return fns.install.inno.type(output, iPath, null, choice || (require('readline-sync').keyInYNStrict('是否支持系统工具 (像 Tablet PC 输入面板)和管理工具(像注册表编辑器, 电脑管理, 等等.)\n请注意, 尽管更加灵活, 此选项将增加您的系统启动时间') ? '2' : '1'))
  },
  other: {
    admin: { installChoice: '2' },
    noadmin: { installChoice: '1' }
  }
}
module.exports = data
