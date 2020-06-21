'use strict';

module.exports = {
  site: {
    GitHub: 'https://github.com/andreasfertig/cppinsights/releases/latest'
  },
  versionChoice: ['windows-64bit.zip', 'v_(.*)'],
  install: 'install_zipped_single',
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/andreasfertig/cppinsights/releases'
      },
      versionChoice: ['windows.zip', null, null, 'published_at']
    }
  }
};
