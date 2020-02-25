'use strict'

let data = {
  url: 'https://gillmeister-software.com/products/automatic-email-processor/changelog.aspx',
  version: '.headline-left-1>h3',
  changelog: '.headline-left-1+ul',
  download: 'https://gillmeister-software.com/downloads/aep-setup.exe',
  install: ['install_inno_type', null, null, { '{code_GetBitnessDefaultInstallDir}': '{dir}' }]
}
module.exports = data
