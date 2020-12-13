'use strict';

const data = {
  commercial: 3,
  url: 'https://www.extendoffice.com/support/latest-updates/kutools-for-outlook.html',
  version: 'a[href*="release-notes"]',
  changelog: {
    url: 'a[href*="release-notes"]',
    selector: '.kmsg'
  },
  download: 'https://download.extendoffice.com/downloads/OutlookKutools.exe',
  install: 'install_inno_cli'
};
module.exports = data;
