'use strict';

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    YACReader: {
      site: {
        GitHub: 'https://github.com/YACReader/yacreader/releases/latest'
      },
      versionChoice: 'winx64-7z.exe',
      install: 'install_inno'
    },
    YakYak: {
      site: {
        GitHub: 'https://github.com/yakyak/yakyak/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/yakyak/yakyak/releases'
          }
        }
      }
    },
    yamada: {
      site: {
        GitHub: 'https://github.com/akameco/yamada/releases/latest'
      },
      versionChoice: /amada-win32-x64.zip$/
    },
    Yandex: {
      url: 'https://browser.yandex.com/',
      version: (res, $) => res.body.match(/"browserVersion":"([\d.]+)"/)[1],
      download: 'https://browser.yandex.com/download/?full=1',
      install: ['install_zipped', 'install', null, null, 'Browser-bin'],
      other: {
        beta: {
          url: 'https://browser.yandex.com/beta/',
          version: '.button2__text',
          download: 'https://browser.yandex.com/download/?full=1&betacusto=1'
        }
      }
    },
    YARA: {
      site: {
        GitHub: 'https://github.com/VirusTotal/yara/releases/latest'
      },
      versionChoice: 'win64.zip',
      install: 'install'
    },
    yawast: {
      site: {
        GitHub: 'https://github.com/adamcaudill/yawast/releases/latest'
      },
      install: 'install'
    },
    'ydl-ui': {
      site: {
        GitHub: 'https://github.com/Maxstupo/ydl-ui/releases/latest'
      },
      versionChoice: 'Portable.zip',
      install: 'install'
    },
    'Yet Another Clash Dashboard': {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/haishanh/yacd/releases/latest'
      },
      versionChoice: 'yacd.tar.xz',
      install: ['install_zipped', 'install']
    },
    yode: {
      site: {
        GitHub: 'https://github.com/yue/yode/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install_zipped_single'
    },
    Yosoro: {
      site: {
        GitHub: 'https://github.com/IceEnd/Yosoro/releases/latest'
      },
      versionChoice: 'win32-x64(.*).zip',
      install: ['install_zipped', 'install_zipped', null, 'install', 'full.nupkg', null, 'lib\\net*']
    },
    'youtube-dl-gui': {
      site: {
        GitHub: 'https://github.com/MrS0m30n3/youtube-dl-gui/releases/latest'
      },
      versionChoice: 'win-setup.zip',
      install: ['install_zipped', 'install_inno']
    },
    'youtube-dl': {
      site: {
        GitHub: 'https://github.com/ytdl-org/youtube-dl/releases/latest'
      },
      versionChoice: 'youtube-dl.exe',
      install: 'install_single'
    },
    'youtube-dlc': {
      site: {
        GitHub: 'https://github.com/blackjack4494/youtube-dlc/releases/latest'
      },
      versionChoice: 'youtube-dlc.exe',
      install: 'install_single'
    },
    youtube: {
      site: {
        GitHub: 'https://github.com/kkdai/youtube/releases/latest'
      },
      versionChoice: 'windows_amd64.tar.gz',
      install: ['install_zipped', 'install_zipped_single']
    },
    'YTD Video Downloader': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Download-Managers/YTD-Video-Downloader.shtml'
      },
      install: 'install_nsis'
    },
    YUKI: {
      site: {
        GitHub: 'https://github.com/project-yuki/YUKI/releases'
      },
      install: 'install'
    },
    yuzu: {
      site: {
        GitHub: 'https://github.com/yuzu-emu/yuzu-mainline/releases/latest'
      },
      versionChoice: ['yuzu-windows(.*).7z', /mainline-(.*)/],
      install: ['install', 'yuzu-windows-msvc-source-(.*).tar.xz'],
      other: {
        nightly: {
          site: {
            GitHub: 'https://github.com/yuzu-emu/yuzu-nightly/releases'
          },
          versionChoice: ['yuzu-windows(.*).7z', /nightly-(.*)/]
        },
        canary: {
          site: {
            GitHub: 'https://github.com/yuzu-emu/yuzu-canary/releases'
          },
          versionChoice: ['yuzu-windows(.*).7z', /canary-(.*)/]
        }
      }
    },
    YYetsShare: {
      url: 'http://app.rrysapp.com/',
      version: ['a[href$=".exe"]', 'href'],
      download: 'a[href$=".exe"]',
      install: 'install_inno'
    },
    YYNote: {
      site: {
        'Tencent SoftMgr': 'https://pc.qq.com/detail/11/detail_23251.html'
      },
      install: 'install_ai'
    }
  }
};
