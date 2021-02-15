'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'aliyun-cli': {
      site: {
        GitHub: 'https://github.com/aliyun/aliyun-cli/releases/latest'
      },
      versionChoice: 'windows-.*?-amd64.zip',
      install: 'install_zipped_single'
    },
    Arthas: {
      site: {
        GitHub: 'https://github.com/alibaba/arthas/releases/latest'
      },
      versionChoice: ['bin.zip', 'arthas-all-(.*)'],
      install: 'install'
    },
    Dragonwell: {
      site: {
        GitHub: 'https://github.com/alibaba/dragonwell8/releases/latest'
      },
      versionChoice: ['Windows_x64.zip', /(\d+[\d.]+\d+)/],
      install: ['install_zipped', 'install']
    },
    'git-repo': {
      site: {
        GitHub: 'https://github.com/alibaba/git-repo-go/releases/latest'
      },
      versionChoice: 'Windows-64.zip',
      install: 'install_zipped_single'
    },
    'InnoDB Java Reader': {
      site: {
        GitHub: 'https://github.com/alibaba/innodb-java-reader/releases/latest'
      },
      versionChoice: '.jar',
      install: 'install_single'
    },
    'kt-connect': {
      site: {
        GitHub: 'https://github.com/alibaba/kt-connect/releases/latest'
      },
      versionChoice: 'kubectl-connect_.*?_windows_amd64.tar.gz',
      install: ['install_zipped', 'install_zipped_single'],
      other: {
        ktctl: {
          versionChoice: 'ktctl_.*?_windows_amd64.tar.gz'
        }
      }
    },
    LightProxy: {
      site: {
        GitHub: 'https://github.com/alibaba/lightproxy/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/alibaba/lightproxy/releases'
          }
        }
      }
    },
    Nacos: {
      site: {
        GitHub: 'https://github.com/alibaba/nacos/releases/latest'
      },
      install: 'install'
    }
  }
};
