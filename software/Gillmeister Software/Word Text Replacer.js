'use strict'

let data = {
  url: 'https://gillmeister-software.com/products/word-text-replacer/download.aspx',
  version: {
    selector: '.version'
  },
  download: {
    plain: 'https://gillmeister-software.com/downloads/wtr-setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath, null, null, { '{code_GetBitnessDefaultInstallDir}': require('path').parse(iPath).dir })
  }
}
module.exports = data
