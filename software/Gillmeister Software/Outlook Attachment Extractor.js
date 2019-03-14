'use strict'

let data = {
  url: 'https://www.outlook-attachment-extractor.com/download.aspx',
  version: {
    selector: 'h2'
  },
  download: {
    plain: 'https://www.outlook-attachment-extractor.com/downloads/oae-setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath, null, null, { '{code_GetBitnessDefaultInstallDir}': require('path').parse(iPath).dir })
  }
}
module.exports = data
