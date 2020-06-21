'use strict';

module.exports = {
  site: {
    GitHub: 'https://github.com/apache/openwhisk-cli/releases/latest'
  },
  versionChoice: 'windows-amd64.zip',
  install: 'install_zipped_single',
  other: {
    beta: {
      site: {
        GitHub: 'https://github.com/apache/openwhisk-cli/releases/latest'
      },
      versionChoice: ['windows-amd64.zip', null, null, 'published_at']
    }
  }
};
