'use strict';

// 'use strict';
// const data = {
//   commercial: 2,
//   url: 'https://forum.odrive.com/c/release-notes',
//   version: (res, $) => {
//     let json = JSON.parse($('#data-preloaded').attr('data-preloaded'));
//     json = Object.entries(json).find(i => i[0].match(/^topic_list_c/))[1];
//     return JSON.parse(json).topic_list.topics.filter(i => i.title.match('Win v'))[0].title.match(/Win v.(\d+)/)[1];
//   },
//   download: 'https://www.odrive.com/downloaddesktop?platform=win',
//   install: ['install_wix', null, 'odrive.x64.msi', 'odrive.exe']
// };
// module.exports = data;

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    oauth2_proxy: {
      site: {
        GitHub: 'https://github.com/bitly/oauth2_proxy/releases/latest'
      },
      versionChoice: 'windows-amd64.(.*?).tar.gz',
      install: ['install_zipped', 'install_zipped_single']
    },
    ocenaudio: {
      url: 'https://www.ocenaudio.com/',
      version: '#startpage_download_text>h1',
      changelog: ['https://www.ocenaudio.com/en/changelog', '#changelog_text>ul'],
      download: 'https://www.ocenaudio.com/downloads/ocenaudio64.exe',
      install: 'install_nsis'
    },
    'odrive Sync': {
      commercial: 2,
      site: {
        download: 'https://forum.odrive.com/c/release-notes'
      },
      versionChoice: 'https://www.odrive.com/downloaddesktop?platform=win',
      install: ['install_wix', null, 'odrive.x64.msi', 'odrive.exe']
    },
    ODrive: {
      site: {
        GitHub: 'https://github.com/liberodark/ODrive/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/liberodark/ODrive/releases'
          },
          versionChoice: '.exe'
        }
      }
    },
    'Office Tool Plus': {
      site: {
        GitHub: 'https://github.com/YerongAI/Office-Tool/releases/latest'
      },
      install: 'install'
    },
    OfficeBox: {
      url: 'http://www.wofficebox.com/js/common.js',
      version: (res, $) => res.body.match(/versionNumber="(.*?)"/)[1],
      download: (res, $) => res.body.match(/stanHref="(.*?)"/)[1],
      install: ['install_zipped', 'install_inno']
    },
    'One Commander': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/File-managers/One-Commander.shtml'
      },
      download: 'http://onecommander.com/OneCommanderPortable.zip',
      install: 'install'
    },
    Onefetch: {
      site: {
        GitHub: 'https://github.com/o2sh/onefetch/releases/latest'
      },
      versionChoice: 'windows-x86-64.zip',
      install: 'install_zipped_single'
    },
    OnenoteTaggingKit: {
      site: {
        GitHub: 'https://github.com/WetHat/OnenoteTaggingKit/releases/latest'
      },
      versionChoice: '.msi',
      fixedPath: '%ProgramFiles(x86)%\\WetHat Lab\\OneNoteTaggingKit\\OneNoteTaggingKit.dll',
      install: 'install_msi_cli',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/WetHat/OnenoteTaggingKit/releases'
          }
        }
      }
    },
    OneQuick: {
      commercial: 2,
      site: {
        'GitHub-code': 'https://github.com/OneQuick/OneQuick.github.io/tree/master/bin'
      },
      versionChoice: /OneQuick.([\d.]+).x64.zip/,
      changelog: ['https://raw.githubusercontent.com/OneQuick/OneQuick.github.io/master/update-information.xml', 'ChangeLog'],
      install: 'install_zipped_single'
    },
    OnionShare: {
      site: {
        GitHub: 'https://github.com/micahflee/onionshare/releases/latest'
      },
      versionChoice: 'setup.exe',
      install: 'install_nsis'
    },
    OnlyOffice: {
      site: {
        GitHub: 'https://github.com/ONLYOFFICE/DesktopEditors/releases/latest'
      },
      versionChoice: ['x64.exe', /ONLYOFFICE-DesktopEditors-(.*)/],
      install: 'install_inno_type'
    },
    OnTopReplica: {
      site: {
        GitHub: 'https://github.com/LorenzCK/OnTopReplica/releases/latest'
      },
      install: ['install_zipped', 'install_msi', null, null, 'OnTopReplica.exe']
    },
    OpalCalc: {
      url: 'https://www.skytopia.com/software/opalcalc/history.html',
      version: 'h2',
      changelog: {
        selector: 'body',
        attr: 'text',
        split: true
      },
      download: 'https://www.skytopia.com/software/opalcalc/OpalCalcSetup.exe'
    },
    'Open Broadcaster Software': {
      site: {
        GitHub: 'https://github.com/obsproject/obs-studio/releases/latest'
      },
      versionChoice: 'Full-Installer-x64.exe',
      install: 'install_nsis'
    },
    'Open Shell': {
      site: {
        GitHub: 'https://github.com/Open-Shell/Open-Shell-Menu/releases/latest'
      },
      versionChoice: '.exe',
      other: {
        nightly: {
          site: {
            AppVeyor: 'https://ci.appveyor.com/api/projects/passionate-coder/open-shell-menu'
          },
          downloadChoice: '.7z',
          install: 'install'
        }
      }
    },
    'Open Syobon Action': {
      tags: ['game'],
      site: {
        GitHub: 'https://github.com/angelXwind/OpenSyobonAction/releases/latest'
      },
      versionChoice: '-win32-bin.zip',
      install: 'install'
    },
    'Open++': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/OS-Enhancements/Open.shtml'
      },
      install: 'install'
    },
    OpenArk: {
      site: {
        GitHub: 'https://github.com/BlackINT3/OpenArk/releases/latest'
      },
      versionChoice: '64.exe',
      install: 'install_single'
    },
    openCanvas: {
      commercial: 3,
      url: 'http://www.portalgraphics.net/en/oc/download/',
      version: 'h1+p',
      changelog: '.history-box',
      download: '[href*="bin_dl.php?"]',
      install: 'install_inno_type'
    },
    OpenComic: {
      site: {
        GitHub: 'https://github.com/ollm/OpenComic/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    OpenEmu: {
      site: {
        GitHub: 'https://github.com/OpenEmu/OpenEmu/releases/latest'
      },
      install: 'install'
    },
    OpenHardwareMonitor: {
      url: 'https://openhardwaremonitor.org/downloads/',
      version: '.download-button',
      changelog: ['https://openhardwaremonitor.org/', '.entry'],
      download: '.download-button',
      install: 'install'
    },
    OpenHashTab: {
      fixedPath: '%windir%/System32/OpenHashTab.dll',
      site: {
        GitHub: 'https://github.com/namazso/OpenHashTab/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno_cli'
    },
    OpenLieroX: {
      site: {
        GitHub: 'https://github.com/albertz/openlierox/releases/latest'
      },
      versionChoice: 'win32.zip',
      install: 'install'
    },
    OpenShot: {
      site: {
        GitHub: 'https://github.com/OpenShot/openshot-qt/releases/latest'
      },
      versionChoice: 'x86_64.exe',
      install: 'install_inno'
    },
    OpenSSH: {
      site: {
        GitHub: 'https://github.com/PowerShell/Win32-OpenSSH/releases/latest'
      },
      versionChoice: 'Win64.zip',
      install: 'install'
    },
    Opera: {
      url: 'https://download.operachina.com/pub/opera/desktop/', // https://get.geo.opera.com
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        sort: true,
        attr: 'text',
        match: /^(.*)\/$/
      }),
      changelog: async (res, $, fns, choice) => [(await fns.walkLink('https://blogs.opera.com/desktop/?s=changelog', fns, '[itemprop="url"]', {
        selector: 'h4[id]+ul',
        attr: 'html'
      })), true],
      download: 'https://download.operachina.com/pub/opera/desktop/{version}/win/Opera_{version}_Setup_x64.exe',
      install: 'install',
      other: {
        beta: {
          url: 'https://download.operachina.com/pub/opera-beta/',
          changelog: null,
          download: 'https://download.operachina.com/pub/opera-beta/{version}/win/Opera_beta_{version}_Setup_x64.exe'
        },
        developer: {
          url: 'https://download.operachina.com/pub/opera-developer',
          changelog: null,
          download: 'https://download.operachina.com/pub/opera-developer/{version}/win/Opera_Developer_{version}_Setup_x64.exe'
        },
        GX: {
          url: 'https://download.operachina.com/pub/opera_gx/',
          changelog: null,
          download: 'https://download.operachina.com/pub/opera_gx/{version}/win/Opera_GX_{version}_Setup_x64.exe'
        }
      }
    },
    Optimizer: {
      site: {
        GitHub: 'https://github.com/hellzerg/optimizer/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    'Opus Tools': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/muldersoft/files/Opus%20Tools/'
      },
      versionChoice: /\.([\d-]+).zip/,
      install: 'install'
    },
    'Otter Browser': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/otter-browser/files/'
      },
      downloadChoice: [/otter-browser-(.*)/, /win64-(.*).7z/],
      install: 'install'
    },
    Outflux: {
      site: {
        GitHub: 'https://github.com/timescale/outflux/releases/latest'
      },
      versionChoice: 'Windows_x86_64.tar.gz',
      install: ['install_zipped', 'install_zipped_single']
    },
    Outline: {
      site: {
        GitHub: 'https://github.com/Jigsaw-Code/outline-client/releases/latest'
      },
      versionChoice: [/.exe$/, /windows-v(.*)/],
      install: 'install_nsis',
      other: {
        daily: {
          site: {
            GitHub: 'https://github.com/Jigsaw-Code/outline-client/releases'
          },
          versionChoice: [/.exe$/, /daily-(.*)/]
        }
      }
    },
    'Outlook CalDav Synchronizer': {
      site: {
        GitHub: 'https://github.com/aluxnimm/outlookcaldavsynchronizer/releases/latest'
      }
    },
    'Outlook Google Calendar Sync': {
      site: {
        GitHub: 'https://github.com/phw198/OutlookGoogleCalendarSync/releases/latest'
      },
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/phw198/OutlookGoogleCalendarSync/releases'
          }
        }
      }
    },
    overwrite: {
      site: {
        GitHub: 'https://github.com/ivoprogram/overwrite/releases/latest'
      },
      versionChoice: {
        filter: i => !i.prerelease,
        match: /ver([\d.]+)/
      },
      download: 'https://raw.githubusercontent.com/ivoprogram/overwrite/master/release/overwrite-windows-x86-64.exe',
      install: 'install_single'
    }
  }
};
