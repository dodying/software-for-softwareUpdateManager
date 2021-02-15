'use strict';

module.exports = {
  type: 'software-list',
  list: {
    chrlauncher: {
      site: {
        GitHub: 'https://github.com/henrypp/chrlauncher/releases/latest'
      },
      versionChoice: ['.zip$', /v.(.*)/],
      install: ['install', null, '*\\64']
    },
    Chromium: {
      site: {
        GitHub: 'https://github.com/henrypp/chromium/releases'
      },
      versionChoice: {
        filter: i => i.assets.some(j => j.name.match('.exe')) && i.tag_name.match('win64'),
        match: 'v(.*)-win64'
      },
      downloadChoice: '.exe',
      install: ['install_zipped', 'install']
    },
    DriveDotShield: {
      site: {
        GitHub: 'https://github.com/henrypp/drivedotshield/releases/latest'
      },
      install: 'install_zipped_single'
    },
    ErrorLookup: {
      site: {
        GitHub: 'https://github.com/henrypp/errorlookup/releases/latest'
      },
      install: ['install', null, '*\\64']
    },
    FreeShooter: {
      site: {
        GitHub: 'https://github.com/henrypp/freeshooter/releases/latest'
      },
      install: ['install', null, '*\\64']
    },
    hostsmgr: {
      site: {
        GitHub: 'https://github.com/henrypp/hostsmgr/releases/latest'
      },
      install: ['install', null, '*\\64']
    },
    InetOps: {
      site: {
        GitHub: 'https://github.com/henrypp/inetops/releases/latest'
      },
      install: 'install_zipped_single'
    },
    IpLookup: {
      site: {
        GitHub: 'https://github.com/henrypp/iplookup/releases/latest'
      },
      install: ['install', null, '*\\64']
    },
    leetchat: {
      site: {
        GitHub: 'https://github.com/henrypp/leetchat/releases/latest'
      },
      install: 'install'
    },
    MatrixScreensaver: {
      site: {
        GitHub: 'https://github.com/henrypp/matrix/releases/latest'
      },
      install: ['install', null, '*\\64']
    },
    MemReduct: {
      site: {
        GitHub: 'https://github.com/henrypp/memreduct/releases/latest'
      },
      install: ['install', null, '*\\64']
    },
    simplewall: {
      site: {
        GitHub: 'https://github.com/henrypp/simplewall/releases/latest'
      },
      install: ['install', null, '*\\64']
    },
    TimeVertor: {
      site: {
        GitHub: 'https://github.com/henrypp/timevertor/releases/latest'
      },
      install: ['install', null, '*\\64']
    },
    uninstmgr: {
      site: {
        GitHub: 'https://github.com/henrypp/uninstmgr/releases/latest'
      },
      install: 'install_zipped_single'
    }
  }
};
