'use strict'

let data = {
  url: 'https://www.cpuid.com/softwares/hwmonitor.html',
  version: '#download h4+.subtitle',
  changelog: '.release-content>ul',
  download: (res, $) => 'http://download.cpuid.com' + $('#download .icon-zip[href$=".zip"]').attr('href').replace('/downloads', '').replace('http://www.cpuid.com', ''),
  install: ['install_zipped_single', 'x64.exe'],
  other: {
    pro: {
      commercial: 3,
      url: 'https://www.cpuid.com/softwares/hwmonitor-pro.html'
    }
  }
}
module.exports = data
