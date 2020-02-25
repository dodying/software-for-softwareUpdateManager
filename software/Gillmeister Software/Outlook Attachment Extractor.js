'use strict'

let data = {
  url: 'https://www.outlook-attachment-extractor.com/changelog.aspx',
  version: '.content>h3',
  changelog: '.content>ul',
  download: 'https://www.outlook-attachment-extractor.com/downloads/oae-setup.exe',
  install: ['install_inno_type', null, null, { '{code_GetBitnessDefaultInstallDir}': '{dir}' }]
}
module.exports = data
