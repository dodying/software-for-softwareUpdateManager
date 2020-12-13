'use strict';

const data = {
  commercial: 3,
  url: 'https://www.extendoffice.com/support/latest-updates/office-tab.html',
  version: '.list-title>a[href*="release-notes"]',
  changelog: {
    url: '.list-title>a[href*="release-notes"]',
    selector: '.kmsg'
  },
  download: 'https://download.extendoffice.com/downloads/SetupOfficeTab.exe',
  install: 'install_inno_cli',
  other: {
    Enterprise: {
      download: 'https://download.extendoffice.com/downloads/SetupOfficeTabEnterprise.exe'
    }
  }
};
module.exports = data;
