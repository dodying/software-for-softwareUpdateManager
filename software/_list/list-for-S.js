'use strict';
let info;

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    Sabaki: {
      site: {
        GitHub: 'https://github.com/SabakiHQ/Sabaki/releases/latest'
      },
      versionChoice: 'win-x64-setup.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    SABnzbd: {
      site: {
        GitHub: 'https://github.com/sabnzbd/sabnzbd/releases/latest'
      },
      versionChoice: 'win64-bin.zip',
      install: 'install'
    },
    SafeInCloud: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Password-Managers-Generators/Safe-In-Cloud.shtml'
      },
      download: 'https://www.safe-in-cloud.com/download/SafeInCloud_Portable.zip',
      install: 'install'
    },
    SageThumbs: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/sagethumbs/files/'
      },
      versionChoice: /sagethumbs_(.*)_setup.exe/,
      install: 'install_nsis'
    },
    'saladict-desktop': {
      site: {
        GitHub: 'https://github.com/zenghongtu/saladict-desktop/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Saladin: {
      site: {
        GitHub: 'https://github.com/mimecorg/saladin/releases/latest'
      },
      versionChoice: 'win_x64.exe',
      install: 'install_nsis'
    },
    Sandboxie: {
      site: {
        GitHub: 'https://github.com/sandboxie-plus/Sandboxie/releases/latest'
      },
      versionChoice: ['SandboxieInstall64-v(.*).exe', /\/ ([\d.]+)/, false, 'name'],
      install: ['install_cli', null, ['/lang=2052', '/install', '/S', '/D={dir}'], { wait: true, shell: true }],
      other: {
        plus: {
          versionChoice: 'Sandboxie-Plus-x64-v(.*?).exe',
          install: null
        }
      }
    },
    SandBurst: {
      url: 'https://grevival.net/api/sandburst/version.php',
      version: (res) => res.json.version,
      changelog: (res) => res.json.comment,
      download: (res) => res.json.url,
      install: 'install'
    },
    Sandman: {
      site: {
        GitHub: 'https://github.com/alexanderepstein/Sandman/releases/latest'
      },
      versionChoice: '64.Bit.Windows.zip',
      install: 'install'
    },
    'SAO Utils': {
      url: 'http://sao.gpbeta.com/',
      version: ['#section_log+div+h3', 'text', /\(([\d.]+)\)/],
      changelog: '#section_log+div+h3+ol',
      download: '[aria-labelledby="downloadMenu"] a[href$=".exe"]',
      install: 'install_inno_type',
      other: {
        exp: {
          url: 'http://sao.gpbeta.com/exp/',
          install: null
        }
      }
    },
    Scala: {
      site: {
        GitHub: 'https://github.com/scala/scala/releases/latest'
      },
      versionChoice: i => !i.prerelease,
      download: 'https://downloads.lightbend.com/scala/{version}/scala-{version}.msi',
      install: ['install_msi', null, 'bin/scala.bat']
    },
    'ScanTailor Advanced': {
      site: {
        GitHub: 'https://github.com/4lex4/scantailor-advanced/releases'
      },
      versionChoice: 'win64.exe',
      install: 'install_nsis'
    },
    'SCI Translate': {
      url: 'http://www.scitranslate.com/',
      version: ['.side-title', 'text', /(\d+)/],
      download: '.btn-download',
      install: 'install'
    },
    'SciHub Desktop': {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_678092.html'
      },
      install: 'install_zipped_single'
    },
    SciHubEVA: {
      site: {
        GitHub: 'https://github.com/leovan/SciHubEVA/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno_type'
    },
    SciTE4AutoHotkey: {
      url: 'http://fincs.ahk4.net/scite4ahk/',
      version: 'a[href="changelog.htm"]>strong',
      download: 'http://fincs.ahk4.net/scite4ahk/dl/s4ahk-portable.zip',
      install: ['install', null, 'SciTE']
    },
    ScpToolkit: {
      site: {
        GitHub: 'https://github.com/nefarius/ScpToolkit/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_ai_msi', null, 'ScpToolkit_Setup.x64.msi', 'ScpSettings.exe'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/nefarius/ScpToolkit/releases'
          }
        }
      }
    },
    'Scrcpy-GUI': {
      site: {
        GitHub: 'https://github.com/Tomotoes/scrcpy-gui/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    scrcpy: {
      site: {
        GitHub: 'https://github.com/Genymobile/scrcpy/releases/latest'
      },
      versionChoice: 'win64(.*).zip',
      install: 'install'
    },
    Screenpresso: {
      commercial: 2,
      url: 'https://www.screenpresso.com/download/',
      version: '.release>h1',
      changelog: {
        url: '[href^="/releases/"]',
        selector: '.main>div>h4+div'
      },
      download: 'https://cdn.screenpresso.com/binaries/v1/Screenpresso.exe',
      install: 'install_single',
      other: {
        Enterprise: {
          download: 'https://www.screenpresso.com/binaries/v1/ScreenpressoSetup.msi',
          install: ['install_msi', null, 'Screenpresso.exe']
        }
      }
    },
    ScreenToGif: {
      site: {
        GitHub: 'https://github.com/NickeManarin/ScreenToGif/releases/latest'
      },
      versionChoice: 'Portable.zip',
      install: 'install_zipped_single'
    },
    Scylla: {
      site: {
        GitHub: 'https://github.com/NtQuery/Scylla/releases/latest'
      },
      versionChoice: '.rar',
      install: 'install'
    },
    'SDelete-Gui': {
      site: {
        GitHub: 'https://github.com/Tulpep/SDelete-Gui/releases/latest'
      },
      versionChoice: 'SDelete-Gui.exe',
      install: 'install_single'
    },
    Searchmonkey: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/searchmonkey/files/jSearchmonkey%20JAVA/'
      },
      downloadChoice: [null, 'with-dependencies.jar'],
      install: 'install_single'
    },
    Seer: {
      commercial: 2,
      url: 'http://www.1218.io/seer/release-note.html',
      version: 'h3',
      changelog: 'ul',
      download: 'http://www.1218.io/seer/dl',
      install: 'install_nsis'
    },
    SeleniumBasic: {
      site: {
        GitHub: 'https://github.com/florentbr/SeleniumBasic/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno'
    },
    ServicesSuite: {
      url: 'https://royalfool.de/ServicesSuite.html',
      version: 'h2',
      download: '#sp2 a[href$=".rar"]',
      install: 'install'
    },
    Serviio: {
      commercial: 2,
      url: 'https://www.serviio.org/download',
      version: '[href$="win-setup.exe"]',
      changelog: {
        url: '[href^="/download/"][href*="release-notes"]',
        selector: '.item-page'
      },
      download: '[href$="win-setup.exe"]',
      install: 'install_nsis'
    },
    SETUNA2: {
      site: {
        GitHub: 'https://github.com/tylearymf/SETUNA2/releases/latest'
      },
      versionChoice: 'x64.7z',
      install: 'install_zipped_single'
    },
    SFCFix: {
      url: 'https://www.sysnative.com/forums/downloads/sfcfix/',
      version: '[download][href$=".exe"]',
      download: 'https://www.sysnative.com/niemiro/apps/SFCFix.exe',
      install: 'install_single'
    },
    'SFX Tool': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/muldersoft/files/SFX%20Tool/'
      },
      versionChoice: /\.([\d-]+).exe/,
      install: 'install_nsis'
    },
    'shadowsocks-magic': {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/ihciah/go-shadowsocks-magic/releases/latest'
      },
      versionChoice: 'win64.zip',
      install: 'install_zipped_single'
    },
    'shadowsocks-qt5': {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/shadowsocks/shadowsocks-qt5/releases/latest'
      },
      versionChoice: /win64.7z$/,
      install: 'install'
    },
    'shadowsocks-rust': {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/shadowsocks/shadowsocks-rust/releases/latest'
      },
      versionChoice: '.x86_64-pc-windows-msvc.zip$',
      install: 'install'
    },
    shadowsocks: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/shadowsocks/shadowsocks-windows/releases/latest'
      },
      install: 'install_zipped_single',
      other: {
        beta: {
          tags: ['proxy'],
          site: {
            GitHub: 'https://github.com/shadowsocks/shadowsocks-windows/releases'
          }
        }
      }
    },
    ShadowsocksD: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/TheCGDF/SSD-Windows/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    'shadowsocksr-csharp': {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/shadowsocksrr/shadowsocksr-csharp/releases/latest'
      },
      install: ['install', 'templates'],
      other: {
        beta: {
          tags: ['proxy'],
          site: {
            GitHub: 'https://github.com/shadowsocksrr/shadowsocksr-csharp/releases'
          }
        }
      }
    },
    'shadowsocksr-electron': {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/shadowsocksrr/electron-ssr/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-32.7z'],
      other: {
        beta: {
          tags: ['proxy'],
          site: {
            GitHub: 'https://github.com/shadowsocksrr/electron-ssr/releases'
          }
        }
      }
    },
    'shadowsocksr-native': {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/ShadowsocksR-Live/shadowsocksr-native/releases/latest'
      },
      versionChoice: 'ssr-native-windows-x64.zip',
      install: 'install'
    },
    shadowtunnel: {
      site: {
        GitHub: 'https://github.com/snail007/shadowtunnel/releases/latest'
      },
      versionChoice: 'shadowtunnel-windows-amd64.tar.gz',
      install: ['install_zipped', 'install']
    },
    ShanaEncoder: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/shanaencoder/files/'
      },
      versionChoice: /ShanaEncoder(.*).exe/,
      install: 'install_nsis'
    },
    Shapeshifter: {
      site: {
        GitHub: 'https://github.com/ffMathy/Shapeshifter/releases/latest'
      },
      versionChoice: '.exe',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/ffMathy/Shapeshifter/releases'
          }
        }
      }
    },
    Shareaza: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/shareaza/files/Shareaza/'
      },
      downloadChoice: [null, 'x64.exe'],
      install: 'install_inno_type'
    },
    ShareX: {
      site: {
        GitHub: 'https://github.com/ShareX/ShareX/releases/latest'
      },
      install: 'install'
    },
    SharpKeys: {
      site: {
        GitHub: 'https://github.com/randyrants/sharpkeys/releases/latest'
      },
      install: 'install_zipped_single'
    },
    shellz: {
      site: {
        GitHub: 'https://github.com/evilsocket/shellz/releases/latest'
      },
      versionChoice: 'windows_amd64.zip',
      install: 'install_zipped_single'
    },
    Shiba: {
      site: {
        GitHub: 'https://github.com/rhysd/Shiba/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    Shiori: {
      site: {
        GitHub: 'https://github.com/go-shiori/shiori/releases/latest'
      },
      versionChoice: 'windows-amd64.exe',
      install: 'install_single'
    },
    Shoes: {
      url: 'http://shoesrb.com/downloads/',
      version: '[href$=".exe"]',
      download: '[href$=".exe"]',
      install: 'install_nsis'
    },
    Shotcut: {
      site: {
        GitHub: 'https://github.com/mltframework/shotcut/releases/latest'
      },
      versionChoice: 'win64(.*).exe',
      install: 'install_nsis',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/mltframework/shotcut/releases'
          }
        }
      }
    },
    ShowDesktopPerMonitor: {
      site: {
        GitHub: 'https://github.com/CryptKat/ShowDesktopPerMonitor/releases/latest'
      },
      install: 'install'
    },
    ShowKeyPlus: {
      site: {
        GitHub: 'https://github.com/Superfly-Inc/ShowKeyPlus/releases/latest'
      },
      versionChoice: ['.zip$', /([\d.]+)/, false, 'name'],
      install: ['install_zipped', 'install_zipped_single', 'ShowKeyPlus_x64.zip'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/Superfly-Inc/ShowKeyPlus/releases'
          },
          versionChoice: ['.zip$', null, null, 'published_at']
        }
      }
    },
    ShukuSen: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_60001.html'
      },
      install: 'install_zipped_single'
    },
    'Shutter Encoder': {
      url: 'http://www.shutterencoder.com/en/',
      version: ['[href$=".exe"]', 'href', /\(PC Version (.*?)\)/],
      changelog: {
        url: 'http://www.shutterencoder.com/changelog.txt',
        match: /^Version [\d.]+/,
        split: true
      },
      download: '[href$=".exe"]',
      install: 'install_inno'
    },
    Shuttle: {
      site: {
        GitHub: 'https://github.com/sipt/shuttle/releases/latest'
      },
      versionChoice: 'windows_amd64(.*).zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/sipt/shuttle/releases'
          }
        }
      }
    },
    'Sidebar Diagnostics': {
      site: {
        GitHub: 'https://github.com/ArcadeRenegade/SidebarDiagnostics/releases/latest'
      },
      versionChoice: 'Standalone.zip',
      install: 'install'
    },
    Signal: {
      url: 'https://updates.signal.org/desktop/latest.yml?bar=ndtelr',
      version: (res, $) => res.body.match(/version: ([\d.]+)/)[1],
      download: (res, $) => 'https://updates.signal.org/desktop/' + res.body.match(/path: (.*)/)[1],
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Signpost: {
      site: {
        GitHub: 'https://github.com/Sneezry/Signpost/releases/latest'
      },
      versionChoice: 'setup.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    'Simple DNS Plus': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Servers/Other-Servers/Simple-DNS-Plus.shtml'
      }
    },
    'Simple SpreadSheet': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/sss/files/SSS/'
      },
      versionChoice: /SSS V(.*?) for Windows/,
      downloadChoice: [null, '.exe'],
      install: 'install_inno'
    },
    'Simple Sticky Notes': {
      url: 'https://www.simplestickynotes.com/simple-sticky-notes-version-history/',
      version: 'strong',
      changelog: 'strong+ul',
      download: 'https://www.simplestickynotes.com/setup/Setup_SimpleStickyNotes.exe',
      install: 'install_inno'
    },
    SimpleNote: {
      site: {
        GitHub: 'https://github.com/Automattic/simplenote-electron/releases/latest'
      },
      versionChoice: 'win(.*).exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/Automattic/simplenote-electron/releases'
          }
        }
      }
    },
    SimpleTorrent: {
      site: {
        GitHub: 'https://github.com/boypt/simple-torrent/releases/latest'
      },
      versionChoice: 'windows_amd64.exe.gz',
      install: 'install_zipped_single'
    },
    Siphonink: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_105138.html'
      },
      install: ['install', null, 'Siphonink*']
    },
    'Sismics Reader': {
      site: {
        GitHub: 'https://github.com/sismics/reader/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_nsis'
    },
    Sizer: {
      url: 'http://www.brianapps.net/sizer4/',
      version: 'a[href$=".zip"]',
      download: 'a[href$=".zip"]',
      install: 'install'
    },
    Slack: {
      commercial: 2,
      url: 'https://slack.com/intl/en-cn/release-notes/windows',
      version: 'article>h2',
      changelog: 'article',
      download: 'https://downloads.slack-edge.com/releases_x64/SlackSetup.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    SlickRun: {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/slickrun,1.html'
      },
      install: 'install_nsis'
    },
    Slimjet: {
      url: 'https://www.slimjet.com/en/whatisnew.php',
      version: 'h2+h3',
      changelog: 'h2+h3+ul',
      download: 'https://www.slimjetbrowser.com/release/sjt7z_x64.exe',
      install: 'install'
    },
    'Small Device C Compiler': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/sdcc/files/sdcc-win64/'
      },
      versionChoice: [null, 'sdcc-(.*?)-x64-setup.exe'],
      install: 'install_nsis',
      other: {
        'i586-mingw32msvc': {
          site: {
            SourceForge: 'https://sourceforge.net/projects/sdcc/files/snapshot_builds/i586-mingw32msvc-setup/'
          },
          versionChoice: 'sdcc-(.*?)-setup.exe'
        },
        'x86_64-w64-mingw32': {
          site: {
            SourceForge: 'https://sourceforge.net/projects/sdcc/files/snapshot_builds/x86_64-w64-mingw32-setup/'
          },
          versionChoice: 'sdcc-(.*?)-x64-setup.exe'
        }
      }
    },
    Smallpdf: {
      commercial: 3,
      url: 'https://download.smallpdf.com/desktop/win32/RELEASES',
      version: (res, $) => res.body.match(/Smallpdf-(.*?)-full.nupkg/),
      download: 'https://download.smallpdf.com/desktop/win/Smallpdf-{version}-full.nupkg',
      install: ['install', null, 'lib\\net*']
    },
    SmartFix: {
      url: 'https://smartfix.pro/Version.txt',
      version: (res) => res.body,
      download: 'https://smartfix.pro/SmartFix.exe',
      install: 'install_single'
    },
    SmartGit: {
      commercial: 1,
      url: 'https://www.syntevo.com/smartgit/download/',
      version: '.formatted-content',
      changelog: {
        url: 'https://www.syntevo.com/smartgit/changelog.txt',
        match: /^SmartGit [\d.]+/,
        split: true
      },
      download: 'a[href*="portable"][href$=".7z"]',
      install: 'install',
      afterInstall: info => {
        const path = require('path');
        const fs = require('fs');

        const setting = path.resolve(info.parentPath, '.settings', 'settings.xml');
        if (fs.existsSync(setting)) fs.unlinkSync(setting);
      },
      other: {
        preview: {
          url: 'https://www.syntevo.com/smartgit/preview/',
          version: ['.headline--lvl-2', 'text', /Download SmartGit (.*)/],
          changelog: {
            url: 'https://www.syntevo.com/smartgit/changelog-eap.txt',
            match: /^SmartGit [\d.]+/,
            split: true
          }
        }
      }
    },
    SmartPing: {
      site: {
        GitHub: 'https://github.com/smartping/smartping/releases/latest'
      },
      install: 'install'
    },
    SmartPropoPlus: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/smartpropoplus/files/smartpropoplus/'
      },
      versionChoice: /SPP-(.*)/,
      downloadChoice: [/SPP-(.*)/, 'SppSetup.exe'],
      install: 'install_inno_type'
    },
    SmartSteamEmu: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_760270.html'
      },
      install: ['install', null, 'SmartSteamEmu*\\']
    },
    SmartSystemMenu: {
      site: {
        GitHub: 'https://github.com/AlexanderPro/SmartSystemMenu/releases/latest'
      },
      install: 'install'
    },
    SmartTaskbar: {
      site: {
        GitHub: 'https://github.com/ChanpleCai/SmartTaskbar/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_inno_single', '.exe']
    },
    'Smarty Uninstaller': {
      commercial: 3,
      url: 'https://www.smartuninstall.com/download_uninstaller.html',
      version: '.span12:contains("Version History")>h5',
      changelog: {
        selector: '.span12:contains("Version History")',
        attr: 'text',
        match: /^v[\d.]+/,
        split: true
      },
      download: '[href^="download.php"]',
      install: 'install_inno'
    },
    'SMath Studio': {
      url: 'https://en.smath.com/view/SMathStudio/history',
      version: '.stable>h3>b',
      changelog: {
        selector: '.reviews',
        attr: 'text',
        match: /^Version: [\d.]+/,
        split: true
      },
      download: '.stable [href$=".msi"]',
      install: ['install_zipped', 'install'],
      other: {
        beta: {
          version: '.beta>h3>b',
          download: '.beta [href$=".msi"]'
        }
      }
    },
    SMPlayer: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/smplayer/files/SMPlayer/'
      },
      downloadChoice: [null, '.7z'],
      install: 'install',
      other: {
        beta: {
          site: {
            SourceForge: 'https://sourceforge.net/projects/smplayer/files/SMPlayer/Development-builds/'
          },
          versionChoice: /smplayer-(.*)-x64.exe/,
          downloadChoice: /smplayer-(.*)-x64.exe/,
          install: 'install_nsis'
        }
      }
    },
    'SmVDC++': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/smvdc/files/'
      },
      versionChoice: /SmVDC\+\+ ([\d.]+)/,
      downloadChoice: [/SmVDC\+\+ ([\d.]+)/, 'Setup.x64.exe'],
      install: 'install_nsis'
    },
    'Snappy Driver Installer Lite': {
      url: 'https://sdi-tool.org/download/',
      version: '#list1 > tbody > tr:nth-child(2) > td:nth-child(3)',
      download: '#list1 > tbody > tr.legend > td.download_button_container > a',
      install: 'install'
    },
    SnapTimer: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Desktop-Enhancements/Clocks-Time-Management/SnapTimer.shtml'
      },
      download: 'https://cdn.hersam.com/software/snaptimer/SnapTimer.zip',
      install: 'install_zipped_single'
    },
    Snipaste: {
      site: {
        download: 'https://www.snipaste.com/download.html'
      },
      versionChoice: 'https://dl.snipaste.com/win-x64',
      changelog: 'h3+br+h4+ul',
      install: 'install',
      other: {
        beta: {
          versionChoice: 'https://dl.snipaste.com/win-x64-beta'
        }
      }
    },
    SnipCommand: {
      site: {
        GitHub: 'https://github.com/gurayyarar/SnipCommand/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    SnippetStore: {
      site: {
        GitHub: 'https://github.com/ZeroX-DG/SnippetStore/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    SocksCap64: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/SocksCap64.shtml'
      },
      install: ['install_zipped', 'install_nsis']
    },
    SodaPlayer: {
      url: 'https://www.sodaplayer.com/',
      version: '.download[href="/win/download"]',
      download: 'https://www.sodaplayer.com/win/download',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    SoftEtherVPN: {
      site: {
        GitHub: 'https://github.com/SoftEtherVPN/SoftEtherVPN_Stable/releases/latest'
      },
      versionChoice: /softether-vpnclient.*\.exe$/
    },
    'Software Ideas Modeler': {
      commercial: 3,
      url: 'https://www.softwareideas.net/Download/845/',
      version: '.info>.display-field',
      download: '.download-link',
      install: 'install',
      other: {
        viewer: {
          url: 'https://www.softwareideas.net/Download/850/'
        }
      }
    },
    'Software Informer': {
      url: 'https://software-informer.informer.com/',
      version: (res, $) => JSON.parse($('[type="application/ld+json"]').eq(1).html()).softwareVersion,
      download: 'https://files.informer.com/siinst.exe',
      install: 'install_inno_type'
    },
    SoLoud: {
      url: 'https://sol.gfxile.net/soloud/downloads.html',
      version: 'a[href$=".zip"]',
      changelog: '#release-history~ul',
      download: 'a[href$=".zip"]',
      install: 'install'
    },
    'soundnode-app': {
      site: {
        GitHub: 'https://github.com/Soundnode/soundnode-app/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/Soundnode/soundnode-app/releases'
          }
        }
      }
    },
    SoundSwitch: {
      site: {
        GitHub: 'https://github.com/Belphemur/SoundSwitch/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno'
    },
    Sourcetrail: {
      site: {
        GitHub: 'https://github.com/CoatiSoftware/Sourcetrail/releases/latest'
      },
      versionChoice: 'Windows_64bit_Portable.zip',
      install: ['install', null, 'Sourcetrail*\\Sourcetrail*\\'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/CoatiSoftware/Sourcetrail/releases'
          }
        }
      }
    },
    SourceTree: {
      url: 'https://www.sourcetreeapp.com/',
      version: ['a[href$=".exe"]', 'href'],
      changelog: ['https://product-downloads.atlassian.com/software/sourcetree/windows/ga/ReleaseNotes_{version}.html', 'ul'],
      download: 'a[href$=".exe"]',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    SoX: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/muldersoft/files/SoX%20%28Unicode%29/'
      },
      versionChoice: /SoX-([\d.]+)-Unicode/,
      install: 'install'
    },
    spacedesk: {
      url: 'https://spacedesk.net/',
      version: '[href="/downloadidd64"]',
      download: 'https://spacedesk.net/downloadidd64',
      install: 'install_msi_cli',
      other: {
        win7: {
          version: ['[href="/downloadlegacy64"]', 'text', /version: ([\d.]+)/],
          download: 'https://spacedesk.net/downloadlegacy64'
        }
      }
    },
    SpaceRadar: {
      site: {
        GitHub: 'https://github.com/zz85/space-radar/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    SpaceSniffer: {
      url: 'http://www.uderzo.it/main_products/space_sniffer/download_alt.html',
      version: 'body > div > table:nth-child(8) > tbody > tr > td:nth-child(1) > a',
      download: 'body > div > table:nth-child(8) > tbody > tr > td:nth-child(1) > a',
      install: 'install_zipped_single'
    },
    SparkleShare: {
      site: {
        BitBucket: 'https://api.bitbucket.org/2.0/repositories/hbons/sparkleshare/downloads'
      },
      versionChoice: /sparkleshare-windows-(.*?).msi/,
      install: ['install_msi', null, 'SparkleShare.exe']
    },
    SparkReader: {
      site: {
        GitHub: 'https://github.com/matoung/SparkReader/releases/latest'
      },
      install: ['install_zipped', 'install_zipped', null, 'install', 'app-64.7z']
    },
    SpeedCrunch: {
      url: 'https://speedcrunch.org/download.html',
      version: 'h1',
      download: '.dl-button[href$="win32.exe"]',
      install: 'install_nsis'
    },
    Spek: {
      site: {
        GitHub: 'https://github.com/alexkay/spek/releases/latest'
      },
      versionChoice: /.msi$/,
      install: ['install_msi', null, 'bin/spek.exe']
    },
    SPlayerX: {
      tags: ['open-source'],
      site: {
        GitHub: 'https://github.com/chiflix/splayerx/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/chiflix/splayerx/releases/'
          }
        }
      }
    },
    Spotify: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Multimedia/Audio/Audio-Players/Spotify.shtml'
      },
      download: 'https://download.scdn.co/SpotifyFullSetup.exe',
      fixedPath: '%appdata%\\Spotify\\Spotify.exe',
      install: ['install_cli', null, [], { wait: true }]
    },
    'Spreaker Studio': {
      commercial: 2,
      site: {
        download: 'https://www.spreaker.com/download'
      },
      versionChoice: 'https://www.spreaker.com/desktop-studio/download',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    Sqlectron: {
      site: {
        GitHub: 'https://github.com/sqlectron/sqlectron-gui/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    SQLite: {
      url: 'https://sqlite.org/download.html',
      version: 'td:has(#a9)+td+td',
      changelog: ['https://sqlite.org/changes.html', '.lessindent'],
      download: (res, $) => res.body.match(/'a9','(.*?)'/)[1],
      install: ['install_zipped_single', 'sqlite3.exe']
    },
    SQLiteStudio: {
      site: {
        GitHub: 'https://github.com/pawelsalawa/sqlitestudio/releases/latest'
      },
      install: 'install'
    },
    SQLyog: {
      url: 'https://github.com/webyog/sqlyog-community/wiki/Downloads',
      version: '.markdown-body>h2',
      download: '.markdown-body>h2+p>a[href$="x64Community.exe"]',
      install: 'install_nsis'
    },
    Squalr: {
      site: {
        GitHub: 'https://github.com/Squalr/Squalr/releases/latest'
      },
      versionChoice: '.msi',
      install: ['install_msi_single', 'Squalr.exe']
    },
    Squid: {
      url: 'http://squid.diladele.com/',
      version: ['a[href$=".msi"]', 'href'],
      download: 'a[href$=".msi"]',
      install: ['install_msi', null, 'bin/squid.exe']
    },
    'SRWare Iron': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Browsers/SRWare-Iron.shtml'
      },
      download: 'https://www.srware.net/downloads/srware_iron64.exe',
      install: 'install_inno_type'
    },
    SSDD: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/muldersoft/files/SSDD/'
      },
      versionChoice: /\.([\d-]+).zip/,
      install: 'install_zipped_single'
    },
    'sshfs-win': {
      site: {
        GitHub: 'https://github.com/billziss-gh/sshfs-win/releases/latest'
      },
      versionChoice: '-x64.msi',
      install: ['install_msi', null, 'bin/sshfs.exe'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/billziss-gh/sshfs-win/releases'
          }
        }
      }
    },
    'SSTap-Rule': {
      site: {
        GitHub: 'https://github.com/FQrabbit/SSTap-Rule/releases/latest'
      },
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/FQrabbit/SSTap-Rule/releases'
          }
        }
      }
    },
    SSTap: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Secure-Browsing-VPN/SSTap.shtml'
      },
      install: 'install_nsis'
    },
    StandardNotes: {
      site: {
        GitHub: 'https://github.com/standardnotes/desktop/releases/latest'
      },
      versionChoice: '.exe$',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/standardnotes/desktop/releases'
          }
        }
      }
    },
    StartIsBack: {
      commercial: 3,
      url: 'https://www.startisback.com',
      version: '[href="StartIsBack_setup.exe"]',
      changelog: '.history',
      download: 'https://s3.amazonaws.com/startisback/StartIsBackPlusPlus_setup.exe',
      install: 'install',
      other: {
        Plus: {
          version: '[href="StartIsBackPlus_setup.exe"]',
          download: 'https://s3.amazonaws.com/startisback/StartIsBackPlus_setup.exe'
        },
        PlusPlus: {
          version: '[href^="StartIsBackPlusPlus"][href$=".exe"]',
          download: '[href^="StartIsBackPlusPlus"][href$=".exe"]'
        }
      }
    },
    StartReader: {
      url: 'https://www.startreader.com/downloads.html',
      version: async (res, $, fns, choice) => {
        const res1 = await fns.req({
          uri: 'https://www.startreader.com/app/getByTerminal',
          method: 'POST',
          form: {
            terminal: 'WINDOWS'
          }
        });
        info = res1.json.data[0];
        return info.version;
      },
      changelog: (res, $) => [info.versionDesc, true],
      download: (res, $) => `http://res.sdkreader.com/${info.md5FileName}`,
      install: 'install_inno_type'
    },
    Station: {
      site: {
        GitHub: 'https://github.com/getstation/desktop-app-releases/releases/latest'
      },
      versionChoice: 'full.nupkg',
      install: ['install', null, 'lib\\net*']
    },
    Statping: {
      site: {
        GitHub: 'https://github.com/statping/statping/releases/latest'
      },
      versionChoice: 'windows-amd64.zip',
      install: 'install_zipped_single'
    },
    StatusPilatus: {
      site: {
        GitHub: 'https://github.com/PilatusDevs/StatusPilatus/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    StaxRip: {
      site: {
        GitHub: 'https://github.com/Revan654/staxrip/releases/latest'
      },
      versionChoice: '.rar',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/Revan654/staxrip/releases'
          }
        }
      }
    },
    'Steam Cleaner': {
      site: {
        GitHub: 'https://github.com/Codeusa/SteamCleaner/releases/latest'
      },
      versionChoice: 'SteamCleaner.exe',
      install: 'install_single'
    },
    'Steam Desktop Authenticator': {
      site: {
        GitHub: 'https://github.com/Jessecar96/SteamDesktopAuthenticator/releases/latest'
      },
      install: 'install'
    },
    'Steam Library Manager': {
      site: {
        GitHub: 'https://github.com/RevoLand/Steam-Library-Manager/releases/latest'
      },
      install: 'install_zipped_single'
    },
    SteamAchievementManager: {
      site: {
        GitHub: 'https://github.com/gibbed/SteamAchievementManager/releases/latest'
      },
      install: 'install'
    },
    SteamShutdown: {
      site: {
        GitHub: 'https://github.com/akorb/SteamShutdown/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    Stellarium: {
      site: {
        GitHub: 'https://github.com/Stellarium/stellarium/releases/latest'
      },
      versionChoice: 'win64.exe',
      install: 'install_inno'
    },
    StikyNotes: {
      site: {
        GitHub: 'https://github.com/li-zheng-hao/StikyNotes/releases/latest'
      },
      install: 'install'
    },
    'StoryView SE': {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_90652.html'
      },
      install: ['install', null, 'StoryView*']
    },
    'Strawberry Perl': {
      url: 'http://strawberryperl.com/releases.html',
      version: '.file>tbody>tr:nth-child(2)>td',
      changelog: {
        url: '[href^="http://strawberryperl.com/release-notes"]',
        selector: '#whatsnew>ul'
      },
      download: '.file>tbody>tr:nth-child(2)>td:nth-child(4)>a[href$="64bit-portable.zip"]',
      install: 'install'
    },
    streama: {
      site: {
        GitHub: 'https://github.com/streamaserver/streama/releases/latest'
      },
      versionChoice: '.jar',
      install: 'install_single'
    },
    Streamlink: {
      site: {
        GitHub: 'https://github.com/streamlink/streamlink/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_nsis'
    },
    Stremio: {
      commercial: 1,
      url: 'https://www.stremio.com/downloads',
      version: '#dl-win-four',
      download: 'https://www.strem.io/download?platform=windows&four=true',
      install: 'install_nsis'
    },
    stretchly: {
      site: {
        GitHub: 'https://github.com/hovancik/stretchly/releases/latest'
      },
      versionChoice: /stretchly-([\d.]+)-win.7z/,
      install: 'install'
    },
    Stroke: {
      site: {
        GitHub: 'https://github.com/poerin/Stroke/releases/latest'
      },
      install: 'install'
    },
    StrokeIt: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Tweak/System-Tweak/StrokeIt-a.shtml'
      },
      install: 'install_nsis'
    },
    'StrokesPlus.net': {
      url: 'https://www.strokesplus.net/Downloads',
      version: 'h4>b',
      changelog: {
        url: 'https://www.strokesplus.net/ChangeLog.txt',
        split: true
      },
      download: 'https://www.strokesplus.net/download/latest/portable',
      install: ['install', 'StrokesPlus.net.bin']
    },
    'StrongDC++': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/strongdc/files/StrongDC%2B%2B/'
      },
      downloadChoice: [null, '64.7z'],
      install: 'install'
    },
    'Sublime Text': {
      commercial: 2,
      url: 'http://www.sublimetext.com/3',
      version: '.current>h3',
      changelog: '#changelog>.current',
      download: 'a[href$="x64.zip"]',
      install: 'install'
    },
    'Subtitle-Workshop': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/subtitle-workshop-classic/files/'
      },
      downloadChoice: [/v(.*)/, 'bin', 'Portable.zip'],
      install: 'install'
    },
    'Subtitles-View': {
      site: {
        GitHub: 'https://github.com/fordes123/Subtitles-View/releases/latest'
      },
      versionChoice: '.7z',
      install: 'install'
    },
    SumatraPDF: {
      url: 'https://www.sumatrapdfreader.org/sumatra.js',
      version: (res, $) => res.body.match(/gSumVer = "(.*)"/)[1],
      changelog: ['https://www.sumatrapdfreader.org/news.html', '.bulleted-list'],
      download: 'https://www.sumatrapdfreader.org/dl2/SumatraPDF-{version}-64.zip',
      install: 'install_zipped_single',
      other: {
        daily: {
          url: 'https://kjkpubsf.sfo2.digitaloceanspaces.com/software/sumatrapdf/sumadaily.js',
          changelog: null,
          version: (res, $) => res.body.match(/sumLatestExeZip64\s*=\s*"(.*?)";/)[1].match(/prerel-(\d+)-64.zip/)[1],
          download: (res, $) => res.body.match(/sumLatestExeZip64\s*=\s*"(.*?)";/)[1]
        },
        'pre-release': {
          url: 'https://kjkpubsf.sfo2.digitaloceanspaces.com/software/sumatrapdf/sumatralatest.js',
          changelog: null,
          version: (res, $) => res.body.match(/sumLatestExeZip64\s*=\s*"(.*?)";/)[1].match(/prerel-(\d+)-64.zip/)[1],
          download: (res, $) => res.body.match(/sumLatestExeZip64\s*=\s*"(.*?)";/)[1]
        }
      }
    },
    Sundy便笺: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_710498.html'
      },
      install: 'install'
    },
    Sunflower: {
      site: {
        GitHub: 'https://github.com/MeanEYE/Sunflower/releases/latest'
      },
      versionChoice: 'standalone.zip',
      install: 'install'
    },
    SuperPuTTY: {
      site: {
        GitHub: 'https://github.com/jimradford/superputty/releases/latest'
      },
      install: 'install'
    },
    Superscript: {
      commercial: 3,
      url: 'https://www.superscript.app/download',
      version: ['[download="Superscript Setup.exe"]', 'href', /windows\/([\d.]+)/],
      changelog: 'h4+ul',
      download: '[download="Superscript Setup.exe"]',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    'Sushi Browser': {
      site: {
        GitHub: 'https://github.com/kura52/sushi-browser/releases/latest'
      },
      versionChoice: 'win-ia32.zip',
      install: 'install'
    },
    suspend: {
      site: {
        GitHub: 'https://github.com/craftwar/suspend/releases/latest'
      },
      versionChoice: ['suspend.7z', /(.*)/, false, 'name'],
      install: 'install_zipped_single'
    },
    svgi: {
      site: {
        GitHub: 'https://github.com/Angelmmiguel/svgi/releases/latest'
      },
      versionChoice: 'win-x64-.*?.tar.gz',
      install: ['install_zipped', 'install_zipped_single']
    },
    'Sweet Home 3D': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/sweethome3d/files/SweetHome3D/'
      },
      downloadChoice: [null, 'windows.exe'],
      install: ['install_inno', null, null, '4']
    },
    SwiftSearch: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/swiftsearch/files/'
      },
      downloadChoice: [null, '64.exe'],
      install: 'install_single'
    },
    'Swiss File Knife': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/swissfileknife/files/1-swissfileknife/'
      },
      downloadChoice: [null, 'x64.exe'],
      install: 'install_single'
    },
    Switch: {
      site: {
        GitHub: 'https://github.com/ahkohd/switch-desktop/releases/latest'
      },
      versionChoice: 'exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/ahkohd/switch-desktop/releases'
          }
        }
      }
    },
    SwitchHosts: {
      site: {
        GitHub: 'https://github.com/oldj/SwitchHosts/releases/latest'
      },
      versionChoice: 'windows_portable(.*).exe',
      install: ['install_zipped', 'install', 'app-32.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/oldj/SwitchHosts/releases'
          }
        }
      }
    },
    SyncFolders: {
      url: 'http://www.syncfolders.elementfx.com/download.html',
      version: '#content>h1+h2',
      changelog: '#content>ul',
      download: 'http://www.syncfolders.elementfx.com/setupfile/SyncFoldersSetup.zip',
      install: ['install_zipped', 'install_inno']
    },
    Syncovery: {
      commercial: 3,
      url: 'https://www.syncovery.com/detailed-version-history/',
      version: ['p:contains("for Windows")', 'text', /v(.*?) for Windows/],
      changelog: 'p:contains("for Windows")+ul',
      download: 'https://www.syncovery.com/release/Syncovery64Setup.exe',
      install: 'install_inno'
    },
    Syncplay: {
      site: {
        GitHub: 'https://github.com/Syncplay/syncplay/releases/latest'
      },
      versionChoice: 'Setup.exe',
      install: 'install_nsis',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/Syncplay/syncplay/releases'
          }
        }
      }
    },
    SyncTrayzor: {
      site: {
        GitHub: 'https://github.com/canton7/SyncTrayzor/releases/latest'
      },
      versionChoice: 'x64.zip',
      install: 'install'
    },
    Synergy: {
      site: {
        GitHub: 'https://github.com/yupi2/synergy/releases/latest'
      },
      versionChoice: ['_x64_(.*).msi', /(.*)_master/],
      install: ['install_msi', null, 'synergys.exe']
    },
    SynWrite: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/synwrite/files/Release/'
      },
      versionChoice: /SynWrite.([\d.]+).zip/,
      install: 'install'
    },
    'System Information Viewer': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/siv_(system_information_viewer),1.html'
      },
      install: 'install'
    },
    'System Information': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/muldersoft/files/SysInfo%20Tool/'
      },
      versionChoice: /\.([\d-]+).zip/,
      install: 'install_zipped_single'
    },
    SystemExplorer: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Info/System-Explorer.shtml'
      },
      download: 'http://systemexplorer.net/download/SystemExplorerSetup.exe',
      install: 'install_inno'
    },
    SystemRescueCd: {
      url: 'https://osdn.net/projects/systemrescuecd/storage/releases/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '[data-name]>a',
        sort: true,
        attr: 'text'
      }),
      changelog: ['https://www.system-rescue-cd.org/Changes-x86/', 'p+ul>li>p+ul'],
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '[data-name]>a',
        sort: true
      }, {
        selector: '[data-name]>a',
        matchCheck: /systemrescuecd-amd64-([\d.]+).iso/
      })
    },
    'SystemTools Hyena': {
      commercial: 3,
      url: 'https://www.systemtools.com/hyena/download.htm',
      version: '.ReverseCaptions',
      download: 'https://www.systemtools.com/download/hyena_en_x64.zip'
    }
  }
};
