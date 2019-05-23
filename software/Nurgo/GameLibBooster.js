'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/Gaming-Related/GameLibBooster.shtml'
  },
  preferPath: 'GameLibBooster.Gui.exe',
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
