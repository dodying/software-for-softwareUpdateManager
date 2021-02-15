'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Advanced PassGen': {
      site: {
        GitHub: 'https://github.com/CodeDead/Advanced-PassGen/releases/latest'
      },
      install: 'install'
    },
    'Advanced PortChecker': {
      site: {
        GitHub: 'https://github.com/CodeDead/Advanced-PortChecker/releases/latest'
      },
      install: 'install'
    },
    AniView: {
      site: {
        GitHub: 'https://github.com/CodeDead/AniView/releases/latest'
      },
      install: 'install'
    },
    DeadHash: {
      url: 'https://codedead.com/?page_id=35',
      version: ['[href$=".exe"]:contains("Portable")', 'href', /DeadHash%20(.*?).exe/],
      download: '[href$=".exe"]:contains("Portable")',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    DeadLock: {
      site: {
        GitHub: 'https://github.com/CodeDead/DeadLock/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno_type'
    },
    DeadPix: {
      site: {
        GitHub: 'https://github.com/CodeDead/DeadPix/releases/latest'
      },
      install: 'install'
    },
    MemPlus: {
      site: {
        GitHub: 'https://github.com/CodeDead/MemPlus/releases/latest'
      },
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/CodeDead/MemPlus/releases'
          }
        }
      }
    },
    'PK-Finder': {
      site: {
        GitHub: 'https://github.com/CodeDead/PK-Finder/releases/latest'
      },
      install: 'install'
    }
  }
};
