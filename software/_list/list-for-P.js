'use strict';

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    'Paint.NET': {
      url: 'https://www.dotpdn.com/downloads/pdn.html',
      version: 'a[href$=".zip"]+b',
      changelog: ['https://www.getpaint.net/roadmap.html', '[size]>ul'],
      download: 'a[href$=".zip"]',
      install: ['install_zipped', 'install_nsis']
    },
    'PaintTool SAI': {
      commercial: 3,
      url: 'https://www.systemax.jp/en/sai/',
      version: ['[href$="ful-en.exe"]', 'href', /sai-(.*?)-ful-en.exe/],
      changelog: {
        url: 'https://www.systemax.jp/en/sai/history_v1.txt',
        match: /Ver\.[\d.]+/,
        split: true
      },
      download: '[href$="ful-en.exe"]',
      install: 'install',
      other: {
        v2: {
          url: 'https://www.systemax.jp/en/sai/devdept.html',
          version: ['[href$="64bit-en.zip"]', 'href', /sai2-(.*?)-64bit-en.zip/],
          changelog: {
            url: 'https://www.systemax.jp/en/sai/history_v2.txt',
            match: /^[\d-]+/,
            split: true
          },
          download: '[href$="64bit-en.zip"]'
        }
      }
    },
    'Pale Moon': {
      url: 'https://www.palemoon.org/releasenotes.shtml',
      version: 'h3',
      changelog: 'td>ul',
      download: 'https://www.palemoon.org/download.php?mirror=as&bits=64&type=installer',
      install: ['install', null, 'core']
    },
    'pan-light': {
      site: {
        GitHub: 'https://github.com/peterq/pan-light/releases'
      },
      versionChoice: 'windows-x64.zip',
      install: 'install'
    },
    PandaOCR: {
      site: {
        GitHub: 'https://github.com/miaomiaosoft/PandaOCR/releases/latest'
      },
      install: 'install_zipped_single'
    },
    Pandoc: {
      site: {
        GitHub: 'https://github.com/jgm/pandoc/releases/latest'
      },
      versionChoice: 'windows-x86_64.zip',
      install: 'install_zipped_single'
    },
    PanDownloadServer: {
      site: {
        GitHub: 'https://github.com/PanDownloadServer/Server/releases/latest'
      },
      install: 'install'
    },
    Parsify: {
      commercial: 3,
      site: {
        GitHub: 'https://github.com/parsify-dev/desktop/releases/latest'
      },
      versionChoice: '.exe$',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    'Password Depot': {
      commercial: 3,
      url: 'https://www.password-depot.de/en/news/',
      version: '#client+h2',
      changelog: '#client+h2+ul',
      download: async (res, $, fns, choice) => fns.walkLink('https://www.password-depot.de/en/downloading.htm', fns, '[href$=".exe"]'),
      install: 'install_inno',
      other: {
        server: {
          version: '#server+h2',
          changelog: '#server+h2+ul',
          download: async (res, $, fns, choice) => fns.walkLink('https://www.password-depot.de/en/downloadingsvr.htm', fns, '[href$=".exe"]')
        }
      }
    },
    'Password Safe': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/passwordsafe/files/Windows/'
      },
      downloadChoice: [null, /pwsafe64-(.*?)-bin.zip/],
      install: 'install'
    },
    PasswordSafe: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/passwordsafe/files/Windows/'
      },
      downloadChoice: [null, /pwsafe64-(.*?).exe\//],
      install: 'install_nsis'
    },
    Past: {
      url: 'https://folk.uio.no/ohammer/past/',
      version: 'font>b',
      changelog: async (res, $, fns, choice) => {
        const res1 = await fns.req('https://folk.uio.no/ohammer/past/versionlist.html');
        const $1 = fns.cheerio.load(res1.body);
        return [$1.html($1('font>ul').eq(-1)), true];
      },
      download: 'p>a[href$=".zip"]',
      install: 'install_zipped_single'
    },
    PasteEx: {
      site: {
        GitHub: 'https://github.com/huiyadanli/PasteEx/releases/latest'
      },
      install: 'install'
    },
    'PatchWise Free': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Programming/Patchers/PatchWise-Free.shtml'
      },
      install: 'install_inno_type'
    },
    'Path Copy Copy': {
      site: {
        GitHub: 'https://github.com/clechasseur/pathcopycopy/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno'
    },
    PathLengthChecker: {
      site: {
        GitHub: 'https://github.com/deadlydog/PathLengthChecker/releases/latest'
      },
      install: 'install'
    },
    PCHunter: {
      url: 'http://www.xuetr.com/?p=191',
      version: '#content>h1',
      download: 'http://www.xuetr.com/download/PCHunter_free.zip',
      install: 'install'
    },
    'PCI-Z': {
      url: 'https://www.pci-z.com/',
      version: '.modal-body dt',
      changelog: {
        selector: '.modal-body',
        attr: 'text',
        split: true
      },
      download: 'https://www.pci-z.com/current/x64/PCI-Z.zip',
      install: 'install'
    },
    PCRemote: {
      site: {
        GitHub: 'https://github.com/monect/pcremote-release/releases/latest'
      },
      install: ['install_zipped', 'install_nsis']
    },
    pcstory: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_697570.html'
      },
      install: ['install', null, '*蘑菇游戏下载器*\\*']
    },
    PDF补丁丁: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_643198.html'
      },
      install: ['install', null, 'PDFPatcher*']
    },
    pdscan: {
      site: {
        GitHub: 'https://github.com/ankane/pdscan/releases/latest'
      },
      versionChoice: 'Windows_x86_64.zip',
      install: 'install_zipped_single'
    },
    Peacock: {
      site: {
        GitHub: 'https://github.com/peacockweb/peacock/releases/latest'
      },
      versionChoice: '.exe$',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    peco: {
      site: {
        GitHub: 'https://github.com/peco/peco/releases/latest'
      },
      versionChoice: 'peco_windows_amd64.zip',
      install: 'install_zipped_single'
    },
    Pencil: {
      url: 'http://pencil.evolus.vn/Downloads.html',
      version: ['a[href$=".exe"]', 'href'],
      changelog: {
        url: '[href*="RELEASE/RELEASE-NOTE"]',
        selector: '.markdown-body'
      },
      download: 'a[href$=".exe"]',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        nightly: {
          url: 'https://pencil.evolus.vn/Nightly.html',
          version: '[href^="/dl/"][href$="x86_64.exe"]',
          download: '[href^="/dl/"][href$="x86_64.exe"]'
        }
      }
    },
    Pennywise: {
      site: {
        GitHub: 'https://github.com/kamranahmedse/pennywise/releases/latest'
      },
      versionChoice: '.exe$',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    percentage: {
      site: {
        GitHub: 'https://github.com/kas/percentage/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    'Persepolis Download Manager': {
      site: {
        GitHub: 'https://github.com/persepolisdm/persepolis/releases/latest'
      },
      versionChoice: '64bit.exe',
      install: 'install_inno'
    },
    Persimmon: {
      site: {
        GitHub: 'https://github.com/AlvarBer/Persimmon/releases'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    PEStudio: {
      commercial: 2,
      url: 'https://www.winitor.com/tools/pestudio/changes.log',
      version: (res) => res.body.match(/Version ([\d.]+)/)[1],
      changelog: {
        match: /^Version [\d.]+/,
        split: true
      },
      download: 'https://www.winitor.com/tools/pestudio/current/pestudio.zip',
      install: 'install'
    },
    pet: {
      site: {
        GitHub: 'https://github.com/knqyf263/pet/releases/latest'
      },
      versionChoice: 'windows_amd64.tar.gz',
      install: ['install_zipped', 'install_zipped_single']
    },
    pgweb: {
      site: {
        GitHub: 'https://github.com/sosedoff/pgweb/releases/latest'
      },
      versionChoice: 'windows_amd64.exe.zip',
      install: 'install_zipped_single'
    },
    PhotoDemon: {
      site: {
        GitHub: 'https://github.com/tannerhelland/PhotoDemon/releases/latest'
      },
      install: 'install',
      other: {
        nightly: {
          site: {
            GitHub: 'https://github.com/tannerhelland/PhotoDemon/releases'
          },
          versionChoice: ['.zip$', null, null, 'published_at']
        }
      }
    },
    Photoflare: {
      url: 'https://photoflare.io/downloads/',
      version: '.versiontitle',
      changelog: {
        url: '.versiontitle>a',
        selector: '.entry-content'
      },
      download: '[href$="win_portable.zip"]',
      install: 'install'
    },
    PhotoFlow: {
      site: {
        GitHub: 'https://github.com/aferrero2707/PhotoFlow/releases/latest'
      },
      install: 'install'
    },
    Photon: {
      site: {
        GitHub: 'https://github.com/alanzhangzm/Photon/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/alanzhangzm/Photon/releases'
          }
        }
      }
    },
    PhotoScape: {
      site: {
        Softonic: 'https://en.softonic.com/download/photoscape/windows/post-download'
      },
      install: 'install_nsis'
    },
    'PHP Desktop': {
      site: {
        GitHub: 'https://github.com/cztomczak/phpdesktop/releases/latest'
      },
      versionChoice: [/^phpdesktop-chrome/, /chrome-v(.*)/],
      install: 'install_nsis'
    },
    PHP: {
      url: 'https://windows.php.net/download/',
      version: ['#main-column .block:has(a) .info>h3', 'text', /\((.*?)\)/],
      download: '#main-column .block:has(a) .info>h3~.innerbox [id*="-nts-"]~ul>li>a[href$="x64.zip"]',
      install: 'install',
      other: {
        ts: {
          download: '#main-column .block:has(a) .info>h3~.innerbox [id*="-ts-"]~ul>li>a[href$="x64.zip"]'
        },
        qa: {
          url: 'https://windows.php.net/qa/'
        },
        'qa-ts': {
          url: 'https://windows.php.net/qa/',
          download: '#main-column .block:has(a) .info>h3~.innerbox [id*="-ts-"]~ul>li>a[href$="x64.zip"]'
        },
        snapshots: {
          url: 'https://windows.php.net/snapshots/',
          version: ['#main-column .block:has(a) .info>h3+p+p', 'text', /Revision: (.*?) \(/],
          download: '#main-column .block:has(a) .info>h3~.innerbox [id*="-nts-"]~ul>li>a[href*="x64"][href$=".zip"]'
        },
        'snapshots-ts': {
          url: 'https://windows.php.net/snapshots/',
          version: ['#main-column .block:has(a) .info>h3+p+p', 'text', /Revision: (.*?) \(/],
          download: '#main-column .block:has(a) .info>h3~.innerbox [id*="-ts-"]~ul>li>a[href*="x64"][href$=".zip"]'
        }
      }
    },
    PHPStudy: {
      url: 'https://www.xp.cn/download.html',
      version: '.info>h2',
      download: 'https://public.xp.cn/upgrades/phpStudy_64.zip',
      install: ['install_zipped', 'install_inno_cli']
    },
    PhraseExpress: {
      commercial: 1,
      url: 'https://www.phraseexpress.com/download/changelog/',
      version: '#changelog tr>td:nth-child(2)',
      changelog: '#changelog ul',
      download: 'https://www.phraseexpress.com/PhraseExpress_USB.zip',
      install: 'install'
    },
    PhreshPlayer: {
      site: {
        GitHub: 'https://github.com/Phreshhh/PhreshPlayer/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    PicGather: {
      site: {
        GitHub: 'https://github.com/Licoy/pic-gather/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    PicGo: {
      site: {
        GitHub: 'https://github.com/Molunerfinn/PicGo/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    PicoTorrent: {
      site: {
        GitHub: 'https://github.com/picotorrent/picotorrent/releases/latest'
      },
      versionChoice: 'x64.zip',
      install: 'install_zipped_single'
    },
    PicPick: {
      commercial: 1,
      url: 'https://picpick.app/zh/download',
      version: 'h3+div',
      changelog: 'h3+div',
      download: 'https://www.picpick.org/releases/latest/picpick_portable.zip',
      install: 'install',
      other: {
        pro: {
          download: 'https://www.picpick.org/releases/latest/picpick_inst_pro.exe',
          install: 'install_nsis'
        }
      }
    },
    PicView: {
      site: {
        GitHub: 'https://github.com/Ruben2776/PicView/releases/latest'
      },
      versionChoice: 'Self-Contained.zip',
      install: 'install'
    },
    Pidgin: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/pidgin/files/Pidgin/'
      },
      downloadChoice: [null, 'offline.exe'],
      install: 'install_nsis'
    },
    Piggydb: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/piggydb/files/Piggydb/'
      },
      downloadChoice: [null, '.zip'],
      install: 'install'
    },
    PilotEdit: {
      commercial: 2,
      url: 'http://www.pilotedit.com/index.html',
      version: ['[href*="PilotEdit_x64_"][href$=".zip"]', 'href', /PilotEdit_x64_(.*?).zip/],
      download: '[href*="PilotEdit_x64_"][href$=".zip"]',
      install: ['install_zipped', 'install_inno', 'Setup.exe'],
      other: {
        lite: {
          commercial: 0,
          version: ['[href*="PilotEdit_Lite"][href$=".zip"]', 'href', /PilotEdit_Lite(.*?).zip/],
          download: '[href*="PilotEdit_Lite"][href$=".zip"]'
        }
      }
    },
    PinClipBoard: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Office-tools/Clipboard/PinClipBoard.shtml'
      },
      download: 'https://pinclipboard.com/Download/PinClipBoard_Portable.zip',
      install: 'install'
    },
    Pingendo: {
      site: {
        GitHub: 'https://github.com/Pingendo/pingendo/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    PingPlotter: {
      commercial: 3,
      url: 'https://www.pingplotter.com/download/release-highlights',
      version: '.page-content>div:nth-child(2) h3',
      changelog: {
        selector: '.page-content>div:nth-child(2)',
        attr: 'text',
        match: /^PingPlotter [\d.]+/,
        split: true
      },
      download: 'http://www.pingplotter.com/downloads/pingplotter_install.exe',
      install: ['install_zipped', 'install_msi', '$_4_', null, 'PingPlotter.exe']
    },
    'PiP-Tool': {
      site: {
        GitHub: 'https://github.com/LionelJouin/PiP-Tool/releases/latest'
      },
      versionChoice: '.msi',
      install: ['install_msi', null, 'PiP-Tool.exe']
    },
    PipeIt: {
      site: {
        GitHub: 'https://github.com/AllenDang/PipeIt/releases/latest'
      },
      versionChoice: 'win64.zip',
      install: 'install_zipped_single'
    },
    'Pirate Tor Browser': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/piratebrowser,1.html'
      },
      install: ['install', null, 'Pirate.Tor.Browser.*\\Browser\\*']
    },
    Pixeval: {
      site: {
        GitHub: 'https://github.com/Rinacm/Pixeval/releases/latest'
      },
      install: 'install'
    },
    Pixia: {
      url: 'https://www.ne.jp/asahi/mighty/knight/download.html',
      version: ['a[href*="pix64"]', 'href', /pix64_(.*?)e.exe/],
      changelog: {
        url: 'https://www.ne.jp/asahi/mighty/knight/history.html',
        selector: '.half>.padding',
        attr: 'text',
        match: /ver. [\d.]+/,
        split: true
      },
      download: 'a[href*="pix64"]',
      installType: 'InstallShield'
    },
    'Pixiv Omina': {
      site: {
        GitHub: 'https://github.com/leoding86/pixiv-omina/releases'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-32.7z']
    },
    'Pixiv-Nginx': {
      site: {
        GitHub: 'https://github.com/mashirozx/Pixiv-Nginx/releases/latest'
      },
      versionChoice: i => !i.prerelease,
      download: 'https://github.com/mashirozx/Pixiv-Nginx/archive/v{version}.zip',
      install: 'install'
    },
    PixivBiu: {
      url: 'https://biu.tls.moe/lib/dl.md',
      version: (res) => res.body.match(/^####\s*(.*?)\s/m)[1]
    },
    PixivDeck: {
      site: {
        GitHub: 'https://github.com/akameco/PixivDeck/releases/latest'
      },
      versionChoice: [/win.7z$/, /v(.*)/],
      install: 'install'
    },
    PixivUtil2: {
      site: {
        GitHub: 'https://github.com/Nandaka/PixivUtil2/releases/latest'
      },
      install: 'install'
    },
    Plane9: {
      url: 'https://www.plane9.com/download',
      version: 'h2+p',
      changelog: ['https://www.plane9.com/blog', '.blogtext'],
      download: '[href$=".exe"]',
      install: 'install_nsis'
    },
    Playback: {
      site: {
        GitHub: 'https://github.com/seungjulee/playback/releases/latest'
      },
      versionChoice: 'win32-ia32.zip',
      install: 'install'
    },
    PNGGauntlet: {
      url: 'https://pnggauntlet.com/',
      version: ['.downloadlink', 'href', /PNGGauntlet-([\d.]+).exe/],
      download: '.downloadlink',
      install: ['install_zipped', 'install_msi', '.msi', null, 'PngGauntlet.exe']
    },
    Poderosa: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/poderosa/files/releases/'
      },
      downloadChoice: [null, 'bin.zip'],
      install: 'install'
    },
    poi: {
      site: {
        GitHub: 'https://github.com/poooi/poi/releases/latest'
      },
      versionChoice: /poi-(.*?)-win.7z/,
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/poooi/poi/releases'
          },
          versionChoice: /poi-(.*?)-win.7z/
        }
      }
    },
    PointerFocus: {
      url: 'https://www.pointerfocus.com/',
      version: '#sidecontent>p',
      download: 'https://www.pointerfocus.com/pfsetup.exe',
      install: 'install_inno'
    },
    Pointofix: {
      url: 'http://www.pointofix.de/download.php',
      version: 'h2',
      download: '[href$="direkt.zip"]',
      install: 'install_zipped_single'
    },
    'Pokemon Uranium': {
      site: {
        FileCroco: 'https://www.filecroco.com/download-pokemon-uranium/download/'
      },
      install: 'install_nsis'
    },
    'Polar Bookshelf': {
      site: {
        GitHub: 'https://github.com/burtonator/polar-bookshelf/releases/latest'
      },
      versionChoice: 'x64.exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/burtonator/polar-bookshelf/releases'
          }
        }
      }
    },
    Pomodoro: {
      site: {
        GitHub: 'https://github.com/G07cha/pomodoro/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Pomotroid: {
      site: {
        GitHub: 'https://github.com/Splode/pomotroid/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    'Popcorn Time': {
      //   url: 'https://popcorntime.app/windows',
      //   version: ['[data-os="Win64"]', 'href', /Popcorn-Time-(.*?)-win64-Setup.exe/],
      //   download: '[data-os="Win64"]',
      site: {
        GitHub: 'https://github.com/popcorn-official/popcorn-desktop/releases/latest'
      },
      downloadChoice: 'win64-Setup.exe',
      install: 'install_nsis'
    },
    PopMan: {
      url: 'http://www.ch-software.de/popman/download.htm',
      version: 'a[href$=".exe"]',
      changelog: {
        url: '[href^="changelog"]',
        selector: 'pre',
        attr: 'text',
        split: true
      },
      download: 'http://www.ch-software.de/popman/download/PopMan.exe',
      install: 'install_inno'
    },
    'PortableApps.com Platform': {
      withoutHeader: true,
      url: 'https://portableapps.com/platform/changelog',
      version: '.field-item>h2',
      changelog: '.field-item>ul',
      download: 'https://download3.portableapps.com/portableapps/PortableApps.comPlatform/PortableApps.com_Platform_Setup_{version}.paf.exe',
      install: 'install_nsis'
    },
    Portacle: {
      site: {
        GitHub: 'https://github.com/portacle/portacle/releases/latest'
      },
      versionChoice: 'win-portacle.exe',
      install: 'install'
    },
    Postbox: {
      commercial: 3,
      url: 'https://www.postbox-inc.com/product/releasenotes',
      version: '[role="main"] h3',
      changelog: '[role="main"] h3+ul',
      download: async (res, $, fns, choice) => fns.walkLink('https://www.postbox-inc.com/download/success-win', fns, {
        selector: '[role="main"]>iframe',
        attr: 'src'
      }),
      install: ['install', null, 'core']
    },
    PostgreSQL: {
      url: 'https://www.enterprisedb.com/downloads/postgres-postgresql-downloads',
      version: '.table-responsive tbody>tr>td:nth-child(1)',
      changelog: ['https://www.postgresql.org/docs/release/{version}/', '#docContent'],
      download: 'https://get.enterprisedb.com/postgresql/postgresql-{version}-1-windows-x64-binaries.zip',
      install: 'install',
      other: {
        installer: {
          download: 'https://get.enterprisedb.com/postgresql/postgresql-{version}-1-windows-x64.exe',
          install: null
        },
        12: {
          version: '.table-responsive tbody>tr:contains("12.")>td:nth-child(1)'
        },
        '12-installer': {
          version: '.table-responsive tbody>tr:contains("12.")>td:nth-child(1)',
          download: 'https://get.enterprisedb.com/postgresql/postgresql-{version}-1-windows-x64.exe'
        },
        11: {
          version: '.table-responsive tbody>tr:contains("11.")>td:nth-child(1)'
        },
        '11-installer': {
          version: '.table-responsive tbody>tr:contains("11.")>td:nth-child(1)',
          download: 'https://get.enterprisedb.com/postgresql/postgresql-{version}-1-windows-x64.exe'
        },
        10: {
          version: '.table-responsive tbody>tr:contains("10.")>td:nth-child(1)'
        },
        '10-installer': {
          version: '.table-responsive tbody>tr:contains("10.")>td:nth-child(1)',
          download: 'https://get.enterprisedb.com/postgresql/postgresql-{version}-1-windows-x64.exe'
        },
        9.6: {
          version: '.table-responsive tbody>tr:contains("9.6.")>td:nth-child(1)'
        },
        '9.6-installer': {
          version: '.table-responsive tbody>tr:contains("9.6.")>td:nth-child(1)',
          download: 'https://get.enterprisedb.com/postgresql/postgresql-{version}-1-windows-x64.exe'
        },
        9.5: {
          version: '.table-responsive tbody>tr:contains("9.5.")>td:nth-child(1)'
        },
        '9.5-installer': {
          version: '.table-responsive tbody>tr:contains("9.5.")>td:nth-child(1)',
          download: 'https://get.enterprisedb.com/postgresql/postgresql-{version}-1-windows-x64.exe'
        },
        9.4: {
          version: '.table-responsive tbody>tr:contains("9.4.")>td:nth-child(1)'
        },
        '9.4-installer': {
          version: '.table-responsive tbody>tr:contains("9.4.")>td:nth-child(1)',
          download: 'https://get.enterprisedb.com/postgresql/postgresql-{version}-1-windows-x64.exe'
        },
        9.3: {
          version: '.table-responsive tbody>tr:contains("9.3.")>td:nth-child(1)'
        },
        '9.3-installer': {
          version: '.table-responsive tbody>tr:contains("9.3.")>td:nth-child(1)',
          download: 'https://get.enterprisedb.com/postgresql/postgresql-{version}-1-windows-x64.exe'
        }
      }
    },
    Postman: {
      commercial: 2,
      url: 'https://dl.pstmn.io/api/version/notes?channel=stable',
      version: (res, $) => res.json.notes[0].version,
      changelog: async (res, $) => res.json.notes[0].content,
      download: 'https://dl.pstmn.io/download/latest/win64',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    PotatofieldImageToolkit: {
      site: {
        GitHub: 'https://github.com/CNOliverZhang/PotatofieldImageToolkit/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    PotPlayer: {
      url: 'https://potplayer.daum.net/',
      version: '.tit_version',
      changelog: {
        url: 'http://potplayer.daum.net/update.html?lang=en&bit',
        match: /^\[[\d.]+/,
        split: true
      },
      download: 'http://get.daum.net/PotPlayer64/Version/Latest/PotPlayerSetup64.exe',
      install: 'install_nsis'
    },
    PowerCmd: {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Tweak/System-Tweak/PowerCmd.shtml'
      },
      download: 'http://www.powercmd.com/Install_PowerCmd.exe',
      install: 'install_inno'
    },
    PowerISO: {
      commercial: 3,
      url: 'https://www.poweriso.com/download.php',
      version: '.download_link[href$="x64.exe"]',
      changelog: 'p+ul',
      download: '.download_link[href$="x64.exe"]',
      install: 'install_nsis'
    },
    PowerKeys: {
      site: {
        GitHub: 'https://github.com/PowerKeys/PowerKeys/releases/latest'
      },
      versionChoice: ['x64.exe', /(.*)/, false, 'name'],
      install: 'install_single'
    },
    PowerShell: {
      site: {
        GitHub: 'https://github.com/PowerShell/PowerShell/releases/latest'
      },
      versionChoice: 'win-x64.zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/PowerShell/PowerShell/releases'
          },
          versionChoice: 'win-x64.zip'
        }
      }
    },
    PPet: {
      site: {
        GitHub: 'https://github.com/zenghongtu/PPet/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-32.7z']
    },
    ppInk: {
      site: {
        GitHub: 'https://github.com/pubpub-zz/ppInk/releases/latest'
      },
      install: 'install'
    },
    Preme: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/OS-Enhancements/Preme.shtml'
      }
    },
    Prepros: {
      commercial: 1,
      url: 'https://prepros.io/changelog',
      version: '.Changelog__release-version',
      changelog: '.Changelog__release-content',
      download: 'https://prepros.io/downloads/stable/windows',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    PreviSat: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/previsat/files/previsat/'
      },
      versionChoice: [null, null, 'previsat-(.*?)-exe-win32-64.zip'],
      install: ['install_zipped', 'install_inno']
    },
    PrivateWin10: {
      site: {
        GitHub: 'https://github.com/DavidXanatos/priv10/releases/latest'
      },
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/DavidXanatos/priv10/releases'
          }
        }
      }
    },
    Privoxy: {
      tags: ['proxy'],
      site: {
        SourceForge: 'https://sourceforge.net/projects/ijbswa/files/Win32/'
      },
      downloadChoice: [null, '.zip/download'],
      install: ['install', ['config.txt', 'trust.txt', /\.(filter|action)/]]
    },
    'Process Lasso': {
      commercial: 2,
      url: 'https://bitsum.com/changes/processlasso/',
      version: '[href="/changes/processlasso/"]',
      changelog: '#changes+p+ul',
      download: 'https://bitsum.com/files/processlassosetup64.exe',
      install: 'install_nsis',
      other: {
        beta: {
          url: 'https://bitsum.com/current_version.txt',
          version: 'body',
          download: 'https://dl.bitsum.com/files/beta/processlassosetup64.exe',
          changelog: {
            split: true
          }
        }
      }
    },
    ProcessHacker: {
      site: {
        GitHub: 'https://github.com/processhacker/processhacker/releases/latest'
      },
      install: ['install', null, '64bit'],
      other: {
        nightly: {
          site: {
            AppVeyor: 'https://ci.appveyor.com/api/projects/processhacker/processhacker'
          },
          downloadChoice: 'bin.zip'
        }
      }
    },
    ProgCop: {
      url: 'https://www.progcop.com/',
      version: 'p:contains("Latest version")',
      download: 'https://www.nrosvall.name/progcop/ProgCop.zip',
      install: 'install'
    },
    'Programming Without Coding Technology': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/doublesvsoop/files/PWCT%20For%20MS-Windows/'
      },
      versionChoice: /PWCT ([\d.]+) \(/,
      downloadChoice: [/PWCT ([\d.]+) \(/, 'Fayed_PWCT_.*?.exe'],
      install: 'install_nsis'
    },
    ProtectionID: {
      url: 'https://protectionid.net/',
      version: ['[href$=".rar"]', 'text', /(\d+)/], // Wayback Machine
      download: async (res, $, fns, choice) => {
        const uri1 = $('[href$=".rar"]').attr('href');
        const res1 = await fns.req(uri1);
        const $1 = fns.cheerio.load(res1.body);
        return $1('#playback').attr('src');
      },
      install: 'install_zipped_single'
    },
    Protoman: {
      site: {
        GitHub: 'https://github.com/spluxx/Protoman/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Proton: {
      site: {
        GitHub: 'https://github.com/steventhanna/proton/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    ProtonMail: {
      site: {
        GitHub: 'https://github.com/protonmail-desktop/application/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    ProtonVPN: {
      commercial: 2,
      useProxy: true,
      url: 'https://protonvpn.com/download/win-update.json',
      version: (res, $) => res.json.Categories[1].Releases[0].Version,
      changelog: async (res, $) => res.json.Categories[1].Releases[0].ChangeLog.join('\n'),
      download: (res, $) => res.json.Categories[1].Releases[0].File.Url,
      install: 'install_ai'
    },
    Proxifier: {
      tags: ['proxy'],
      commercial: 3,
      url: 'https://www.proxifier.com/changelog/',
      version: '.changelog-version',
      changelog: '.changelog-description',
      download: 'https://www.proxifier.com/download/ProxifierSetup.exe',
      install: 'install_inno_cli'
    },
    ProxyCap: {
      commercial: 3,
      url: 'http://www.proxycap.com/download.html',
      version: 'body > table > tbody > tr:nth-child(11) > td:nth-child(2) > font',
      download: 'a[href$="x64.msi"]',
      install: 'install_msi_cli'
    },
    'Proxyee Down': {
      site: {
        GitHub: 'https://github.com/proxyee-down-org/proxyee-down/releases/latest'
      },
      versionChoice: '.jar',
      install: 'install_single'
    },
    ProxySU: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/proxysu/ProxySU/releases/latest'
      },
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/proxysu/ProxySU/releases'
          }
        }
      }
    },
    ProxyTunnel: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/proxytunnel/files/proxytunnel%20binaries/'
      },
      versionChoice: /([\d.]+)/,
      downloadChoice: [/([\d.]+)/, '.zip'],
      install: 'install'
    },
    Psiphon: {
      tags: ['proxy'],
      useProxy: true,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/Psiphon.shtml'
      },
      download: 'https://psiphon.ca/psiphon3.exe',
      install: 'install_single'
    },
    PSPad: {
      site: {
        FossHub: 'https://www.fosshub.com/PSPad.html'
      },
      install: 'install'
    },
    PsQREdit: {
      url: 'http://www.psytec.co.jp/freesoft/01/',
      version: '[colspan="5"]>b:nth-child(2)',
      download: 'http://www.psytec.co.jp/freesoft/01/PsQREdit.zip',
      install: 'install_zipped_single',
      other: {
        chs: {
          site: {
            Pc6: 'http://www.pc6.com/softview/SoftView_118843.html'
          }
        }
      }
    },
    Publii: {
      url: 'https://getpublii.com/download/',
      version: ['.download-files>tbody>tr:nth-child(3)>td:nth-child(2)', 'text', /([\d.]+) \(build (\d+)\)/, '$1.$2'],
      changelog: async (res, $, fns, choice) => [(await fns.walkLink('https://getpublii.com/blog/', fns, '.card>h2>a:contains("Release")', {
        selector: '.post-entry',
        attr: 'html'
      })), true],
      download: '.download-files>tbody>tr:nth-child(3)>td:nth-child(4)>a',
      install: 'install_inno'
    },
    pup: {
      site: {
        GitHub: 'https://github.com/ericchiang/pup/releases/latest'
      },
      versionChoice: 'windows_amd64.zip',
      install: 'install_zipped_single'
    },
    PupaFM: {
      site: {
        GitHub: 'https://github.com/xwartz/PupaFM/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    PureRef: {
      url: 'https://www.pureref.com/download.php',
      version: async (res, $, fns, choice) => {
        const res1 = await fns.req('https://www.pureref.com/buildfinder.php?build=WIN64.exe');
        return res1.body.match(/PureRef-([\d.]+)_x64.exe/)[1];
      },
      download: async (res, $, fns, choice) => {
        const uri1 = $('#paypalDownload~input[name="return"]').attr('value').replace('thankyou.php', 'freedownload.php');
        const res1 = await fns.req(uri1);
        return res1.body.match(/\$\("body"\).append\('<iframe style="display:none;" src="(.*?)"><\/iframe>'\);/)[1];
      },
      install: 'install_nsis'
    },
    PureWriter: {
      site: {
        GitHub: 'https://github.com/PureWriter/desktop/releases/latest'
      },
      versionChoice: 'Windows-x64.7z',
      install: 'install'
    },
    Pushbullet: {
      url: 'https://update.pushbullet.com/desktop/update.json',
      version: (res, $) => res.json['.net2-prod'].version,
      download: (res, $) => res.json['.net2-prod'].url,
      install: 'install',
      other: {
        dev: {
          version: (res, $) => res.json['.net2-dev'].version,
          download: (res, $) => res.json['.net2-dev'].url
        },
        pe: {
          version: (res, $) => res.json['WindowsPE-32bit-prod'].version,
          download: (res, $) => res.json['WindowsPE-32bit-prod'].url
        },
        'pe-dev': {
          version: (res, $) => res.json['WindowsPE-32bit-dev'].version,
          download: (res, $) => res.json['WindowsPE-32bit-dev'].url
        }
      }
    },
    PuTTY: {
      url: 'https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html',
      version: 'h1',
      changelog: {
        url: 'https://www.chiark.greenend.org.uk/~sgtatham/putty/changes.html',
        selector: 'body',
        attr: 'text',
        match: /^These features/,
        split: true
      },
      download: 'a[href$="installer.msi"]',
      install: ['install_msi', null, 'putty.exe']
    },
    PuTTYTray: {
      site: {
        GitHub: 'https://github.com/FauxFaux/PuTTYTray/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    PyBingWallpaper: {
      site: {
        GitHub: 'https://github.com/genzj/pybingwallpaper/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_nsis'
    },
    PyChess: {
      site: {
        GitHub: 'https://github.com/pychess/pychess/releases/latest'
      },
      versionChoice: 'win32.msi',
      install: ['install_msi', null, 'pychess.exe']
    },
    pyLoad: {
      site: {
        GitHub: 'https://github.com/pyload/pyload/releases/latest'
      },
      versionChoice: 'win.zip',
      install: 'install'
    },
    PyScripter: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/pyscripter/files/'
      },
      downloadChoice: [null, '-x64.zip'],
      install: 'install'
    },
    Python: {
      url: 'https://www.python.org/downloads/windows/',
      version: 'a[href^="/downloads/release/python-3"]',
      changelog: {
        url: 'a[href^="/downloads/release/python-3"]',
        selector: '.main-content'
      },
      download: 'https://www.python.org/ftp/python/{version}/python-{version}-amd64.exe',
      // https://docs.python.org/3/using/windows.html#installing-without-ui
      install: ['install_cli', null, ['/quiet', '/passive', 'TargetDir={dir}', 'AssociateFiles=1', 'CompileAll=1']],
      other: {
        2: {
          version: 'a[href^="/downloads/release/python-2"]',
          changelog: {
            url: 'a[href^="/downloads/release/python-2"]',
            selector: '.main-content'
          },
          download: 'https://www.python.org/ftp/python/{version}/python-{version}.amd64.msi',
          preferPath: 'python.exe',
          install: ['install_msi_cli', ['ADDLOCAL=ALL']]
        }
      }
    }
  }
};
