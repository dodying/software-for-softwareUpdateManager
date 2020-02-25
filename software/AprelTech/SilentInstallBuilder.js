'use strict'

let data = {
  commercial: 3,
  url: 'https://apreltech.com/SilentInstallBuilder/Download',
  version: 'h4',
  changelog: {
    url: 'https://apreltech.com/SilentInstallBuilder/Doc/Introduction/Versions',
    selector: '#docs-content',
    attr: 'text',
    match: /^v[\d.]+$/,
    split: true
  },
  download: 'https://www.apreltech.com/Downloads/SibSetup.msi',
  install: ['install_msi', null, 'Sib.exe'],
  other: {
    beta: {
      version: '.row>.mb-5:nth-child(2) .media-body',
      changelog: {
        url: 'https://apreltech.com/SilentInstallBuilder/Doc/Introduction/Versions',
        selector: '#docs-content',
        attr: 'text',
        match: /^v[\d.]+ \(beta\)$/,
        split: true
      },
      download: 'https://apreltech.com/Downloads/SibSetupBeta.msi'
    }
  }
}
module.exports = data
