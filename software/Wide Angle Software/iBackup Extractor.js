'use strict'

let data = {
  commercial: 3,
  site: {
    Softpedia: 'https://www.softpedia.com/get/Mobile-Phone-Tools/IPhone/iBackup-Extractor.shtml'
  },
  preferPath: 'iBackupExtractor.exe',
  install: function (output, iPath, fns) {
    return fns.install.ai.msi(output, iPath, null, 'iBackupExtractorx86.msi', data.preferPath)
  }
}
module.exports = data
