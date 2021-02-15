'use strict';

// 'use strict'
// let data = {
//   url: 'https://www.tinytask.net/changelog.php',
//   version: '.font_version',
//   changelog: 'body > table.content_cell_wide > tbody > tr:nth-child(4)',
//   download: 'https://www.tinytask.net/TinyTask.zip',
//   install: 'install_zipped_single'
// }
// module.exports = data
// 'use strict';
// const data = {
//   site: {
//     GitHub: 'https://github.com/Trojan-Qt5/Trojan-Qt5/releases/latest'
//   },
//   versionChoice: 'Windows.7z',
//   install: 'install',
//   other: {
//     beta: {
//       site: {
//         GitHub: 'https://github.com/Trojan-Qt5/Trojan-Qt5/releases'
//       }
//     }
//   }
// };
// module.exports = data;

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    'T-Clock': {
      site: {
        GitHub: 'https://github.com/White-Tiger/T-Clock/releases/latest'
      },
      versionChoice: '.7z',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/White-Tiger/T-Clock/releases'
          }
        }
      }
    },
    Tabbles: {
      commercial: 2,
      url: 'https://tabbles.net/changelog/',
      version: 'h1+h1',
      changelog: 'h1+p',
      download: 'https://tabbles.net/downloads/Tabbles-5-installer.exe',
      install: ['install_wix', null, 'TabblesSetup.msi', 'tagger.exe']
    },
    TablacusExplorer: {
      site: {
        GitHub: 'https://github.com/tablacus/TablacusExplorer/releases/latest'
      },
      install: 'install'
    },
    TablePlus: {
      commercial: 3,
      url: 'https://tableplus.com/blog/2018/09/changelogs-windows.html',
      version: 'h3',
      changelog: 'h5+ul',
      download: 'https://tableplus.com/release/windows/tableplus_latest',
      install: 'install_inno_type'
    },
    Tad: {
      site: {
        GitHub: 'https://github.com/antonycourtney/tad/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    TaggedFrog: {
      url: 'http://lunarfrog.com/projects/taggedfrog/download',
      version: 'h2',
      changelog: '.gap:contains("What\'s new")+ul',
      download: '.link-list>a[href$=".zip"]',
      install: 'install'
    },
    TagScanner: {
      url: 'https://www.xdlab.ru/en/download.htm',
      version: 'a[href$=".zip"]',
      changelog: ['https://www.xdlab.ru/en/history.htm', 'h4+ul'],
      download: 'a[href$=".zip"]',
      install: 'install'
    },
    TagSpaces: {
      commercial: 2,
      site: {
        GitHub: 'https://github.com/tagspaces/tagspaces/releases/latest'
      },
      versionChoice: 'win(.*).exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/tagspaces/tagspaces/releases'
          }
        }
      }
    },
    Tagstoo: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/tagstoo/files/'
      },
      versionChoice: /Tagstoo (.*?) win64/,
      downloadChoice: [/Tagstoo (.*?) win64/, '.exe'],
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    TakeStock: {
      url: 'https://ravib.com/takestock/2/relnotes.htm',
      version: ['[bgcolor="aliceblue"] b', 'text', /Version (.*?),/],
      changelog: '[bgcolor="#F9F9F9"]',
      download: 'http://ravib.com/takestock/2/TakeStock2Portable.zip',
      install: 'install'
    },
    'Task Coach': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/taskcoach/files/taskcoach/'
      },
      downloadChoice: [null, 'win32.exe'],
      install: 'install_inno_type'
    },
    Taskade: {
      url: 'https://www.taskade.com/downloads',
      version: ['[href$=".exe"]', 'href', /Taskade_Setup_([\d.]+).exe/],
      download: '[href$=".exe"]',
      install: ['install_zipped', 'install_zipped', null, 'install', 'app-64.7z']
    },
    TaskbarTools: {
      site: {
        GitHub: 'https://github.com/Elestriel/TaskbarTools/releases/latest'
      },
      install: 'install'
    },
    TaskbarX: {
      site: {
        GitHub: 'https://github.com/ChrisAnd1998/TaskbarX/releases/latest'
      },
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/ChrisAnd1998/TaskbarX/releases'
          }
        }
      }
    },
    TaskExplorer: {
      site: {
        GitHub: 'https://github.com/DavidXanatos/TaskExplorer/releases/latest'
      },
      install: ['install', null, 'x64']
    },
    'TC Games': {
      commercial: 2,
      url: 'http://www.sigma-rt.com/en/tcgames/version/index.html',
      version: ['.m-header', 'text', /TC Games ([\d.]+) \(([\d.]+)\)/, '$1.$2'],
      download: '[href$=".exe"]',
      install: 'install_nsis'
    },
    'TDM-GCC': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/tdm-gcc/files/TDM-GCC%20Installer/'
      },
      versionChoice: /tdm64-gcc-(.*).exe/
    },
    TeamSpeak: {
      url: 'https://files.teamspeak-services.com/releases/client/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'pre>a',
        sort: true,
        attr: 'text'
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'pre>a',
        sort: true
      }, {
        selector: 'pre>a',
        matchCheck: /win64-(.*?).(exe|zip)/
      }),
      install: 'install_nsis',
      other: {
        server: {
          url: 'https://files.teamspeak-services.com/releases/server/',
          install: 'install'
        },
        'server-pre_releases': {
          url: 'https://files.teamspeak-services.com/pre_releases/server/',
          install: 'install'
        }
      }
    },
    TeamViewer: {
      commercial: 1,
      url: 'https://community.teamviewer.com/t5/Change-Log-Windows/bd-p/Change_Log_Windows',
      version: '.page-link',
      changelog: {
        url: '.page-link',
        selector: '#bodyDisplay ul'
      },
      download: 'https://dl.tvcdn.de/download/TeamViewerPortable.zip',
      install: 'install'
    },
    TeamViz: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Scheduling/Pomodoro-App.shtml'
      },
      install: ['install_msi', null, 'TeamViz.exe']
    },
    Telegram: {
      site: {
        GitHub: 'https://github.com/telegramdesktop/tdesktop/releases/latest'
      },
      install: 'install_zipped_single',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/telegramdesktop/tdesktop/releases'
          }
        }
      }
    },
    'Teleport Ultra': {
      commercial: 3,
      url: 'http://www.tenmax.com/teleport/version.htm',
      version: '.ver',
      changelog: {
        selector: '.bodytable .middle',
        attr: 'text',
        match: /^Version [\d.]+/,
        split: true
      },
      download: 'http://www.tenmax.com/Teleport_Ultra_Installer.exe',
      install: 'install_nsis_cli',
      other: {
        pro: {
          download: 'http://www.tenmax.com/Teleport_Pro_Installer.exe'
        }
      }
    },
    'Temp Cleaner': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/muldersoft/files/Temp%20Cleaner/'
      },
      versionChoice: /\.([\d-]+).zip/,
      install: 'install_zipped_single'
    },
    Temps: {
      site: {
        GitHub: 'https://github.com/jackd248/temps/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    'Tera Term': {
      site: {
        OSDN: 'https://osdn.net/projects/ttssh2/releases/'
      },
      install: 'install'
    },
    Terminals: {
      site: {
        GitHub: 'https://github.com/Terminals-Origin/Terminals/releases/latest'
      },
      install: 'install'
    },
    Terminus: {
      site: {
        GitHub: 'https://github.com/Eugeny/terminus/releases/latest'
      },
      versionChoice: '.exe$',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Termius: {
      commercial: 2,
      url: 'https://termius.com/windows',
      version: '[role="listitem"]>div',
      download: 'https://autoupdate.termius.com/win/Termius.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    'Tern - Subtitle File Translator': {
      site: {
        download: 'https://tern.1c7.me/'
      },
      versionChoice: ['https://c1c7.coding.net/api/share/download/de4476bf-c082-4cf2-a8ee-8f4d2209165e', /_Windows_([\d.]+).zip/],
      download: 'https://c1c7.coding.net/api/share/download/de4476bf-c082-4cf2-a8ee-8f4d2209165e',
      install: 'install'
    },
    Terraform: {
      url: 'https://www.terraform.io/downloads.html',
      version: ['[href$="windows_amd64.zip"]', 'href', /terraform_(.*?)_windows_amd64.zip/],
      download: '[href$="windows_amd64.zip"]',
      install: 'install_zipped_single'
    },
    Teseve: {
      site: {
        GitHub: 'https://github.com/teseve/teseve/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    TestDisk: {
      url: 'https://www.cgsecurity.org/wiki/TestDisk_Download',
      version: (res, $) => $('script[src="/mw/extensions/Download/download.js"]+style+script').eq(0).html().match(/<span class="download-title">TestDisk (.*?)<img /)[1],
      changelog: {
        url: '[href$="Release"][href^="/wiki/TestDisk"]',
        selector: '#mw-content-text'
      },
      download: (res, $) => $('script[src="/mw/extensions/Download/download.js"]+style+script').eq(0).html().match(/<a class="download-link" href="(.*?)">/)[1].replace('/Download_and_donate.php', ''),
      install: 'install'
    },
    TeXmacs: {
      url: 'https://www.texmacs.org/tmweb/download/windows.en.html',
      version: '[href$=".exe"]',
      download: '[href$=".exe"]',
      install: 'install_inno'
    },
    TeXstudio: {
      site: {
        GitHub: 'https://github.com/texstudio-org/texstudio/releases/latest'
      },
      versionChoice: 'win-portable-qt5.zip',
      install: 'install'
    },
    'Text Editor Pro': {
      url: 'https://texteditor.pro/pages/changes.php',
      version: '#custom-content>pre',
      changelog: '#custom-content>pre',
      download: 'http://www.texteditor.pro/downloads/TextEditorPro64.7z',
      install: 'install'
    },
    TextAloud: {
      commercial: 3,
      url: 'https://nextup.com/download.html',
      version: '[href="javascript:linkToID(\'ta4\')"]',
      download: async (res, $, fns, choice) => {
        const uri1 = 'https://nextup.com/php/nextup-urls/fileurl.php?id=ta4';
        const res1 = await fns.req(uri1);
        return res1.body.match(/^"(.*)"$/)[1];
      },
      install: 'install'
    },
    Textosaurus: {
      site: {
        GitHub: 'https://github.com/martinrotter/textosaurus/releases/latest'
      },
      versionChoice: 'win64.7z',
      install: 'install'
    },
    'The Bat': {
      commercial: 3,
      url: 'https://www.ritlabs.com/en/products/thebat/download.php',
      version: '#whatsnew>h5',
      changelog: '#whatsnew',
      download: '[href^="/download/the_bat/thebat_64"][href$=".msi"]',
      install: ['install_msi', null, 'thebat64.exe']
    },
    'The Powder Toy': {
      url: 'https://powdertoy.co.uk/Download/Changelog.html',
      version: '.version>h5',
      changelog: '.changelist',
      download: 'https://powdertoy.co.uk/Download/powder-win32.zip',
      install: 'install_zipped_single'
    },
    'The Silver Searcher': {
      site: {
        GitHub: 'https://github.com/k-takata/the_silver_searcher-win32/releases'
      },
      versionChoice: 'x64.zip',
      install: 'install_zipped_single'
    },
    'The World Browser': {
      url: 'http://www.theworld.cn/',
      version: ['.redown', 'href', /TWInst_(.*?).exe/],
      download: '.redown',
      install: ['install_zipped', 'install'],
      other: {
        6: {
          version: ['.download-tw6', 'href', /TWInst_(.*?).exe/],
          download: '.download-tw6'
        },
        legacy: {
          url: 'http://www.theworld.cn/twen/get.html?lang=en&format=exe',
          version: ['#clickToDownload', 'href', /TheWorld_en_(.*?).exe/],
          download: '#clickToDownload',
          install: 'install_nsis'
        }
      }
    },
    thilmera7: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Info/thilmera7.shtml'
      },
      install: 'install'
    },
    Thonny: {
      site: {
        GitHub: 'https://github.com/thonny/thonny/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno'
    },
    'Thorium Reader': {
      site: {
        GitHub: 'https://github.com/edrlab/thorium-reader/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/edrlab/thorium-reader/releases'
          },
          versionChoice: ['.exe', null, null, 'published_at']
        }
      }
    },
    'Thought Train': {
      commercial: 3,
      site: {
        download: 'https://www.thoughttrain.cc/'
      },
      versionChoice: '.elementor-button-link:contains("Download for Windows")',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    ThunderbirdTray: {
      site: {
        GitHub: 'https://github.com/TheGuardianWolf/ThunderbirdTray/releases/latest'
      },
      versionChoice: 'selfcontained.zip',
      install: 'install'
    },
    TickTick: {
      commercial: 2,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Office-tools/Diary-Organizers-Calendar/TickTick.shtml'
      },
      download: 'https://www.ticktick.com/static/getApp/download?type=win64',
      install: 'install_inno'
    },
    TiefSee: {
      url: 'https://hbl917070.github.io/aeropic/index.html',
      version: '.v_title',
      changelog: '.v_title+ul',
      download: '.a_download[href$=".zip"]',
      install: 'install'
    },
    TightVNC: {
      url: 'https://www.tightvnc.com/download.php',
      version: '.mgnol+h3',
      changelog: {
        url: 'https://www.tightvnc.com/whatsnew.php',
        selector: 'body > table:nth-child(7) > tbody > tr > td:nth-child(2) > table',
        attr: 'text',
        match: /^TightVNC [\d.]+/,
        split: true
      },
      download: '[href$="setup-64bit.msi"]',
      install: ['install_msi', null, 'tvnserver.exe']
    },
    TileBeautify: {
      site: {
        GitHub: 'https://github.com/BluePointLilac/TileBeautify/releases/latest'
      },
      versionChoice: '.7z',
      install: 'install'
    },
    TileTool: {
      site: {
        GitHub: 'https://github.com/XIU2/TileTool/releases/latest'
      },
      install: 'install'
    },
    'Tiny C Compiler': {
      url: 'https://download.savannah.gnu.org/releases/tinycc/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        sort: true,
        match: /tcc-(.*?)-win64-bin.zip/
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        sort: true,
        matchCheck: /tcc-(.*?)-win64-bin.zip/
      }),
      install: 'install'
    },
    tinyMediaManager: {
      url: 'https://release.tinymediamanager.org/download_v3.html',
      version: ['a[href$="win.zip"]', 'href'],
      changelog: ['https://www.tinymediamanager.org/changelog/', '[id^="Version v"]+p'],
      download: 'a[href$="win.zip"]',
      install: 'install',
      other: {
        prerelease: {
          url: 'https://prerelease.tinymediamanager.org/download_v3.html',
          version: {
            selector: 'a[href$="win.zip"] .a-btn-text>small:nth-child(2)',
            match: /Date: (.*)/
          }
        },
        nightly: {
          url: 'https://nightly.tinymediamanager.org/download_v3.html',
          version: {
            selector: 'a[href$="win.zip"] .a-btn-text>small:nth-child(2)',
            match: /Date: (.*)/
          }
        }
      }
    },
    TinyNvidiaUpdateChecker: {
      site: {
        GitHub: 'https://github.com/ElPumpo/TinyNvidiaUpdateChecker/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    TinyPNG: {
      site: {
        GitHub: 'https://github.com/iikira/tinypng/releases/latest'
      },
      versionChoice: 'windows-x64.zip',
      install: 'install_zipped_single'
    },
    TinyTask: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/PORTABLE-SOFTWARE/Multimedia/Video/Portable-TinyTask.shtml'
      },
      install: ['install_zipped_single', 'tinytask.exe']
    },
    TinyWall: {
      url: 'https://tinywall.pados.hu/changelog.txt',
      version: ['body', 'text', /(.*) - Maintenance release/],
      changelog: {
        split: true
      },
      download: 'https://tinywall.pados.hu/ccount/click.php?id=4',
      install: ['install_msi', null, 'TinyWall.exe']
    },
    'tldr-sharp': {
      site: {
        GitHub: 'https://github.com/principis/tldr-sharp/releases/latest'
      },
      versionChoice: 'windows_x64.zip',
      install: 'install'
    },
    tldr: {
      site: {
        GitHub: 'https://github.com/isacikgoz/tldr/releases/latest'
      },
      versionChoice: 'windows_amd64.zip',
      install: 'install_zipped_single'
    },
    Toby: {
      site: {
        GitHub: 'https://github.com/frankhale/toby/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    Tockler: {
      site: {
        GitHub: 'https://github.com/MayGo/tockler/releases/latest'
      },
      versionChoice: /.exe$/,
      install: 'install_nsis'
    },
    ToDoList: {
      url: 'https://abstractspoon.com/',
      version: 'strong',
      download: 'http://abstractspoon.pbwiki.com/f/todolist_exe.zip',
      install: 'install'
    },
    todometer: {
      site: {
        GitHub: 'https://github.com/cassidoo/todometer/releases/latest'
      },
      versionChoice: /windows.zip/i,
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    ToFormat: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/toformat/files/'
      },
      versionChoice: /ToFormat-(.*)-Portable.zip/,
      install: 'install'
    },
    Tomboy: {
      site: {
        GitHub: 'https://github.com/tomboy-notes/tomboy-ng/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno_type'
    },
    'Tongbu Helper': {
      url: 'http://tbconfig.tongbu.com/tbzs/tbzs.ashx?appname=zhushou30&channel=sdxz&x64=1&env=0',
      version: (res, $) => res.json.Data[0].Version,
      download: (res, $) => res.json.Data[0].Url,
      install: 'install_nsis'
    },
    'Topsi Project Manager': {
      site: {
        GitHub: 'https://github.com/Physiix/topsi-project-manager/releases/'
      },
      versionChoice: 'win-x64.zip',
      install: 'install'
    },
    TorBrowser: {
      useProxy: true,
      url: 'https://www.torproject.org/download/',
      version: ['[href*="torbrowser-install-win64"][href$=".exe"]', 'href', /win64-(.*)_/],
      changelog: {
        url: 'https://gitweb.torproject.org/builders/tor-browser-build.git/plain/projects/tor-browser/Bundle-Data/Docs/ChangeLog.txt',
        match: /^Tor Browser [\d.]+/,
        split: true
      },
      download: '[href*="torbrowser-install-win64"][href$=".exe"]',
      install: 'install_nsis_cli',
      // install: ['install_nsis', null, 'Browser\\'],
      other: {
        alpha: {
          url: 'https://www.torproject.org/download/alpha/'
        }
      }
    },
    'Torrent File Editor': {
      site: {
        GitHub: 'https://github.com/torrent-file-editor/torrent-file-editor/releases/latest'
      },
      versionChoice: 'x64.exe',
      install: 'install_single'
    },
    TortoiseGit: {
      url: 'https://tortoisegit.org/download/',
      version: 'h1+p',
      changelog: {
        url: 'https://tortoisegit.org/docs/releasenotes/',
        selector: '.releasenotes',
        attr: 'text',
        match: /^#Release_[\d.]+/,
        split: true
      },
      download: '.dl[href$="64bit.msi"]',
      install: ['install_msi', null, 'bin/TortoiseGitBlame.exe']
    },
    TortoiseSVN: {
      withoutHeader: true,
      url: 'https://tortoisesvn.net/downloads.html',
      version: '.title +div>h1',
      changelog: {
        url: 'https://tortoisesvn.net/Changelog.txt',
        match: /^Version [\d.]+/,
        split: true
      },
      download: 'a[href*="x64"][href$=".msi/"]',
      install: ['install_msi', null, 'bin/TortoiseBlame.exe'],
      other: {
        nightly: {
          url: 'https://nightlybuilds.tortoisesvn.net/latest/x64/full/',
          version: '[href$=".msi"][href^="TortoiseSVN"]',
          download: '[href$=".msi"][href^="TortoiseSVN"]'
        }
      }
    },
    Toshocat: {
      site: {
        GitHub: 'https://github.com/tofuness/Toshocat/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    'Total Commander': {
      commercial: 2,
      url: 'https://www.ghisler.com/download.htm',
      version: ['h3', 'text', /version (.*) of/],
      changelog: {
        url: 'https://www.ghisler.com/history.txt',
        match: /^[\d.]+ Release Total Commander/,
        split: true
      },
      download: 'a[href$="x64.exe"]',
      install: ['install_zipped', 'install', 'INSTALL.CAB']
    },
    'Total Uninstall': {
      commercial: 3,
      url: 'https://www.martau.com/uninstaller-download.php',
      version: '.version',
      changelog: '.version+ul',
      download: 'a[href*="Setup"][href$=".exe"]',
      install: 'install_inno_type'
    },
    'Touchpad Blocker': {
      url: 'https://touchpad-blocker.com',
      version: '#quick dd',
      download: 'https://touchpad-blocker.com/files/touchpad-blocker.exe',
      install: ['install_zipped_single', 'TouchpadBlocker']
    },
    Tower: {
      commercial: 3,
      url: 'https://www.git-tower.com/release-notes/windows',
      version: '[id="releases--windows"] .release__header>h2',
      changelog: '[id="releases--windows"] .release__content',
      download: '[id="releases--windows"] .release__header>.release__download-link>a',
      install: 'install_ai'
    },
    traccar: {
      site: {
        GitHub: 'https://github.com/traccar/traccar/releases/latest'
      },
      versionChoice: 'windows(.*).zip',
      install: ['install_zipped', 'install_inno', '.exe']
    },
    TrafficMonitor: {
      site: {
        GitHub: 'https://github.com/zhongyang219/TrafficMonitor/releases/latest'
      },
      versionChoice: '_x64.7z',
      install: 'install'
    },
    TranslucentTB: {
      site: {
        GitHub: 'https://github.com/TranslucentTB/TranslucentTB/releases/latest'
      },
      versionChoice: 'setup.exe',
      install: 'install_inno'
    },
    Transmate: {
      url: 'http://www.uedrive.com/products/standalone/',
      version: '.download>a>span',
      download: '.download>a',
      install: 'install_inno_cli'
    },
    Transmission: {
      site: {
        GitHub: 'https://github.com/transmission/transmission/releases/latest'
      },
      download: 'https://github.com/transmission/transmission-releases/raw/master/transmission-{version}-x64.msi',
      install: ['install_msi', null, 'transmission-qt.exe']
    },
    TrayIt: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Desktop-Enhancements/Other-Desktop-Enhancements/TrayIt.shtml'
      },
      install: 'install'
    },
    Traymond: {
      site: {
        GitHub: 'https://github.com/fcFn/traymond/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    TrayS: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_820706.html'
      },
      install: ['install', null, '*\\TrayS_x64 CPU']
    },
    'Treehole-OCR': {
      site: {
        GitHub: 'https://github.com/AnyListen/tools-ocr/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno_type'
    },
    TreeNote: {
      site: {
        GitHub: 'https://github.com/TreeNote/TreeNote/releases/latest'
      },
      versionChoice: 'windows.zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/TreeNote/TreeNote/releases'
          }
        }
      }
    },
    TreeSheets: {
      site: {
        'GitHub-actions': 'https://github.com/aardappel/treesheets'
      },
      versionChoice: 'Windows TreeSheets \\(no installer\\)',
      install: 'install'
    },
    'TreeView Player': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/File-managers/Ubiquitous-Player.shtml'
      },
      install: 'install'
    },
    TrendingGithub: {
      site: {
        GitHub: 'https://github.com/andygrunwald/TrendingGithub/releases/latest'
      },
      versionChoice: 'Windows_x86_64.zip',
      install: 'install_zipped_single'
    },
    Trendy: {
      site: {
        GitHub: 'https://github.com/rhysd/Trendy/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    Tresorit: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/File-Sharing/Tresorit.shtml'
      },
      download: 'https://installerstorage.blob.core.windows.net/public/install/Tresorit.exe'
    },
    Tribler: {
      site: {
        GitHub: 'https://github.com/Tribler/tribler/releases/latest'
      },
      versionChoice: 'x64.exe',
      install: 'install_nsis',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/Tribler/tribler/releases'
          }
        }
      }
    },
    Tricycle: {
      site: {
        GitHub: 'https://github.com/kmcclive/tricycle/releases/latest'
      },
      versionChoice: '.msi',
      install: ['install_msi', null, 'Tricycle.exe']
    },
    Trilium: {
      site: {
        GitHub: 'https://github.com/zadam/trilium/releases/latest'
      },
      versionChoice: 'windows-x64-(.*?).zip',
      install: 'install'
    },
    Trillian: {
      commercial: 2,
      url: 'https://www.trillian.im/shared/scripts/news.items.js',
      version: (res, $) => res.body.match(/"windows", (\d+\.\d+), (\d+)/)[0].replace(/"windows", (\d+\.\d+), (\d+)/, '$1.$2'),
      download: 'https://www.trillian.im/get/windows/'
    },
    'trojan-go': {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/p4gefau1t/trojan-go/releases'
      },
      versionChoice: 'windows-amd64.zip',
      install: 'install'
    },
    'Trojan-Qt5': {
      tags: ['proxy'],
      url: 'https://github.com/Trojan-Qt5/Trojan-Qt5/',
      version: () => '1.4.0',
      download: 'https://github.com/kidonng/sushi/releases/download/binaries/Trojan-Qt5-Windows-1.4.0.7z',
      install: 'install'
    },
    trojan: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/trojan-gfw/trojan/releases/latest'
      },
      versionChoice: 'win.zip',
      install: 'install'
    },
    trolCommander: {
      site: {
        GitHub: 'https://github.com/trol73/mucommander/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_nsis'
    },
    'True Launch Bar': {
      commercial: 3,
      url: 'http://www.truelaunchbar.com/download.html',
      version: '.info .ver',
      changelog: ['http://www.truelaunchbar.com/history.html', '.tlbHistoryContent'],
      download: '[href*="portable-64bit"][href$=".zip"]',
      install: 'install'
    },
    TrustViewer: {
      url: 'http://trustviewer.com/en',
      version: '.fa-download',
      download: 'http://trustviewer.com/src/client/TrustViewer.exe',
      install: 'install_single',
      other: {
        server: {
          download: 'http://trustviewer.com/file/TrustServer.exe.7z',
          install: 'install_zipped_single'
        }
      }
    },
    TunnelBear: {
      useProxy: true,
      commercial: 2,
      url: 'https://www.tunnelbear.com/core/getVersionHistory?platform=pc',
      version: (res, $) => res.json[0].version.match(/(\d+[\d.]+\d+)/)[1],
      changelog: async (res, $) => [res.json[0].notes, true],
      download: 'https://tunnelbear.s3.amazonaws.com/downloads/pc/public/TunnelBear-Installer.exe',
      install: ['install_wix', null, 'TunnelBear.Setup.msi', 'TunnelBear.exe']
    },
    TunSafe: {
      tags: ['proxy'],
      useProxy: true,
      url: 'https://tunsafe.com/download',
      version: ['.btn-success[href$=".exe"]>b', 'text', /Download TunSafe (.*?) Installer/],
      changelog: {
        url: 'https://tunsafe.com/downloads/ChangeLog.txt',
        match: /^[\d\s-]+TunSafe v/,
        split: true
      },
      download: '.btn-success[href$=".exe"]',
      install: 'install_nsis_cli',
      other: {
        beta: {
          version: ['.btn-outline-success[href$=".exe"]>b', 'text', /Download TunSafe (.*?) Installer/],
          download: '.btn-outline-success[href$=".exe"]'
        }
      }
    },
    'Turbo Studio': {
      commercial: 3,
      url: 'https://turbo.net/js/enterprise.js',
      version: (res, $) => res.body.match(/window.location = "(.*?\.msi)"/)[1].match(/turbo-studio-(.*?).msi/)[1],
      download: (res, $) => res.body.match(/window.location = "(.*?\.msi)"/)[1],
      install: ['install_msi', null, 'Studio.exe']
    },
    'Turn Off Monitor': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/turnoffmonitor/files/'
      },
      versionChoice: /Turn Off Monitor (.*).zip/,
      install: 'install_zipped_single'
    },
    Turtl: {
      site: {
        GitHub: 'https://github.com/turtl/desktop/releases/latest'
      },
      versionChoice: 'windows64.msi',
      install: ['install_msi', null, 'turtl.exe'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/turtl/desktop/releases'
          }
        }
      }
    },
    Tusk: {
      site: {
        GitHub: 'https://github.com/klaussinani/tusk/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Tutanota: {
      site: {
        GitHub: 'https://github.com/tutao/tutanota/releases/latest'
      },
      versionChoice: {
        filter: i => !i.prerelease,
        match: 'tutanota-release-(.*)'
      },
      download: 'https://mail.tutanota.com/desktop/tutanota-desktop-win.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    'Tux Paint': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/tuxpaint/files/tuxpaint/'
      },
      versionChoice: /(.*)/,
      downloadChoice: [null, 'win32.zip'],
      install: 'install',
      other: {
        stamps: {
          site: {
            SourceForge: 'https://sourceforge.net/projects/tuxpaint/files/tuxpaint-stamps/'
          },
          downloadChoice: [null, '.zip']
        }
      }
    },
    TVDownloader: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Download-Managers/TVDownloader.shtml'
      }
    },
    'Twinkle Tray': {
      site: {
        GitHub: 'https://github.com/xanderfrangos/twinkle-tray/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Twitch: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Chat/Other-Chat-Tools/Twitch-Desktop-App.shtml'
      },
      download: 'https://updates.twitchapp.net/windows/installer/TwitchSetup.exe'
    },
    txtFormat: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_56899.html'
      },
      install: 'install'
    },
    Typora: {
      url: 'https://typora.io/windows/dev_release.html',
      version: 'h4',
      changelog: {
        selector: 'body',
        attr: 'text',
        match: /^[\d.]{3,}/,
        split: true
      },
      download: 'https://typora.io/windows/typora-setup-x64.exe',
      install: 'install_inno_type'
    }
  }
};
