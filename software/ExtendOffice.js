'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Kutools For Excel': {
      commercial: 3,
      url: 'https://www.extendoffice.com/support/latest-updates/kutools-for-excel.html',
      version: 'a[href*="release-notes"]',
      changelog: {
        url: 'a[href*="release-notes"]',
        selector: '.kmsg'
      },
      download: 'https://download.extendoffice.com/downloads/KutoolsforExcelSetup.exe',
      install: 'install_inno_cli'
    },
    'Kutools For Outlook': {
      commercial: 3,
      url: 'https://www.extendoffice.com/support/latest-updates/kutools-for-outlook.html',
      version: 'a[href*="release-notes"]',
      changelog: {
        url: 'a[href*="release-notes"]',
        selector: '.kmsg'
      },
      download: 'https://download.extendoffice.com/downloads/OutlookKutools.exe',
      install: 'install_inno_cli'
    },
    'Kutools For Word': {
      commercial: 3,
      url: 'https://www.extendoffice.com/support/latest-updates/kutools-for-word.html',
      version: 'a[href*="release-notes"]',
      changelog: {
        url: 'a[href*="release-notes"]',
        selector: '.kmsg'
      },
      download: 'https://download.extendoffice.com/downloads/WordKutools.exe',
      install: 'install_inno_cli'
    },
    'Office Tab': {
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
    }
  }
};
