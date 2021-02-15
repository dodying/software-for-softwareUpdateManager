'use strict';

module.exports = {
  type: 'software-list',
  list: {
    DeleteOnClick: {
      url: 'https://www.2brightsparks.com/freeware/index.html',
      version: '[href^="/assets/software/"][href*=DeleteOnClick]',
      download: 'https://www.2brightsparks.com/assets/software/DeleteOnClick_Setup.exe',
      install: 'install_inno_type'
    },
    EncryptOnClick: {
      url: 'https://www.2brightsparks.com/freeware/index.html',
      version: '[href^="/assets/software/"][href*=EncryptOnClick]',
      download: 'https://www.2brightsparks.com/assets/software/EncryptOnClick_Setup.exe',
      install: 'install_inno'
    },
    HashOnClick: {
      url: 'https://www.2brightsparks.com/freeware/index.html',
      version: '[href^="/assets/software/"][href*=HashOnClick]',
      download: 'https://www.2brightsparks.com/assets/software/HashOnClick_Setup.exe',
      install: 'install_inno_type'
    },
    PatchOnClick: {
      url: 'https://www.2brightsparks.com/freeware/index.html',
      version: '[href^="/assets/software/"][href*=PatchOnClick]',
      download: 'https://www.2brightsparks.com/assets/software/PatchOnClick_Setup.exe',
      install: 'install_inno'
    },
    SyncBack: {
      commercial: 2,
      url: 'https://www.2brightsparks.com/downloads.html',
      version: 'a.btn[href="/download-syncbackpro.html"]',
      changelog: ['https://www.2brightsparks.com/syncback/changes.html', 'hr+p'],
      download: 'https://www.2brightsparks.com/assets/software/SyncBackPro64_Setup.exe',
      install: 'install_inno_type',
      other: {
        SE: {
          version: 'a.btn[href="/download-syncbackse.html"]',
          download: 'https://www.2brightsparks.com/assets/software/SyncBackSE64_Setup.exe'
        },
        Lite: {
          site: {
            Softpedia: 'https://www.softpedia.com/get/System/Back-Up-and-Recovery/SyncBackLite.shtml'
          },
          download: 'https://www.2brightsparks.com/assets/software/SyncBackLite_Setup.exe'
        },
        Free: {
          commercial: 0,
          version: 'a.btn[href="/download-syncbackfree.html"]',
          download: 'https://www.2brightsparks.com/assets/software/SyncBack_Setup.exe'
        }
      }
    }
  }
};
