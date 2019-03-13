'use strict'

let data = {
  url: 'https://www.outlook-attachment-extractor.com/download.aspx',
  version: {
    selector: 'h2'
  },
  download: {
    plain: 'https://www.outlook-attachment-extractor.com/downloads/oae-setup.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install_inno_with_type')(output, iPath, null, null, { '{code_GetBitnessDefaultInstallDir}': require('path').parse(iPath).dir })
  }
}
module.exports = data
