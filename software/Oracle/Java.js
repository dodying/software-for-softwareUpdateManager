// 'use strict'

// let data = {
//   url: 'https://java.com/en/download/manual.jsp',
//   version: ['h4.sub', 'text', /Recommended Version (.*)/],
//   download: 'a[title="Download Java software for Windows (64-bit)"]',
//   install: ['install_cli', null, ['INSTALLDIR={dir}', 'INSTALL_SILENT=Enable', 'REBOOT=Disable', 'NOSTARTMENU=Enable', 'REMOVEOUTOFDATEJRES=1'], { wait: true }]
// }
// module.exports = data
'use strict';

const data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Programming/SDK-DDK/Sun-Java-JRE.shtml'
  },
  install: ['install_cli', null, ['INSTALLDIR={dir}', 'INSTALL_SILENT=Enable', 'REBOOT=Disable', 'NOSTARTMENU=Enable', 'REMOVEOUTOFDATEJRES=1'], { wait: true }],
  other: {
    8: {
      versionChoice: /(8 Build \d+)/,
      downloadChoice: /x64 - 8 Build 261/
    },
    ea: {
      versionChoice: /(\d+ Build \d+) Early Access/,
      downloadChoice: /Early Access/
    }
  }
};
module.exports = data;
