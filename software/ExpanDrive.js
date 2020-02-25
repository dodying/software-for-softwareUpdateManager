'use strict'

let data = {
  url: 'https://www.expandrive.com/download-expandrive/',
  version: ['[onClick*="64.msi"]', 'onclick'],
  changelog: ['https://www.expandrive.com/blog/', '.post-title+p'],
  download: (res, $) => $('[onClick*="64.msi"]').attr('onclick').match(/ifrm.src ="(.*?)";/)[1],
  install: ['install_msi', null, 'ExpanDrive.exe']
}
module.exports = data
