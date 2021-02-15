'use strict';

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    'qBittorrent-Enhanced-Edition': {
      site: {
        GitHub: 'https://github.com/c0re100/qBittorrent-Enhanced-Edition/releases/latest'
      },
      versionChoice: [/x64_setup.exe$/, /release-(.*)/],
      install: 'install_nsis'
    },
    qBittorrent: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/qbittorrent/files/qbittorrent-win32/'
      },
      downloadChoice: [null, 'x64_setup.exe'],
      changelog: ['https://www.qbittorrent.org/news.php', '#StretchHome>ul'],
      install: 'install',
      other: {
        ci: {
          site: {
            'GitHub-actions': 'https://github.com/qbittorrent/qBittorrent'
          },
          versionChoice: 'Windows_x64',
          changelog: null,
          downloadChoice: null,
          install: ['install', null, 'build']
        }
      }
    },
    Qdown: {
      site: {
        lanzous: 'https://lightzhan.lanzous.com/b015t0q5c'
      },
      versionChoice: /QdownInstaller_x64_(.*?).exe/
    },
    QEMU: {
      url: 'https://qemu.weilnetz.de/w64/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '[href^="qemu-w64-setup-"][href$=".exe"]',
        sort: true,
        match: /qemu-w64-setup-(.*?).exe/
      }),
      changelog: {
        selector: 'body',
        attr: 'text',
        match: /^\d+-\d+-\d+:/,
        split: true
      },
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '[href^="qemu-w64-setup-"][href$=".exe"]',
        sort: true
      }),
      install: 'install_nsis'
    },
    qimgv: {
      site: {
        GitHub: 'https://github.com/easymodo/qimgv/releases/latest'
      },
      versionChoice: '-video.exe',
      install: 'install_inno',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/easymodo/qimgv/releases'
          }
        }
      }
    },
    qmmp: {
      url: 'http://qmmp.ylsoftware.com/files/windows/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        sort: true,
        matchCheck: /^[\d.]+\/$/
      }, {
        selector: 'a',
        sort: true,
        match: /qmmp-([\d.]+)-win32.exe/
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        sort: true,
        matchCheck: /^[\d.]+\/$/
      }, {
        selector: 'a',
        sort: true,
        matchCheck: /qmmp-([\d.]+)-win32.exe/
      }),
      install: 'install_nsis'
    },
    QOwnNotes: {
      url: 'https://www.qownnotes.org/installation',
      version: '#accordion-Windows+div .build-number',
      changelog: ['https://www.qownnotes.org/changelog/QOwnNotes', '.item-cont .post-cont>ul'],
      download: '#accordion-Windows+div .ezbinaryfile-field',
      install: 'install'
    },
    qrcp: {
      site: {
        GitHub: 'https://github.com/claudiodangelis/qrcp/releases/latest'
      },
      versionChoice: 'Windows_x86_64.tar.gz',
      install: ['install_zipped', 'install']
    },
    QTranslate: {
      url: 'https://quest-app.appspot.com/download',
      version: 'h3',
      changelog: '[id^="version"]>.panel-body',
      download: '.btn-info[href$=".exe"]',
      install: 'install_nsis'
    },
    QtScrcpy: {
      site: {
        GitHub: 'https://github.com/barry-ran/QtScrcpy/releases/latest'
      },
      versionChoice: 'win-x64(.*).zip',
      install: 'install'
    },
    QTTabBar: {
      url: 'http://qttabbar.wikidot.com/',
      version: 'a[href$=".zip"][href*="/QTTabBar"]',
      changelog: ['http://qttabbar.wikidot.com/change-log', '#page-content>div'],
      download: 'a[href$=".zip"][href*="/QTTabBar"]'
    },
    Quassel: {
      url: 'https://quassel-irc.org/downloads',
      version: '.content>h2',
      changelog: {
        url: 'https://raw.githubusercontent.com/quassel/quassel/master/ChangeLog',
        match: /^Version [\d.]+/,
        split: true
      },
      download: '[href*="x64-setup"][href$=".7z"]',
      install: 'install'
    },
    'Quick Access Popup': {
      url: 'https://www.quickaccesspopup.com/',
      version: ['pre', 'text', /Version: ([\d.]+) \(/],
      changelog: 'pre',
      download: 'https://www.quickaccesspopup.com/download/quickaccesspopup.zip',
      install: 'install'
    },
    'Quick CPU': {
      url: 'https://coderbag.com/product/quickcpu',
      version: 'product-cpm>div>div>div>p>strong',
      changelog: ['https://coderbag.com/product/quickcpu/releasenotes/version/{version}', 'div>ul'],
      download: 'https://coderbag.com/assets/downloads/cpm/currentversion/QuickCpuSetup64.zip',
      install: ['install_zipped', 'install_msi', '.msi', null, 'QuickCPU.exe']
    },
    'Quick Macros': {
      commercial: 3,
      url: 'http://quickmacros.com/help/QM_Help/IDH_WHATSNEW2.html',
      version: 'h2',
      changelog: 'ol',
      download: 'http://quickmacros.com/quickmac.exe',
      install: 'install_inno'
    },
    Quicker: {
      site: {
        download: 'https://getquicker.net/Download'
      },
      versionChoice: ['https://getquicker.net/download/item/win_x64', /Quicker.x64.(.*?).msi/],
      install: ['install_msi', null, 'Quicker.exe'],
      other: {
        fast: {
          versionChoice: ['https://getquicker.net/download/item/fast_x64', /Quicker.x64.(.*?).msi/]
        }
      }
    },
    QuickLook: {
      site: {
        GitHub: 'https://github.com/QL-Win/QuickLook/releases/latest'
      },
      install: 'install'
    },
    QuickPar: {
      url: 'http://www.quickpar.org.uk/Download.htm',
      version: '.title:contains("Download version")',
      changelog: ['http://www.quickpar.org.uk/ReleaseNotes.htm', 'tr:contains("Release Notes")+tr'],
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, '[href^="Download-"]', '[href$=".exe"]'),
      install: 'install_nsis'
    },
    QuickViewer: {
      site: {
        GitHub: 'https://github.com/kanryu/quickviewer/releases/latest'
      },
      versionChoice: 'x64.zip',
      install: 'install'
    },
    QuiteRSS: {
      withoutHeader: true,
      url: 'https://quiterss.org/en/download',
      version: '.field-item a[href$=".zip"]',
      changelog: ['https://quiterss.org/en/history', '.field-item>ul'],
      download: '.field-item a[href$=".zip"]',
      install: 'install'
    },
    'Quod Libet': {
      site: {
        GitHub: 'https://github.com/quodlibet/quodlibet/releases/latest'
      },
      versionChoice: ['installer.exe$', /release-(.*)/],
      install: 'install_nsis_cli'
    },
    qutebrowser: {
      site: {
        GitHub: 'https://github.com/qutebrowser/qutebrowser/releases/latest'
      },
      versionChoice: 'windows-standalone-amd64.zip',
      install: 'install'
    },
    Qv2ray: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/Qv2ray/Qv2ray/releases/latest'
      },
      versionChoice: 'Windows-x64.7z',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/Qv2ray/Qv2ray/releases'
          }
        },
        'plugin-Command': {
          site: {
            GitHub: 'https://github.com/Qv2ray/QvPlugin-Command/releases'
          },
          versionChoice: 'Windows-x64.dll',
          install: 'install_single'
        },
        'plugin-NaiveProxy': {
          site: {
            GitHub: 'https://github.com/Qv2ray/QvPlugin-NaiveProxy/releases'
          },
          versionChoice: 'Windows-x64.dll',
          install: 'install_single'
        },
        'plugin-SS': {
          site: {
            GitHub: 'https://github.com/Qv2ray/QvPlugin-SS/releases'
          },
          versionChoice: 'Windows-x64.dll',
          install: 'install_single'
        },
        'plugin-SSR': {
          site: {
            GitHub: 'https://github.com/Qv2ray/QvPlugin-SSR/releases'
          },
          versionChoice: 'Windows-x64.dll',
          install: 'install_single'
        },
        'plugin-Trojan': {
          site: {
            GitHub: 'https://github.com/Qv2ray/QvPlugin-Trojan/releases'
          },
          versionChoice: 'Windows-x64.dll',
          install: 'install_single'
        },
        'plugin-Trojan-Go': {
          site: {
            GitHub: 'https://github.com/Qv2ray/QvPlugin-Trojan-Go/releases'
          },
          versionChoice: 'Windows-x64.dll',
          install: 'install_single'
        }
      }
    },
    QWinFF: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/qwinff/files/release/'
      },
      downloadChoice: [null, /portable-.*.exe/],
      install: 'install'
    },
    'QZ Tray': {
      site: {
        GitHub: 'https://github.com/qzind/tray/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install', null, '*\\tmp']
    }
  }
};
