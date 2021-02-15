'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Camel K': {
      site: {
        GitHub: 'https://github.com/apache/camel-k/releases/latest'
      },
      versionChoice: 'windows-64bit.tar.gz',
      install: ['install_zipped', 'install_zipped_single']
    },
    'Cloudstack Cloudmonkey': {
      site: {
        GitHub: 'https://github.com/apache/cloudstack-cloudmonkey/releases/latest'
      },
      versionChoice: 'windows.x86-64.exe',
      install: 'install_single',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/apache/cloudstack-cloudmonkey/releases/latest'
          },
          versionChoice: ['windows.x86-64.exe', null, null, 'published_at']
        }
      }
    },
    'OpenWhisk utility': {
      site: {
        GitHub: 'https://github.com/apache/openwhisk-wskdeploy/releases/latest'
      },
      versionChoice: 'windows-amd64.zip',
      install: 'install_zipped_single',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/apache/openwhisk-wskdeploy/releases/latest'
          },
          versionChoice: ['windows-amd64.zip', null, null, 'published_at']
        }
      }
    },
    'OpenWhisk-cli': {
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
    }
  }
};
