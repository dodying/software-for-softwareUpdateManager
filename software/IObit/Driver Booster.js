'use strict'

let data = {
  site: {
    MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/iobit_driver_booster,1.html'
  },
  install: 'install_inno',
  afterInstall: info => {
    let path = require('path')
    let fse = require('fs-extra')

    let parentPath2 = path.parse(info.parentPath).dir

    fse.moveSync(path.join(info.parentPath, '{cm_AppVer}'), path.join(parentPath2, 'Driver Booster-Main'))
    fse.removeSync(info.parentPath)
    fse.moveSync(path.join(parentPath2, 'Driver Booster-Main'), info.parentPath)
  }
}
module.exports = data
