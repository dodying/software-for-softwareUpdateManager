'use strict';

module.exports = {
  site: {
    download: 'https://www.unifiedremote.com/download/other'
  },
  versionChoice: ['https://www.unifiedremote.com/download/windows-portable', 'Server-(.*?).zip'],
  install: 'install',
  other: {
    v2: {
      versionChoice: ['https://www.unifiedremote.com/download/windows-v2-portable', 'Server-(.*?).zip']
    }
  }
};
