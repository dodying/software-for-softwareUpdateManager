'use strict';

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    R: {
      url: 'https://cran.rstudio.com/bin/windows/base/',
      version: '[href$=".exe"]',
      download: '[href$=".exe"]',
      install: 'install_inno_type'
    },
    Raccine: {
      site: {
        GitHub: 'https://github.com/Neo23x0/Raccine/releases/latest'
      },
      install: 'install'
    },
    Raccoon: {
      url: 'https://raccoon.onyxbits.de/apk-downloader/',
      version: '.package-item[href$=".exe"]',
      changelog: '.card-body',
      download: '.package-item[href$=".exe"]',
      install: 'install_single'
    },
    Racket: {
      url: 'https://download.racket-lang.org/',
      version: 'h3',
      download: 'https://mirror.racket-lang.org/installers/{version}/racket-{version}-x86_64-win32.exe',
      install: 'install_nsis',
      other: {
        CS: {
          download: 'https://mirror.racket-lang.org/installers/{version}/racket-{version}-x86_64-win32-cs.exe'
        },
        'Minimal Racket': {
          download: 'https://mirror.racket-lang.org/installers/{version}/racket-minimal-{version}-x86_64-win32.exe'
        },
        'Minimal Racket-CS': {
          download: 'https://mirror.racket-lang.org/installers/{version}/racket-minimal-{version}-x86_64-win32-cs.exe'
        }
      }
    },
    RaiDrive: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Tweak/System-Tweak/RaiDrive.shtml'
      },
      install: 'install'
    },
    Rainclip: {
      url: 'https://www.rainclip.net/',
      version: '.download',
      download: '.download-container>a',
      fixedPath: '%ProgramFiles%\\Rainclip\\Rainclip.exe',
      install: 'install_cli'
    },
    Rainlendar: {
      commercial: 3,
      url: 'https://www.rainlendar.net/cms/index.php?option=com_rny_download&all=1',
      version: ['[href$="64bit.exe"][href*="-Pro-"]', 'href', /Rainlendar-Pro-(.*?)-64bit.exe/],
      changelog: {
        url: 'http://www.rainlendar.net/download/Changes.txt',
        match: /^\[[\d.]+/,
        split: true
      },
      download: '[href$="64bit.exe"][href*="-Pro-"]',
      install: 'install_nsis',
      other: {
        lite: {
          commercial: 0,
          version: ['[href$="64bit.exe"][href*="-Lite-"]', 'href', /Rainlendar-Lite-(.*?)-64bit.exe/],
          download: '[href$="64bit.exe"][href*="-Lite-"]'
        }
      }
    },
    Rainmeter: {
      site: {
        GitHub: 'https://github.com/rainmeter/rainmeter/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_nsis',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/rainmeter/rainmeter/releases'
          }
        }
      }
    },
    Rambox: {
      site: {
        GitHub: 'https://github.com/ramboxapp/community-edition/releases/latest'
      },
      versionChoice: 'win-x64.zip',
      install: 'install'
    },
    Ramme: {
      site: {
        GitHub: 'https://github.com/terkelg/ramme/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    'Rapid Environment Editor': {
      url: 'https://www.rapidee.com/en/download',
      version: ['#winxp', 'text', /([\d.]+) build (\d+)/, '$1.$2'],
      changelog: '.block>ul',
      download: 'https://www.rapidee.com/download/RapidEEx64.zip',
      install: 'install_zipped_single'
    },
    rav1e: {
      site: {
        GitHub: 'https://github.com/xiph/rav1e/releases'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    Raven: {
      site: {
        GitHub: 'https://github.com/hello-efficiency-inc/raven-reader/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    RawTherapee: {
      url: 'https://www.rawtherapee.com/',
      version: '.dl-buttons>div',
      changelog: {
        url: '#intro [href^="/downloads/"]',
        selector: '#new-features+ul'
      },
      download: '[href$="exe"]',
      install: 'install_inno'
    },
    'RBTray-Fork': {
      site: {
        GitHub: 'https://github.com/benbuck/rbtray/releases/latest'
      },
      versionChoice: 'x64.zip',
      install: 'install'
    },
    RBTray: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/rbtray/files/rbtray/'
      },
      downloadChoice: [null, '.zip'],
      install: ['install', null, '64bit']
    },
    Rclone: {
      site: {
        GitHub: 'https://github.com/rclone/rclone/releases/latest'
      },
      versionChoice: 'windows-amd64.zip',
      install: 'install'
    },
    Rdfsnap: {
      url: 'http://www.rdfsnap.com/',
      version: ['.version', 'text', /软件版本：v([\d.]+ build \d+)/],
      changelog: ['http://www.rdfsnap.cn/updatelog.html', '#updatelog'],
      download: '.download>a',
      install: 'install_inno'
    },
    'React-Proto': {
      site: {
        GitHub: 'https://github.com/React-Proto/react-proto/releases/latest'
      },
      versionChoice: '.7z',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/React-Proto/react-proto/releases'
          }
        }
      }
    },
    Reacto: {
      site: {
        GitHub: 'https://github.com/eveningkid/reacto/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    RealLive: {
      site: {
        GitHub: 'https://github.com/parzulpan/real-live/releases/latest'
      },
      versionChoice: 'Windows_.*.zip',
      install: 'install'
    },
    RealTemp: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Info/Real-Temp.shtml'
      },
      install: 'install'
    },
    Reaper: {
      commercial: 3,
      url: 'https://www.reaper.fm/download.php',
      version: '.downloadinfo',
      download: '[href$="x64-install.exe"]',
      install: 'install_nsis'
    },
    RebateBot: {
      site: {
        GitHub: 'https://github.com/546669204/RebateBot/releases/latest'
      },
      versionChoice: 'win.zip',
      install: 'install'
    },
    Recaf: {
      site: {
        GitHub: 'https://github.com/Col-E/Recaf/releases/latest'
      },
      versionChoice: 'jar-with-dependencies.jar',
      install: 'install_single'
    },
    'ReClass.NET': {
      site: {
        GitHub: 'https://github.com/ReClassNET/ReClass.NET/releases/latest'
      },
      versionChoice: '.rar',
      install: 'install'
    },
    ReClassEx: {
      site: {
        GitHub: 'https://github.com/ajkhoury/ReClassEx/releases'
      },
      versionChoice: '64.exe',
      install: 'install_single'
    },
    Recordit: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Multimedia/Video/Video-Recording/Recordit.shtml'
      },
      download: 'https://s3.amazonaws.com/place.it/recordit/Setup_Recordit.exe',
      install: 'install_inno'
    },
    RedCrab: {
      url: 'https://www.redcrab-software.com/en/RedCrab/Updates',
      version: 'p>strong',
      changelog: '.col-md-8>p',
      download: 'https://www.redcrab-software.com/download/redcrab.zip',
      install: 'install'
    },
    Redis: {
      site: {
        GitHub: 'https://github.com/tporadowski/redis/releases/latest'
      },
      versionChoice: '.msi',
      install: ['install_msi', null, 'redis-cli.exe']
    },
    RedisDesktopManager: {
      site: {
        GitHub: 'https://github.com/lework/RedisDesktopManager-Windows/releases/latest'
      },
      versionChoice: /redis-desktop-manager-([\d.]+).zip/,
      install: ['install_zipped', 'install_nsis']
    },
    RedNotebook: {
      site: {
        GitHub: 'https://github.com/jendrikseipp/rednotebook/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno'
    },
    Redshift: {
      site: {
        GitHub: 'https://github.com/jonls/redshift/releases/latest'
      },
      versionChoice: 'x86_64.zip',
      install: 'install'
    },
    'Registry Finder': {
      url: 'http://registry-finder.com/',
      version: 'h2+p',
      changelog: ['http://registry-finder.com/version_history.html', 'ul>li>ul'],
      download: 'a[href$="RegistryFinder64.zip"]',
      install: 'install'
    },
    'Registry Workshop': {
      commercial: 3,
      url: 'http://www.torchsoft.com/en/download.html',
      version: 'table>tbody>tr',
      changelog: ['http://www.torchsoft.com/node/12', '[property="schema:text"]>ul'],
      download: 'http://www.torchsoft.com/download/RegistryWorkshop.exe',
      install: 'install_nsis'
    },
    RegSeeker: {
      commercial: 1,
      url: 'http://www.hoverdesk.net/download.php',
      version: '.blog-date+h4',
      changelog: {
        url: 'http://www.hoverdesk.net/changelog.php',
        selector: '.changes',
        attr: 'text',
        match: /^Version [\d.]+/,
        split: true
      },
      download: 'a[href$=".zip"]',
      install: 'install'
    },
    Remoboard: {
      site: {
        GitHub: 'https://github.com/remoboard/remoboard.github.io/releases/latest'
      },
      versionChoice: 'Windows.zip',
      install: ['install_zipped', 'install_inno_type']
    },
    'Remote Touchpad': {
      site: {
        GitHub: 'https://github.com/Unrud/remote-touchpad/releases/latest'
      },
      versionChoice: 'remote-touchpad_windows_amd64.exe',
      install: 'install_single'
    },
    'Remote Utilities': {
      commercial: 2,
      url: 'https://www.remoteutilities.com/download/',
      version: '.text-center>small',
      changelog: ['https://www.remoteutilities.com/product/release-notes.php', '.bullet1'],
      download: 'a[href$=".portable.zip"]',
      install: 'install'
    },
    RemoteDesktopManage: {
      site: {
        GitHub: 'https://github.com/xunki/RemoteDesktopManage/releases/latest'
      },
      install: 'install'
    },
    RemoteVolumeController: {
      site: {
        GitHub: 'https://github.com/differentrain/Remote-Volume-Controller/releases/latest'
      },
      install: 'install_zipped_single'
    },
    'Rename Expert': {
      commercial: 3,
      url: 'https://www.rename-expert.com/changelog.aspx',
      version: 'h2',
      changelog: '.content>ul',
      download: 'https://www.rename-expert.com/downloads/rename_expert-setup.exe',
      install: 'install_inno'
    },
    RenderDoc: {
      url: 'https://renderdoc.org/builds',
      version: '#win-dl-button',
      changelog: ['https://github.com/baldurk/renderdoc/releases/latest', '.release-header+.markdown-body'],
      download: '#win-dl-button',
      install: ['install_msi', null, 'renderdoccmd.exe'],
      other: {
        nightly: {
          version: ['#win-dl-button2', 'text', /([\d-]+)/],
          download: '#win-dl-button2',
          install: 'install'
        }
      }
    },
    RenPy: {
      url: 'https://www.renpy.org/latest.html',
      version: 'h1',
      changelog: {
        url: 'https://www.renpy.org/doc/html/changelog.html',
        selector: '#full-changelog',
        attr: 'text',
        match: /^[\d.]+/,
        split: true
      },
      download: '.center>a[href$=".exe"]',
      install: 'install'
    },
    renrenBackup: {
      site: {
        GitHub: 'https://github.com/whusnoopy/renrenBackup/releases/latest'
      },
      install: 'install'
    },
    RePKG: {
      site: {
        GitHub: 'https://github.com/notscuffed/repkg/releases'
      },
      install: 'install_zipped_single'
    },
    Resonic: {
      commercial: 3,
      site: {
        download: 'https://resonic.at/download'
      },
      versionChoice: 'https://resonic.at/get/pro',
      changelog: ['https://resonic.at/whatsnew', '.pb-4>.col'],
      install: ['install_msi', null, 'Resonic.exe'],
      other: {
        player: {
          commercial: 1,
          versionChoice: 'https://resonic.at/get/player'
        }
      }
    },
    'Resource Hacker': {
      url: 'http://www.angusj.com/resourcehacker/',
      version: 'a[name="download"]+h3',
      changelog: 'strong:contains("Changes")+ul',
      download: 'http://www.angusj.com/resourcehacker/resource_hacker.zip',
      install: ['install_zipped_single', 'ResourceHacker.exe']
    },
    'Resource Tuner': {
      commercial: 3,
      url: 'http://www.restuner.com/news-history.htm',
      version: '#content>p:contains("Version")',
      changelog: '#content>p:contains("Version")+p',
      download: 'http://www.heaventools.com/download/rtsetup.exe',
      install: 'install_inno'
    },
    'Responsively App': {
      site: {
        GitHub: 'https://github.com/responsively-org/responsively-app/releases/latest'
      },
      versionChoice: 'ResponsivelyApp-Setup-(.*).exe$',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    RetroArch: {
      url: 'https://retroarch.com/?page=platforms',
      version: (res) => res.body.match(/version = "(.*?)"/)[1],
      changelog: ['https://retroarch.com/?page=changelog', '.changelog-update-descriptions'],
      download: 'http://buildbot.libretro.com/stable/{version}/windows/x86_64/RetroArch-x64-setup.exe',
      install: ['install_zipped', 'install', '.7z']
    },
    'Revo Uninstaller Pro': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Tweak/Uninstallers/Revo-Uninstaller-Pro.shtml'
      },
      download: 'https://www.revouninstaller.com/download-professional-version.php',
      install: 'install_inno_type'
    },
    RevokeMsgPatcher: {
      site: {
        GitHub: 'https://github.com/huiyadanli/RevokeMsgPatcher/releases/latest'
      },
      install: 'install'
    },
    RHash: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/rhash/files/rhash/'
      },
      downloadChoice: [null, /rhash-(.*?)-win64.zip/],
      install: ['install_zipped_single', 'rhash.exe']
    },
    'Riot Optimizer': {
      url: 'https://riot-optimizer.com/',
      version: 'h1',
      changelog: ['https://riot-optimizer.com/changelog/', '.post-entry>p:nth-child(3)'],
      download: async (res, $, fns, choice) => {
        const res1 = await fns.req('https://riot-optimizer.com/riot/thank-you-for-downloading-riot/');
        const $1 = fns.cheerio.load(res1.body);
        return [$1('#direct-link').eq(0).attr('href'), '.exe'];
      },
      install: 'install_nsis'
    },
    ripgrep: {
      site: {
        GitHub: 'https://github.com/BurntSushi/ripgrep/releases/latest'
      },
      versionChoice: 'x86_64-pc-windows-msvc.zip',
      install: 'install_zipped_single'
    },
    RisohEditor: {
      site: {
        GitHub: 'https://github.com/katahiromz/RisohEditor/releases/latest'
      },
      versionChoice: 'portable.zip',
      install: 'install'
    },
    'RJ TextEd': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Programming/File-Editors/RJ-TextEd.shtml'
      },
      install: ['install_inno_type', null, null, { '{win}': null }]
    },
    RMPrepUSB: {
      useProxy: true,
      url: 'https://www.rmprepusb.com/documents/release-2-0',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.td-value',
        sort: true,
        attr: 'text',
        matchCheck: /RMPrepUSB_Portable_v(.*?).zip/,
        match: /RMPrepUSB_Portable_v(.*?).zip/
      }),
      download: 'https://www.rmprepusb.com/documents/release-2-0/RMPrepUSB_Portable_v{version}.zip?attredirects=0&d=1',
      install: 'install'
    },
    RoamOutliner: {
      site: {
        GitHub: 'https://github.com/Jugging/RoamOutliner/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-32.7z']
    },
    RoboIntern: {
      url: 'https://robointern.tech/release-log.html',
      version: '.releaselog-section b',
      changelog: {
        selector: '.releaselog-section',
        attr: 'text',
        match: /^RoboIntern [\d.]+/,
        split: true
      },
      download: 'https://robointern.tech/release/RoboIntern.zip',
      install: 'install'
    },
    RocketChat: {
      site: {
        GitHub: 'https://github.com/RocketChat/Rocket.Chat.Electron/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    RocketDock: {
      url: 'https://punklabs.com/',
      version: ['[href^="/downloads/RocketDock-"][href$=".exe"]', 'href'],
      download: '[href^="/downloads/RocketDock-"][href$=".exe"]',
      install: 'install_inno_type'
    },
    RoslynPad: {
      site: {
        GitHub: 'https://github.com/aelij/RoslynPad/releases/latest'
      },
      install: 'install'
    },
    'rp++': {
      site: {
        GitHub: 'https://github.com/0vercl0k/rp/releases/latest'
      },
      versionChoice: 'win-x64.exe',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/0vercl0k/rp/releases'
          }
        }
      }
    },
    rsrc: {
      site: {
        GitHub: 'https://github.com/akavel/rsrc/releases/latest'
      },
      versionChoice: 'windows_amd64.exe',
      install: 'install_single'
    },
    'RSS Bandit': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/rssbandit/files/rssbandit/'
      },
      downloadChoice: [null, 'installer.zip'],
      install: ['install_zipped', 'install_msi', '.msi', null, 'RSSBandit.exe']
    },
    'RSS Guard': {
      site: {
        GitHub: 'https://github.com/martinrotter/rssguard/releases/latest'
      },
      versionChoice: 'win64.7z',
      install: 'install'
    },
    RSSOwlnix: {
      site: {
        GitHub: 'https://github.com/Xyrio/RSSOwlnix/releases'
      },
      versionChoice: 'win32.win32.x86_64.zip',
      install: 'install'
    },
    RStudio: {
      url: 'https://rstudio.com/products/rstudio/download/',
      version: '[href$=".exe"]',
      // changelog: ['https://rstudio.com/products/rstudio/release-notes/', 'div>.mx-auto'],
      download: '[href$=".exe"]',
      install: 'install_nsis'
    },
    RubyInstaller: {
      site: {
        GitHub: 'https://github.com/oneclick/rubyinstaller2/releases/latest'
      },
      versionChoice: ['devkit(.*)x64.exe', /RubyInstaller-(.*)/],
      install: 'install_inno',
      other: {
        nodevkit: {
          versionChoice: ['x64.7z', /RubyInstaller-(.*)/],
          install: 'install'
        }
      }
    },
    Ruffle: {
      url: 'https://ruffle-rs.s3-us-west-1.amazonaws.com/?delimiter=/&prefix=builds/windows/', // https://github.com/ruffle-rs/ruffle
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'ListBucketResult>Contents>Key',
        match: 'ruffle_windows_(.*?).zip',
        attr: 'text'
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'ListBucketResult>Contents>Key',
        matchCheck: 'ruffle_windows_(.*?).zip',
        attr: 'text'
      }),
      install: 'install_zipped_single'
    },
    Rufus: {
      url: 'https://rufus.ie/en_IE.html',
      version: 'a[name="changelog"]~ul b',
      changelog: '[name="changelog"]+h2+ul>li',
      download: 'a[name="download"]~ul a[href$="p.exe"]',
      install: 'install_single'
    },
    Ruler: {
      site: {
        GitHub: 'https://github.com/andrijac/ruler/releases/latest'
      },
      install: 'install_zipped_single'
    },
    RunAny: {
      site: {
        GitHub: 'https://github.com/hui-Zz/RunAny/releases/latest'
      },
      versionChoice: i => !i.prerelease,
      download: 'https://github.com/hui-Zz/RunAny/archive/v{version}.zip',
      install: 'install'
    },
    RunJS: {
      site: {
        GitHub: 'https://github.com/lukehaas/RunJS/releases/latest'
      },
      versionChoice: '.exe$',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    RuntimePack: {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/runtimepack,1.html'
      },
      install: ['install_cli', null, ['-y', '-gm2', '-fm0'], { wait: true }]
    },
    Rust: {
      site: {
        'GitHub-commit': 'https://github.com/rust-lang/rust/releases'
      },
      download: 'https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe',
      install: function (info) {
        require('fs').copyFileSync(info.output, './unzip/rustup-init.exe');
        return info.fns.install.cli(info, './unzip/rustup-init.exe', ['-v', '-y'], {
          env: {
            RUSTUP_DIST_SERVER: 'https://mirrors.tuna.tsinghua.edu.cn/rustup'
          }
        });
      }
    },
    'Rutracker proxy': {
      site: {
        GitHub: 'https://github.com/RutrackerOrg/rutracker-proxy/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    }
  }
};
