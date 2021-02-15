'use strict';

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    Zazu: {
      site: {
        GitHub: 'https://github.com/tinytacoteam/zazu/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Zback: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/File-Management/Zback.shtml'
      },
      install: 'install'
    },
    'ZD Soft Screen Recorder': {
      commercial: 2,
      url: 'https://www.zdsoft.com/downloads.html',
      version: 'a[href="screen-recorder-history.html"]',
      changelog: ['https://zdsoft.com/screen-recorder-history.html', 'ul.mt-10'],
      download: 'https://www.zdsoft.com/download/SRSetup.zip',
      install: 'install'
    },
    zeal: {
      site: {
        GitHub: 'https://github.com/zealdocs/zeal/releases/latest'
      },
      versionChoice: 'portable(.*)x64.7z',
      install: 'install'
    },
    ZeGrapher: {
      site: {
        GitHub: 'https://github.com/AdelKS/ZeGrapher/releases/latest'
      },
      versionChoice: '64bit.exe',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/AdelKS/ZeGrapher/releases'
          }
        }
      }
    },
    Zenkit: {
      url: 'https://zenkit.com/en/platforms/',
      version: ['[href$=".exe"]+div', 'text', /Version ([\d-]+)/],
      download: 'https://static.zenkit.com/downloads/desktop-apps/base/zenkit-base-windows.exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        todo: {
          url: 'https://zenkit.com/en/todo/platforms/',
          download: 'https://static.zenkit.com/downloads/desktop-apps/todo/zenkit-todo-windows.exe'
        }
      }
    },
    ZenMate: {
      useProxy: true,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/ZenMate.shtml'
      },
      download: 'https://zenmate-windows-update.s3-eu-west-1.amazonaws.com/setup.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    'Zero Install': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/Zero-Install.shtml'
      },
      download: 'https://0install.de/files/zero-install.zip',
      install: 'install_zipped_single'
    },
    ZeroNet: {
      site: {
        GitHub: 'https://github.com/HelloZeroNet/ZeroNet/releases/latest'
      },
      versionChoice: i => !i.prerelease,
      download: 'https://github.com/HelloZeroNet/ZeroNet-win/archive/dist/ZeroNet-win.zip',
      install: 'install'
    },
    'ZeroTier One': {
      commercial: 2,
      site: {
        GitHub: 'https://github.com/zerotier/ZeroTierOne/releases/latest'
      },
      versionChoice: i => !i.prerelease,
      download: 'https://download.zerotier.com/dist/ZeroTier%20One.msi',
      install: ['install_msi', null, 'ZeroTier One.exe']
    },
    Zettlr: {
      site: {
        GitHub: 'https://github.com/Zettlr/Zettlr/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/Zettlr/Zettlr/releases'
          }
        }
      }
    },
    Zim: {
      url: 'https://zim.glump.net/windows/',
      version: 'h3',
      download: 'a[href*="setup"][href$=".exe"]',
      install: 'install_nsis'
    },
    Zotero: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Office-tools/Other-Office-Tools/Zotero.shtml'
      },
      install: ['install', null, 'core']
    },
    'ZY-Player': {
      site: {
        GitHub: 'https://github.com/Hunlongyu/ZY-Player/releases/latest'
      },
      versionChoice: 'Setup-.*?.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    }
  }
};
