'use strict';

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    'L-SMASH Muxer GUI': {
      site: {
        GitHub: 'https://github.com/amefs/lsmash-muxer-gui/releases/latest'
      },
      versionChoice: '.7z',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/amefs/lsmash-muxer-gui/releases'
          }
        }
      }
    },
    LabelPlus: {
      site: {
        GitHub: 'https://github.com/LabelPlus/LabelPlus/releases/latest'
      },
      versionChoice: '.7z',
      install: 'install'
    },
    Ladon: {
      site: {
        GitHub: 'https://github.com/k8gege/Ladon/releases/latest'
      },
      versionChoice: '.rar',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/k8gege/Ladon/releases'
          }
        }
      }
    },
    Lantern: {
      useProxy: true,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Servers/Proxy-Servers/Lantern.shtml'
      },
      install: 'install_zipped_single'
    },
    'lanzou-gui': {
      site: {
        GitHub: 'https://github.com/rachpt/lanzou-gui/releases/latest'
      },
      versionChoice: '.7z',
      install: 'install'
    },
    Laragon: {
      site: {
        GitHub: 'https://github.com/leokhoa/laragon/releases/latest'
      },
      versionChoice: 'laragon-full.exe',
      install: 'install_inno_type',
      other: {
        full: {},
        wamp: {
          versionChoice: 'laragon-wamp.exe'
        },
        portable: {
          versionChoice: 'laragon.7z',
          install: 'install'
        }
      }
    },
    'Last.fm Scrobbler': {
      site: {
        download: 'https://www.last.fm/about/trackmymusic'
      },
      versionChoice: 'https://www.last.fm/download/windows-scrobbler',
      install: ['install_msi', null, 'Last.fm Desktop Scrobbler.exe']
    },
    LastingPaper: {
      url: 'https://www.lastingpaper.com/worker/latest_downloadable_version_info',
      version: (res) => res.json.windows.latestVersion,
      changelog: {
        url: 'https://www.lastingpaper.com/release_notes/',
        selector: '.page>.container',
        attr: 'text',
        match: /^[\d.]+/,
        split: true
      },
      download: (res) => 'https://www.lastingpaper.com/releases/windows/' + res.json.windows.fileName,
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    LastPass: {
      url: 'https://lastpass.com/misc_download2.php',
      version: '#universal-windows-installer+p',
      download: '#universal-windows-installer'
    },
    launch4j: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/launch4j/files/launch4j-3/'
      },
      downloadChoice: [null, 'win32.exe'],
      install: 'install_nsis'
    },
    LaunchBox: {
      commercial: 2,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Others/File-CD-DVD-Catalog/gameLaunchBox.shtml'
      },
      install: 'install_inno'
    },
    Launchy: {
      url: 'https://www.launchy.net/download.php',
      version: ['[href$=".exe"]:contains("Stable")', 'text', /Version \((.*?)\)/],
      download: '[href$=".exe"]:contains("Stable")',
      install: 'install_inno',
      other: {
        beta: {
          version: ['[href$=".exe"]:contains("Beta")', 'text', /Version \((.*?)\)/],
          download: '[href$=".exe"]:contains("Beta")'
        }
      }
    },
    Laverna: {
      site: {
        GitHub: 'https://github.com/Laverna/laverna/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    lazygit: {
      site: {
        GitHub: 'https://github.com/jesseduffield/lazygit/releases/latest'
      },
      versionChoice: 'Windows_x86_64.zip',
      install: 'install_zipped_single'
    },
    lazyhub: {
      site: {
        GitHub: 'https://github.com/ryo-ma/lazyhub/releases/latest'
      },
      versionChoice: 'lazyhub_windows64.exe',
      install: 'install_single'
    },
    lazykube: {
      site: {
        GitHub: 'https://github.com/TNK-Studio/lazykube/releases/latest'
      },
      versionChoice: 'windows_amd64.zip',
      install: 'install_zipped_single'
    },
    'LC-Finder': {
      site: {
        GitHub: 'https://github.com/lc-soft/LC-Finder/releases'
      },
      versionChoice: 'LC-Finder.zip',
      install: 'install'
    },
    LDView: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/ldview/files/01.%20LDView/'
      },
      versionChoice: /LDView (.*)/,
      downloadChoice: [null, /LDView64-(.*).exe/],
      install: 'install_inno_type',
      other: {
        beta: {
          site: {
            SourceForge: 'https://sourceforge.net/projects/ldview/files/03.%20Beta%20Releases/'
          }
        }
      }
    },
    'League Skin': {
      url: 'http://leagueskin.net/p/download-mod-skin-lol-pro-2016-chn',
      version: (res, $) => res.body.match(/link1 = "(http:\/\/.*?)"/)[1].match(/LEAGUESKIN__(.*?)\//)[1],
      changelog: '.alert-warning',
      download: (res, $) => res.body.match(/link1 = "(http:\/\/.*?)"/)[1],
      install: 'install'
    },
    Leanote: {
      commercial: 2,
      site: {
        SourceForge: 'https://sourceforge.net/projects/leanote-desktop-app/files/'
      },
      downloadChoice: [null, /leanote-desktop-windows-x64-v(.*?).zip/],
      install: 'install'
    },
    LeapFTP: {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/FTP-Clients/LeapFTP.shtml&quot;%3E%3Cimg'
      },
      install: 'install_inno'
    },
    Lens: {
      site: {
        GitHub: 'https://github.com/lensapp/lens/releases/latest'
      },
      versionChoice: '.exe$',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Lepton: {
      site: {
        GitHub: 'https://github.com/hackjutsu/Lepton/releases/latest'
      },
      versionChoice: '-win.7z',
      install: 'install'
    },
    less: {
      site: {
        GitHub: 'https://github.com/jftuga/less-Windows/releases/latest'
      },
      versionChoice: ['less.exe', 'less-v(.*)'],
      install: 'install_single',
      other: {
        lesskey: {
          versionChoice: ['lesskey.exe', 'less-v(.*)']
        },
        beta: {
          site: {
            GitHub: 'https://github.com/jftuga/less-Windows/releases'
          }
        },
        'lesskey-beta': {
          site: {
            GitHub: 'https://github.com/jftuga/less-Windows/releases'
          },
          versionChoice: ['lesskey.exe', 'less-v(.*)']
        }
      }
    },
    LetsView: {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/get/letsview,1.html'
      },
      download: 'http://dlqn.aoscdn.com/letsview.exe',
      install: 'install_inno_type'
    },
    'LianDi Note': {
      site: {
        GitHub: 'https://github.com/88250/liandi/releases/latest'
      },
      versionChoice: 'win.zip',
      install: 'install'
    },
    'Liberica OpenJDK': {
      url: 'https://api.bell-sw.com/v1/liberica/releases?version-modifier=latest&bitness=64&os=windows&arch=x86&package-type=zip&bundle-type=jdk',
      version: (res, $, fns, choice) => res.json[0].version,
      download: (res, $, fns, choice) => res.json[0].downloadUrl,
      install: 'install',
      other: {
        latest: {},
        lts: { url: 'https://api.bell-sw.com/v1/liberica/releases?version-modifier=latest&bitness=64&release-type=lts&os=windows&arch=x86&package-type=zip&bundle-type=jdk' }
      }
    },
    libQtShadowsocks: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/shadowsocks/libQtShadowsocks/releases/latest'
      },
      versionChoice: /win64.7z$/,
      install: 'install_zipped_single'
    },
    LibreCAD: {
      site: {
        GitHub: 'https://github.com/LibreCAD/LibreCAD/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_nsis',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/LibreCAD/LibreCAD/releases'
          },
          versionChoice: '.exe'
        }
      }
    },
    LibreOffice: {
      useProxy: true,
      url: 'https://www.libreoffice.org/download/download/',
      version: '.dl_version_number',
      changelog: {
        url: '.dl_release_notes_link_text>a',
        selector: '#toc'
      },
      download: async (res, $, fns, choice) => fns.walkLink('https://mirrors.tuna.tsinghua.edu.cn/libreoffice/libreoffice/stable/', fns, {
        selector: '.link>a',
        sort: true
      }, {
        selector: '.link>a',
        matchCheck: 'win'
      }, {
        selector: '.link>a',
        matchCheck: 'x86_64'
      }, {
        selector: '.link>a',
        matchCheck: /LibreOffice_(.*?)_Win_x64.msi/
      }),
      install: ['install_msi', null, 'program/swriter.exe']
    },
    Librian: {
      site: {
        GitHub: 'https://github.com/RimoChan/Librian/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install'
    },
    LICEcap: {
      url: 'https://www.cockos.com/licecap/',
      version: 'a[href$="install.exe"]',
      changelog: 'a[href$="install.exe"]+br+ul',
      download: 'a[href$="install.exe"]',
      install: ['install_zipped_single', 'licecap.exe']
    },
    LicenseCrawler: {
      commercial: 1,
      url: 'http://klinzmann.name/licensecrawler_download.htm',
      version: ['.addthis_sharing_toolbox+p', 'text', /Last Version: (.*)/],
      download: 'http://klinzmann.name/files/licensecrawler.zip',
      install: 'install'
    },
    'Light Alloy': {
      site: {
        FossHub: 'https://www.fosshub.com/Light-Alloy.html'
      },
      downloadChoice: /LA_Portable_v(.*?).7z/,
      install: 'install'
    },
    'Light Switch': {
      site: {
        GitHub: 'https://github.com/wireless-r/Light-Switch/releases/latest'
      },
      versionChoice: 'Installer.exe',
      install: 'install_inno'
    },
    LightBulb: {
      site: {
        GitHub: 'https://github.com/Tyrrrz/LightBulb/releases/latest'
      },
      install: 'install'
    },
    lightGallery: {
      site: {
        GitHub: 'https://github.com/sachinchoolur/lightgallery-desktop/releases/latest'
      },
      versionChoice: 'windows.zip',
      install: ['install_zipped', 'install_nsis']
    },
    Lightshot: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Multimedia/Graphic/Graphic-Capture/LightShot.shtml'
      },
      download: 'https://app.prntscr.com/build/setup-lightshot.exe',
      install: 'install_inno'
    },
    lightsocks: {
      site: {
        GitHub: 'https://github.com/gwuhaolin/lightsocks/releases/latest'
      },
      versionChoice: 'windows_amd64.tar.gz',
      install: ['install_zipped', 'install_zipped_single']
    },
    LightTable: {
      site: {
        GitHub: 'https://github.com/LightTable/LightTable/releases/latest'
      },
      versionChoice: 'windows.zip',
      install: 'install'
    },
    LIII: {
      site: {
        GitHub: 'https://github.com/aliakseis/LIII/releases'
      },
      install: 'install'
    },
    Lily: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_568525.html'
      },
      install: ['install', null, 'Lily*\\']
    },
    LimeChat: {
      url: 'http://limechat.net/',
      version: '[href$="x64.exe"]',
      changelog: ['http://limechat.net/history', 'a[name]+div'],
      download: '[href$="x64.exe"]',
      install: 'install_nsis'
    },
    Line: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Mobile-Phone-Tools/Others/Naver-LINE.shtml'
      },
      download: 'https://desktop.line-scdn.net/win/new/LineInst.exe',
      install: 'install_nsis'
    },
    Linkbar: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/linkbar/files/'
      },
      downloadChoice: [null, '.zip'],
      install: 'install'
    },
    lintalist: {
      site: {
        GitHub: 'https://github.com/lintalist/lintalist/releases/latest'
      },
      install: 'install'
    },
    'LinuxLive USB Creator': {
      url: 'http://www.linuxliveusb.com/en/download',
      version: '.dl-detail',
      changelog: {
        url: 'https://www.linuxliveusb.com/en/release-notes',
        selector: '.content',
        attr: 'text',
        match: /^Version [\d.]+/,
        split: true
      },
      download: 'http://www.linuxliveusb.com/downloads/?stable',
      install: 'install_nsis'
    },
    Lisk: {
      site: {
        GitHub: 'https://github.com/LiskHQ/lisk-desktop/releases/latest'
      },
      versionChoice: '.exe$',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/LiskHQ/lisk-desktop/releases'
          },
          versionChoice: '.exe$'
        }
      }
    },
    Listary: {
      commercial: 2,
      url: 'https://www.listary.com/download',
      version: ['.portable-download-link', 'href'],
      changelog: '.wpb_text_column:contains("What")+div h3+ul',
      download: '.portable-download-link',
      install: 'install'
    },
    Listen1: {
      site: {
        GitHub: 'https://github.com/listen1/listen1_desktop/releases/latest'
      },
      versionChoice: 'win64.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    lite: {
      site: {
        GitHub: 'https://github.com/rxi/lite/releases/latest'
      },
      install: 'install'
    },
    LiteIDE: {
      site: {
        GitHub: 'https://github.com/visualfc/liteide/releases/latest'
      },
      versionChoice: 'windows-.*.zip',
      install: 'install'
    },
    LiveDraw: {
      site: {
        GitHub: 'https://github.com/antfu/live-draw/releases'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    LiveGo: {
      site: {
        GitHub: 'https://github.com/gwuhaolin/livego/releases/latest'
      },
      versionChoice: '_windows_amd64.tar.gz',
      install: ['install_zipped', 'install_zipped_single']
    },
    'Lively Wallpaper': {
      site: {
        GitHub: 'https://github.com/rocksdanister/lively/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno+type'
    },
    Livestreamer: {
      site: {
        GitHub: 'https://github.com/chrippa/livestreamer/releases/latest'
      },
      install: 'install'
    },
    LMMS: {
      site: {
        GitHub: 'https://github.com/LMMS/lmms/releases/latest'
      },
      versionChoice: 'win64.exe',
      install: 'install_nsis'
    },
    LocalAPK: {
      url: 'https://www.breezie.be/dev/localapk/download.htm',
      version: '[href$="x64.zip"]',
      changelog: ['https://www.breezie.be/dev/localapk/index.htm', '.vet:contains("Version History")+ul ul'],
      download: '[href$="x64.zip"]',
      install: 'install'
    },
    'Locale-Emulator': {
      site: {
        GitHub: 'https://github.com/xupefei/Locale-Emulator/releases/latest'
      },
      install: 'install'
    },
    Lofter2Hexo: {
      site: {
        GitHub: 'https://github.com/alicewish/Lofter2Hexo/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    LogExpert: {
      site: {
        GitHub: 'https://github.com/zarunbal/LogExpert/releases/latest'
      },
      versionChoice: 'LogExpert.(.*).zip',
      install: 'install'
    },
    'LogMeIn Hamachi': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/File-Sharing/Hamachi.shtml'
      },
      download: 'https://secure.logmein.com/hamachi.msi',
      install: ['install_msi', null, 'hamachi-2-ui.exe']
    },
    Lookeen: {
      commercial: 2,
      url: 'https://www.lookeen.com/httpstest.php',
      version: (res, $) => res.body.split('###')[1],
      download: (res, $) => res.body.split('###')[0],
      install: 'install_inno_type'
    },
    'Loop Drop': {
      site: {
        GitHub: 'https://github.com/mmckegg/loop-drop-app/releases/latest'
      },
      versionChoice: 'x64.msi',
      install: ['install_msi', null, 'Loop Drop.exe']
    },
    LosslessCut: {
      site: {
        GitHub: 'https://github.com/mifi/lossless-cut/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    LTP: {
      site: {
        GitHub: 'https://github.com/HIT-SCIR/ltp/releases/latest'
      },
      versionChoice: 'ltp-win-x64-Release.zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/HIT-SCIR/ltp/releases'
          }
        }
      }
    },
    'Lua for Windows': {
      site: {
        GitHub: 'https://github.com/rjpcomputing/luaforwindows/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno'
    },
    LuaBinaries: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/luabinaries/files/'
      },
      downloadChoice: [null, 'Tools Executables', 'Win64_bin.zip'],
      install: 'install'
    },
    Luke: {
      site: {
        GitHub: 'https://github.com/DmitryKey/luke/releases/latest'
      },
      versionChoice: ['.zip$', /Luke ([\d.]+)/, false, 'name'],
      install: 'install'
    },
    Lumo: {
      site: {
        GitHub: 'https://github.com/anmonteiro/lumo/releases/latest'
      },
      versionChoice: 'win64.exe.gz',
      install: 'install_zipped_single'
    },
    Luna: {
      site: {
        GitHub: 'https://github.com/rvpanoz/luna/releases/latest'
      },
      versionChoice: '.msi',
      install: ['install_msi', null, 'luna.exe']
    },
    LxRunOffline: {
      site: {
        GitHub: 'https://github.com/DDoSolitary/LxRunOffline/releases/latest'
      },
      versionChoice: 'msvc.zip',
      install: 'install_zipped_single'
    },
    lynx: {
      url: 'https://lynx.invisible-island.net/release/breakout/CHANGES',
      version: ['body', 'text', /\d+-\d+-\d+ \((.*?)\)/],
      changelog: {
        match: /^\d+-\d+-\d+/,
        split: true
      },
      download: 'https://invisible-island.net/datafiles/current/lynx-cs-setup.exe',
      install: 'install_inno'
    }
  }
};
