'use strict';

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    'd-tools': {
      site: {
        GitHub: 'https://github.com/geminate/d-tools/releases/latest'
      },
      versionChoice: 'win.rar',
      install: 'install'
    },
    DanDanPlay: {
      url: 'http://dandanplay.com/',
      version: ['a[href$=".exe"]', 'href'],
      changelog: ['http://dandanplay.com/blog.html', '#blogs li:contains("Windows版")'],
      download: 'a[href$=".exe"]',
      install: 'install_ai'
    },
    Dandere2x: {
      site: {
        GitHub: 'https://github.com/aka-katto/dandere2x/releases/latest'
      },
      install: 'install'
    },
    'Dango-Translator': {
      site: {
        GitHub: 'https://github.com/PantsuDango/Dango-Translator/releases/latest'
      },
      versionChoice: ['.rar', 'Ver(.*)'],
      install: ['install', null, '*\\Ver*', '-p"Dango"']
    },
    Dark: {
      site: {
        SoftSea: 'http://www.softsea.com/review/Dark-Turn-off-Monitor.html'
      },
      install: ['install_zipped', 'install_msi', '.msi', null, 'Dark.exe']
    },
    darktable: {
      fixedPath: '%ProgramFiles%\\darktable\\bin\\darktable.exe',
      site: {
        GitHub: 'https://github.com/darktable-org/darktable/releases/latest'
      },
      versionChoice: ['win64.exe', /release-(.*)/],
      install: 'install_nsis_cli'
    },
    'Database .NET': {
      commercial: 1,
      url: 'https://fishcodelib.com/Database.htm',
      version: '[href="files/DatabaseNet5Pro.zip"]',
      changelog: {
        url: 'https://fishcodelib.com/Database_new.htm',
        selector: 'fieldset',
        attr: 'text',
        match: /^Ver [\d.]+/,
        split: true
      },
      download: 'https://fishcodelib.com/files/DatabaseNet5Pro.zip',
      install: 'install_zipped_single'
    },
    'DB Browser for SQLite': {
      site: {
        GitHub: 'https://github.com/sqlitebrowser/sqlitebrowser/releases/latest'
      },
      versionChoice: 'win64.zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/sqlitebrowser/sqlitebrowser/releases'
          }
        }
      }
    },
    DBeaver: {
      site: {
        GitHub: 'https://github.com/dbeaver/dbeaver/releases/latest'
      },
      download: 'https://dbeaver.io/files/dbeaver-ce-latest-win32.win32.x86_64.zip',
      install: 'install',
      other: {
        ee: { // Enterprise Edition
          url: 'https://dbeaver.com/release-notes/',
          version: ['a[name]', 'name'],
          changelog: '.bullet_list>ul',
          commercial: 2,
          download: 'https://dbeaver.com/files/dbeaver-ee-latest-win32.win32.x86_64.zip'
        }
      }
    },
    DBGlass: {
      site: {
        GitHub: 'https://github.com/web-pal/DBGlass/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    dbmate: {
      site: {
        GitHub: 'https://github.com/amacneil/dbmate/releases/latest'
      },
      versionChoice: 'windows-amd64.exe',
      install: 'install_single'
    },
    DbVisualizer: {
      commercial: 3,
      url: 'https://www.dbvis.com/download/',
      version: 'h2',
      download: '#windows_64-bit_setup_without_java_vm',
      other: {
        java: {
          download: '#windows_64-bit_setup_with_java_vm'
        }
      }
    },
    'DC++': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/dcplusplus/files/'
      },
      downloadChoice: [/DC\+\+ ([\d.]+)/, 'x64.zip'],
      install: 'install'
    },
    DDatElectron: {
      site: {
        GitHub: 'https://github.com/dd-center/DDatElectron/releases/latest'
      },
      versionChoice: 'Setup(.*).exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    de4dot: {
      site: {
        'GitHub-actions': 'https://github.com/de4dot/de4dot'
      },
      versionChoice: 'de4dot-net45',
      install: 'install'
    },
    'Decimal BASIC': {
      url: 'https://decimalbasic.ninja-web.net/EnglishWindows.htm',
      version: ['h4+p', 'text', /Ver\.\s+(\d+[\d.]+\d+)\s+/],
      changelog: {
        selector: 'dl',
        attr: 'text',
        match: /^Ver. [\d.]+/,
        split: true
      },
      download: 'h4+p>a',
      install: 'install'
    },
    DeepL: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Office-tools/Other-Office-Tools/DeepL.shtml'
      },
      download: 'https://appdownload.deepl.com/windows/full/DeepLSetup.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    Deer: {
      site: {
        GitHub: 'https://github.com/abahmed/Deer/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Deleaker: {
      commercial: 3,
      url: 'https://www.deleaker.com/changelog.html',
      version: ['h2>a[name]', 'name'],
      changelog: '.timeline-v2 .cbp_tmlabel>div',
      download: 'https://www.deleaker.com/download/DeleakerSetup.zip',
      install: ['install_zipped', 'install_inno']
    },
    DeltaChat: {
      url: 'https://download.delta.chat/desktop/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        match: 'v([\\d.]+)/',
        sort: true
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        matchCheck: 'v([\\d.]+)/',
        sort: true
      }, {
        selector: 'a',
        matchCheck: 'Setup.*?.exe'
      }),
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Deluge: {
      url: 'http://download.deluge-torrent.org/windows/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'td>a[href$=".exe"]',
        match: /deluge-([\d.]+)-win32/,
        sort: true
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'td>a[href$=".exe"]',
        matchCheck: /deluge-([\d.]+)-win32/,
        sort: true
      }),
      install: 'install_nsis'
    },
    Demyo: {
      site: {
        GitHub: 'https://github.com/The4thLaw/demyo/releases/latest'
      },
      versionChoice: 'Setup.exe',
      install: 'install_nsis'
    },
    deno: {
      site: {
        GitHub: 'https://github.com/denoland/deno/releases/latest'
      },
      versionChoice: 'windows(.*).zip',
      install: 'install_zipped_single'
    },
    Deobfuscator: {
      site: {
        GitHub: 'https://github.com/java-deobfuscator/deobfuscator/releases/latest'
      },
      versionChoice: '.jar',
      install: 'install_single',
      other: {
        gui: {
          site: {
            GitHub: 'https://github.com/java-deobfuscator/deobfuscator-gui/releases/latest'
          }
        }
      }
    },
    Dependencies: {
      site: {
        GitHub: 'https://github.com/lucasg/Dependencies/releases/latest'
      },
      versionChoice: 'x64_Release.zip',
      install: 'install',
      other: {
        nopreview: {
          versionChoice: 'x64_Release_.without.peview.exe.zip'
        },
        x86: {
          versionChoice: 'x86_Release.zip'
        },
        x64: {
          versionChoice: 'x64_Release.zip'
        }
      }
    },
    'Dependency Walker': {
      url: 'http://dependencywalker.com/',
      version: '[size="4"]>[href^="depends"][href$="x64.zip"]',
      download: '[size="4"]>[href^="depends"][href$="x64.zip"]',
      install: 'install',
      other: {
        x86: {
          version: '[size="4"]>[href^="depends"][href$="x86.zip"]',
          download: '[size="4"]>[href^="depends"][href$="x86.zip"]'
        },
        x64: {
          version: '[size="4"]>[href^="depends"][href$="x64.zip"]',
          download: '[size="4"]>[href^="depends"][href$="x64.zip"]'
        },
        ia64: {
          version: '[size="4"]>[href^="depends"][href$="ia64.zip"]',
          download: '[size="4"]>[href^="depends"][href$="ia64.zip"]'
        }
      }
    },
    DeskPins: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Desktop-Enhancements/Other-Desktop-Enhancements/DeskPins.shtml'
      },
      install: 'install_zipped_single'
    },
    'Desktop Dimmer': {
      site: {
        GitHub: 'https://github.com/sidneys/desktop-dimmer/releases/latest'
      },
      versionChoice: 'setup.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    DeSmuME: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/desmume/files/desmume/'
      },
      versionChoice: /(.*)/,
      downloadChoice: [null, 'desmume-(.*)-win64.zip'],
      install: 'install'
    },
    'Destroy Windows 10 Spying': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/destroy_windows_10_spying,1.html'
      },
      install: 'install_single'
    },
    'Detect it Easy': {
      site: {
        GitHub: 'https://github.com/horsicq/DIE-engine/releases/latest'
      },
      versionChoice: 'win32_portable(.*).zip',
      install: 'install'
    },
    DevDocs: {
      site: {
        GitHub: 'https://github.com/egoist/devdocs-desktop/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    DevHub: {
      site: {
        GitHub: 'https://github.com/devhubapp/devhub/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Dexpot: {
      url: 'https://www.dexpot.de/?id=download&lang=en',
      version: ['.ueberschrift+li', 'text', /^([\d.]+) Build (\d+)$/, '$1.$2'],
      changelog: {
        url: 'https://www.dexpot.de/?id=changelog&lang=en',
        selector: '#inhalt',
        attr: 'text',
        match: /^Dexpot [\d.]+/,
        split: true
      },
      download: 'a[href$=".zip"]',
      install: 'install'
    },
    'Digital Clock': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/digitalclock4/files/'
      },
      downloadChoice: [null, 'win_portable.zip'],
      install: 'install'
    },
    dingtalk: {
      site: {
        GitHub: 'https://github.com/nashaofu/dingtalk/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Diode: {
      site: {
        GitHub: 'https://github.com/diodechain/diode_go_client/releases/latest'
      },
      versionChoice: 'windows_amd64.zip',
      install: 'install_zipped_single'
    },
    'Directory Lister': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Others/File-CD-DVD-Catalog/Directory-Lister.shtml'
      },
      downloadChoice: 'x64',
      install: 'install_inno'
    },
    'Directory Opus': {
      commercial: 3,
      url: 'https://blog.dopus.com/search/label/main%20program%20updates',
      version: '.entry-title',
      changelog: '.entry-content',
      download: '[href*="download.asp?id"]',
      install: info => {
        const path = require('path');
        const fs = require('fs');
        const cp = require('child_process');

        cp.execSync(`"${info.output}" /extract_all:"${path.resolve(info.fns.dirname, 'unzip/OpusInstall')}"`);
        const iss = path.resolve(info.fns.dirname, 'unzip/OpusInstall/Disk1/setup.iss');
        const content = [
          '[InstallShield Silent]',
          'Version=v7.00',
          'File=Response File',
          '[File Transfer]',
          'OverwrittenReadOnly=NoToAll',
          '[{0A6AA615-5321-43A0-AFAE-97BF95013EA0}-DlgOrder]',
          'Dlg0={0A6AA615-5321-43A0-AFAE-97BF95013EA0}-SdWelcome-0',
          'Count=4',
          'Dlg1={0A6AA615-5321-43A0-AFAE-97BF95013EA0}-SdLicense-0',
          'Dlg2={0A6AA615-5321-43A0-AFAE-97BF95013EA0}-SdAskDestPath-0',
          'Dlg3={0A6AA615-5321-43A0-AFAE-97BF95013EA0}-SdFinish-0',
          '[{0A6AA615-5321-43A0-AFAE-97BF95013EA0}-SdWelcome-0]',
          'Result=1',
          '[{0A6AA615-5321-43A0-AFAE-97BF95013EA0}-SdLicense-0]',
          'Result=1',
          '[{0A6AA615-5321-43A0-AFAE-97BF95013EA0}-SdAskDestPath-0]',
          'szDir=' + info.parentPath,
          'Result=1',
          '[Application]',
          'Name=Directory Opus',
          'Version=12.12',
          'Company=GPSoftware',
          'Lang=0409',
          '[{0A6AA615-5321-43A0-AFAE-97BF95013EA0}-SdFinish-0]',
          'Result=1',
          'bOpt1=0',
          'bOpt2=1',
          ''
        ].join('\n');
        fs.writeFileSync(iss, content);

        const setup = path.resolve(info.fns.dirname, 'unzip/OpusInstall/Disk1/setup.exe');
        return info.fns.install.cli(info, setup, ['/s', `/f1"${iss}"`], { wait: true });
      },
      other: {
        beta: {
          url: 'https://blog.dopus.com/search/label/beta%20updates'
        }
      }
    },
    'Directory Size Calculator': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/muldersoft/files/Directory%20Size%20Calculator/'
      },
      versionChoice: /\.([\d-]+).zip/,
      install: 'install_zipped_single'
    },
    DirectoryMonitor: {
      commercial: 2,
      url: 'https://directorymonitor.com/download',
      version: '.downloads strong',
      changelog: {
        url: 'https://directorymonitor.com/download/ChangeLog.txt',
        split: true
      },
      download: 'http://cdn.directorymonitor.com/DirectoryMonitor2_Portable.zip',
      install: 'install'
    },
    'DirectX Repair': {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_57945.html'
      },
      install: 'install'
    },
    direnv: {
      site: {
        GitHub: 'https://github.com/direnv/direnv/releases/latest'
      },
      versionChoice: 'direnv.windows-amd64.exe',
      install: 'install_single'
    },
    DirSyncPro: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/directorysync/files/DirSync%20Pro%20%28stable%29/'
      },
      versionChoice: /^(.*)$/,
      downloadChoice: [null, 'Windows.zip'],
      install: 'install',
      other: {
        unstable: {
          site: {
            SourceForge: 'https://sourceforge.net/projects/directorysync/files/DirSync%20Pro%20%28unstable%29/'
          }
        }
      }
    },
    'Disable-Nvidia-Telemetry': {
      site: {
        GitHub: 'https://github.com/NateShoffner/Disable-Nvidia-Telemetry/releases/latest'
      },
      versionChoice: 'Portable.exe',
      install: 'install'
    },
    Discord: {
      site: {
        download: 'https://discordapp.com/download'
      },
      versionChoice: 'https://discordapp.com/api/download?platform=win',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    DiscordChatExporter: {
      site: {
        GitHub: 'https://github.com/Tyrrrz/DiscordChatExporter/releases/latest'
      },
      versionChoice: 'DiscordChatExporter.zip',
      install: 'install',
      other: {
        cli: {
          versionChoice: 'DiscordChatExporter.CLI.zip'
        }
      }
    },
    DiskDigger: {
      commercial: 2,
      url: 'https://diskdigger.org/download',
      version: '#node-1 center>p:contains("version")',
      download: 'https://diskdigger.org/diskdigger.zip',
      install: 'install'
    },
    'Dism++': {
      url: 'https://www.chuyu.me/zh-Hans/index.html',
      version: '.subh2',
      changelog: ['https://github.com/Chuyu-Team/Dism-Multi-language/blob/master/UpdateHistory.md', '.markdown-body>h2:contains("更新历史")+p+ul'],
      download: '.butt-holder a[href$=".zip"]',
      install: 'install'
    },
    dispatcher: {
      site: {
        GitHub: 'https://github.com/131/dispatcher/releases/latest'
      },
      versionChoice: 'win_x64.exe',
      install: 'install_single',
      other: {
        cmd: {
          versionChoice: 'cmd_x64.exe'
        }
      }
    },
    'Display Driver Uninstaller': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/display_driver_uninstaller,1.html'
      },
      install: 'install'
    },
    DisplayPowerOff: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/doff/files/DisplayPowerOff/'
      },
      versionChoice: /DisplayPowerOff-(.*).7z/,
      install: ['install', null, 'x64']
    },
    Ditto: {
      useProxy: true,
      site: {
        SourceForge: 'https://sourceforge.net/projects/ditto-cp/files/Ditto/'
      },
      downloadChoice: [null, /DittoPortable_64bit_.*?.zip/],
      install: 'install'
    },
    'DMSkin Wallpaper Maker': {
      site: {
        GitHub: 'https://github.com/944095635/DMSkin-Wallpaper-Maker/releases/latest'
      },
      versionChoice: '.7z',
      install: 'install'
    },
    dnGrep: {
      site: {
        GitHub: 'https://github.com/dnGrep/dnGrep/releases/latest'
      },
      versionChoice: '.x64.msi',
      install: ['install_msi', null, 'dnGREP.exe']
    },
    Dnote: {
      site: {
        GitHub: 'https://github.com/dnote/dnote/releases/latest'
      },
      versionChoice: 'windows_amd64.tar.gz',
      install: ['install_zipped', 'install_zipped_single']
    },
    'DNS Chooser': {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_769680.html'
      },
      install: ['install', null, 'dnschooser']
    },
    'DNS forwarder': {
      site: {
        GitHub: 'https://github.com/holmium/dnsforwarder/releases/latest'
      },
      versionChoice: 'x86_64.exe',
      install: 'install_single'
    },
    DNSAgent: {
      site: {
        GitHub: 'https://github.com/stackia/DNSAgent/releases/latest'
      },
      install: 'install'
    },
    'DNSCrypt-Proxy': {
      site: {
        GitHub: 'https://github.com/DNSCrypt/dnscrypt-proxy/releases/latest'
      },
      versionChoice: 'win64(.*).zip',
      install: 'install'
    },
    DnsForwarderGUI: {
      site: {
        GitHub: 'https://github.com/miaomiaosoft/DnsForwarderGUI/releases/latest'
      },
      install: 'install'
    },
    dnslookup: {
      site: {
        GitHub: 'https://github.com/ameshkov/dnslookup/releases/latest'
      },
      versionChoice: 'windows-amd64-v.*?.zip',
      install: 'install_zipped_single'
    },
    dnSpy: {
      site: {
        GitHub: 'https://github.com/0xd4d/dnSpy/releases/latest'
      },
      versionChoice: 'win64.zip',
      install: 'install'
    },
    DocFetcher: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/docfetcher/files/docfetcher/'
      },
      downloadChoice: [null, 'portable.zip'],
      install: 'install'
    },
    'Docker Desktop': {
      fixedPath: '%ProgramFiles%\\Docker\\Docker\\Docker Desktop.exe',
      url: 'https://docs.docker.com/docker-for-windows/release-notes/',
      version: 'h2[id^="docker-desktop-community"]',
      changelog: {
        selector: '.section',
        attr: 'text',
        match: /^Docker Desktop Community [\d.]+/,
        split: true
      },
      download: 'https://desktop.docker.com/win/stable/Docker%20Desktop%20Installer.exe',
      other: {
        edge: {
          url: 'https://docs.docker.com/docker-for-windows/edge-release-notes/',
          download: 'https://desktop.docker.com/win/edge/Docker%20Desktop%20Installer.exe'
        }
      }
    },
    Dockeron: {
      site: {
        GitHub: 'https://github.com/dockeron/dockeron/releases'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Documentalist: {
      url: 'https://kjkpubsf.sfo2.digitaloceanspaces.com/software/documentalist/rel/latestver.js',
      version: (res, $) => res.body.match(/"Ver": "([\d.]+)"/)[1],
      download: (res, $) => res.body.match(/"URL": "(.*?)"/)[1],
      install: 'install'
    },
    'Dolphin Emulator': {
      url: 'https://dolphin-emu.org/download/',
      version: '#download-stable .infos .version',
      download: '#download-stable .download .download-links .win',
      install: 'install_nsis',
      other: {
        dev: {
          version: ['#download-dev .infos .version', 'text', /(.*)/],
          download: '#download-dev .download .download-links .win',
          install: 'install'
        }
      }
    },
    DOSBox: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/dosbox/files/dosbox/'
      },
      downloadChoice: [null, 'win32-installer.exe'],
      install: ['install_zipped_single', 'innounp.exe']
    },
    'dottorrent-gui': {
      site: {
        GitHub: 'https://github.com/kz26/dottorrent-gui/releases/latest'
      },
      versionChoice: /dottorrent-gui-(.*?)-win64.rar/,
      install: 'install'
    },
    'Double Commander': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/doublecmd/files/DC%20for%20Windows%2064%20bit/'
      },
      downloadChoice: [/Double Commander (.*)\//, '.zip'],
      install: 'install'
    },
    'Download Accelerator Manager': {
      url: 'http://www.damdownloader.com/',
      version: '.info',
      download: 'http://download.tensons.com/download/DAMsetup.exe',
      install: 'install_nsis'
    },
    'Download Master': {
      url: 'https://www.westbyte.com/dm/',
      version: '[href="https://download.downloadmaster.ru/dm/dmaster.exe"]:has(b)',
      download: 'https://download.downloadmaster.ru/dm/dmaster.exe',
      install: 'install_inno_type'
    },
    'Dr.Web CureIt': {
      site: {
        download: 'https://free.drweb.cn/'
      },
      versionChoice: ['https://free.drweb.cn/download+cureit/gr/?lng=cn', /cureit\/([\d.]+)\//],
      install: 'install_single'
    },
    Drax: {
      site: {
        GitHub: 'https://github.com/stevie910/drax/releases/latest'
      },
      versionChoice: '.msi',
      install: ['install_msi', null, 'drax.exe']
    },
    DreamMail: {
      url: 'https://cy-email.com/',
      version: '.download',
      download: '.download',
      install: 'install_inno'
    },
    'Drive SnapShot': {
      commercial: 3,
      url: 'http://www.drivesnapshot.de/en/inews.htm',
      version: 'h4',
      changelog: 'h4+ul',
      download: 'http://www.drivesnapshot.de/download/snapshot64.exe',
      install: 'install_single'
    },
    'Driver Genius': {
      useProxy: true,
      commercial: 3,
      url: 'http://www.driver-soft.com/download.html',
      version: 'p>strong',
      changelog: {
        selector: '.k_s',
        attr: 'text',
        match: /^Driver Genius [\d.]+/,
        split: true
      },
      download: 'http://www.driver-soft.com/products/DG_Setup.exe',
      install: 'install_inno'
    },
    DriverEasy: {
      commercial: 2,
      url: 'https://www.drivereasy.com/version-history/',
      version: '#i',
      changelog: '[id^="post"]>ul',
      download: 'https://www.drivereasy.com/header/DriverEasy_Setup.exe',
      install: 'install_inno'
    },
    'DriverPack Solution Network': {
      url: 'https://drp.su/api/miscs/products',
      version: (res, $) => res.json.data.value.network.version,
      download: (res, $) => res.json.data.value.network.links[0].downloadLink,
      install: 'install'
    },
    'DriverPack Solution Online': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/DriverPack-Solution-Lite.shtml'
      },
      install: 'install_single'
    },
    DriverPacks: {
      url: 'http://driverpacks.net/applications/driverpacks-base/latest',
      version: 'h2',
      changelog: '.changelog',
      download: '.download-link>a',
      install: 'install'
    },
    DriverStoreExplorer: {
      site: {
        GitHub: 'https://github.com/lostindark/DriverStoreExplorer/releases/latest'
      },
      install: 'install'
    },
    DriverTalent: {
      commercial: 2,
      url: 'https://www.drivethelife.com/free-drivers-download-utility.html',
      version: '.call-button+div>div',
      download: 'https://www.drivethelife.com/download/driver-talent.exe',
      other: {
        NetworkCard: {
          url: 'https://www.drivethelife.com/free-network-drivers-download-install.html',
          download: 'https://www.drivethelife.com/download/driver-talent-for-network-card.exe'
        }
      }
    },
    'drone-cli': {
      site: {
        GitHub: 'https://github.com/drone/drone-cli/releases/latest'
      },
      versionChoice: 'windows_amd64.tar.gz',
      install: ['install_zipped', 'install_zipped_single']
    },
    DropIt: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/dropit/files/DropIt/'
      },
      downloadChoice: [/v([\d.]+)/, 'Portable.zip'],
      install: 'install'
    },
    DTCP: {
      site: {
        GitHub: 'https://github.com/alchen/DTCP/releases/latest'
      },
      versionChoice: 'win32.zip',
      install: 'install'
    },
    'Dual Monitor Tools': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/dualmonitortool/files/dualmonitortool/'
      },
      versionChoice: '',
      downloadChoice: [null, /DualMonitorTools-([\d.]+).zip/],
      install: 'install'
    },
    DualServer: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/dhcp-dns-server/files/Dual%20DHCP%20DNS%20Server/'
      },
      versionChoice: /DualServerInstallerV([\d.]+).exe/
    },
    DubEdit: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/dubedit/files/'
      },
      versionChoice: 'DubEdit-Libraries-V(.*?)-installer.exe',
      install: 'install_nsis_cli'
    },
    'Duet Display': {
      site: {
        download: 'https://www.duetdisplay.com/'
      },
      versionChoice: ['http://updates.duetdisplay.com/latestWindows', /DuetSetup-((\d)-(\d)-(\d)-(\d)).exe/, '$2.$3.$4.$5'],
      changelog: {
        url: 'https://help.duetdisplay.com/updates/windows-release-notes',
        selector: '#js_page_content',
        attr: 'text',
        match: /^Version [\d.]+/,
        split: true
      },
      install: 'install_ai_cli'
    },
    Dugite: {
      site: {
        GitHub: 'https://github.com/desktop/dugite-native/releases/latest'
      },
      versionChoice: 'windows-x64.tar.gz',
      install: ['install_zipped', 'install']
    },
    'Dump Strings': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/muldersoft/files/Dump%20Strings/'
      },
      versionChoice: /\.([\d-]+).zip/,
      install: 'install_zipped_single'
    },
    dupeGuru: {
      site: {
        GitHub: 'https://github.com/arsenetar/dupeguru/releases/latest'
      },
      versionChoice: 'win64_(.*?).exe',
      install: 'install_nsis'
    },
    duplicati: {
      site: {
        GitHub: 'https://github.com/duplicati/duplicati/releases'
      },
      versionChoice: 'x64.msi',
      install: ['install_msi', null, 'Duplicati.GUI.TrayIcon.exe']
    },
    DVC: {
      site: {
        GitHub: 'https://github.com/iterative/dvc/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/iterative/dvc/releases'
          }
        }
      }
    },
    DxWnd: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/dxwnd/files/Latest%20build/'
      },
      versionChoice: /v(.*)_build.rar/,
      install: 'install'
    },
    DynVPN: {
      useProxy: true,
      url: 'https://dynvpn.com/download/',
      version: 'h3',
      download: 'body > section.section-content > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > a',
      install: 'install_nsis',
      other: {
        cli: {
          download: 'body > section.section-content > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > a'
        }
      }
    }
  }
};
