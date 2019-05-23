'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/File-managers/Duplicate-Sweeper.shtml'
  },
  preferPath: 'Duplicate Sweeper.exe',
  install: function (output, iPath, fns) {
    return fns.install.ai.msi(output, iPath, null, 'DuplicateSweeper.msi', data.preferPath)
  }
}
module.exports = data
