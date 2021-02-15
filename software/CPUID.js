'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'CPU-Z': {
      url: 'https://www.cpuid.com/softwares/cpu-z.html',
      version: '#download h4+.subtitle',
      changelog: '.release-content>ul',
      download: (res, $) => 'http://download.cpuid.com' + $('#download .icon-zip[href$="cn.zip"]').attr('href').replace('/downloads', '').replace('http://www.cpuid.com', ''),
      install: ['install_zipped_single', 'x64.exe']
    },
    HWMonitor: {
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
    },
    Perfmonitor2: {
      url: 'https://www.cpuid.com/softwares/perfmonitor-2.html',
      version: '#download h4+.subtitle',
      changelog: '.release-content>ul',
      download: (res, $) => 'http://download.cpuid.com' + $('#download .icon-zip[href$=".zip"]').attr('href').replace('/downloads', '').replace('http://www.cpuid.com', ''),
      install: ['install_zipped_single', 'x64.exe']
    },
    powerMAX: {
      url: 'https://www.cpuid.com/softwares/powermax.html',
      version: '#download h4+.subtitle',
      changelog: '.release-content>ul',
      download: (res, $) => 'http://download.cpuid.com' + $('#download .icon-zip[href$=".zip"]').attr('href').replace('/downloads', '').replace('http://www.cpuid.com', ''),
      install: ['install_zipped_single', 'x64.exe']
    }
  }
};
