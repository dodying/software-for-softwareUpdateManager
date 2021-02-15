'use strict';

module.exports = {
  type: 'software-list',
  list: {
    AllDup: {
      url: 'http://www.alldup.de/alldup_hilfe/alldup_version.php',
      version: '#content>h4',
      changelog: '#content>ul',
      download: 'http://www.alldup.de/download/AllDupSetup.exe',
      install: 'install_inno'
    },
    AllSync: {
      url: 'http://www.alldup.de/hilfe/a_versionshistory3.php',
      version: '#content>h4',
      changelog: '#content>ul',
      download: 'http://www.allsync.de/download/AllSyncSetupDemo.exe',
      install: 'install_inno'
    }
  }
};
