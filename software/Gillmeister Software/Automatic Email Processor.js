'use strict'

let data = {
  url: 'https://gillmeister-software.com/products/automatic-email-processor/download.aspx',
  version: {
    selector: '.version'
  },
  download: {
    plain: 'https://gillmeister-software.com/downloads/aep-setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno.type(output, iPath, null, null, { '{code_GetBitnessDefaultInstallDir}': '{dir}' })
  }
}
module.exports = data
