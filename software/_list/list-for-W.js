'use strict';

// 'use strict';
// const data = {
//   url: 'https://s3.amazonaws.com/winds-2.0-releases/latest.html',
//   version: ['#td-win>a', 'href', /Winds%20Setup%20(.*?).exe/],
//   download: '#td-win>a',
//   install: ['install_zipped', 'install', 'app-64.7z']
// };
// module.exports = data;

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    WACUP: {
      url: 'https://getwacup.com/preview/',
      version: '#download+div>a[href$=".exe"]',
      changelog: {
        url: '#download+div+div>a[href^="./preview"]',
        selector: 'body>.container-fluid'
      },
      download: '#download+div>a[href$=".exe"]',
      install: 'install_nsis'
    },
    wagon: {
      site: {
        GitHub: 'https://github.com/laravel-dojo/wagon/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install'
    },
    'waifu2x-caffe': {
      site: {
        GitHub: 'https://github.com/lltcggie/waifu2x-caffe/releases/latest'
      },
      install: 'install'
    },
    'waifu2x-DeadSix27': {
      site: {
        GitHub: 'https://github.com/DeadSix27/waifu2x-converter-cpp/releases/latest'
      },
      install: 'install'
    },
    'waifu2x-gui': {
      site: {
        GitHub: 'https://github.com/maz-1/waifu2x-gui/releases/latest'
      },
      versionChoice: '.7z',
      install: 'install'
    },
    waifud: {
      site: {
        GitHub: 'https://github.com/pcmid/waifud/releases/latest'
      },
      versionChoice: 'windows_amd64.zip',
      install: 'install'
    },
    WAIL: {
      site: {
        GitHub: 'https://github.com/N0taN3rd/wail/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    Wally: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/wally/files/wally/'
      },
      downloadChoice: [null, '.exe'],
      install: 'install_zipped_single'
    },
    WampServer: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/wampserver/files/WampServer%203/'
      },
      versionChoice: [[null, null, 'WampServer', null, 'href'], 'wampserver(.*?)_x64.exe'],
      downloadChoice: ['WampServer', 'wampserver(.*?)_x64.exe'],
      install: 'install_inno_cli',
      other: {
        portable: {
          versionChoice: [[null, null, 'Wampee', null, 'href'], 'Wampee-(.*?).7z'],
          downloadChoice: ['Wampee', 'Wampee-(.*?).7z'],
          install: 'install'
        }
      }
    },
    Waow: {
      url: 'https://dedg3.com/wao/',
      version: 'section:contains("Changelog")>strong',
      changelog: 'section:contains("Changelog")>ul',
      download: 'https://dedg3.com/wao/Waow.zip',
      install: ['install_zipped', 'install']
    },
    Wasmer: {
      site: {
        GitHub: 'https://github.com/wasmerio/wasmer/releases/latest'
      },
      versionChoice: 'wasmer-windows.exe',
      install: 'install_inno'
    },
    WATCHED: {
      site: {
        download: 'https://www.watched.com/download'
      },
      versionChoice: ['https://www.watched.com/desktop/get/windows', /WATCHED Setup (.*?).exe/],
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Waterfox: {
      url: 'https://www.waterfox.net/download/',
      version: ['[href*="Waterfox%20Current"][href$=".exe"]', 'href', /Waterfox%20Current%20(.*?)%20Setup.exe/],
      changelog: async (res, $, fns, choice) => {
        const version = $('[href*="Waterfox%20Current"][href$=".exe"]').eq(0).attr('href').match(/Waterfox%20Current%20(.*?)%20Setup.exe/)[1];
        const uri1 = 'https://www.waterfox.net/blog/';
        const res1 = await fns.req(uri1);
        const $1 = fns.cheerio.load(res1.body);

        const uri2 = $1(`.container-xs>div>ul>li a:contains("${version}")`).eq(0).attr('href');
        const res2 = await fns.req(uri2);
        const $2 = fns.cheerio.load(res2.body);
        return [$2('[id^="-whats-new"]~ul').eq(0).html(), true];
      },
      download: '[href*="Waterfox%20Current"][href$=".exe"]',
      install: ['install', null, 'core'],
      other: {
        classic: {
          version: ['[href*="Waterfox%20Classic"][href$=".exe"]', 'href', /Waterfox%20Classic%20(.*?)%20Setup.exe/],
          changelog: null,
          download: '[href*="Waterfox%20Classic"][href$=".exe"]'
        }
      }
    },
    Wavebox: {
      site: {
        GitHub: 'https://github.com/wavebox/waveboxapp/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/wavebox/waveboxapp/releases'
          }
        }
      }
    },
    Weasel: {
      url: 'https://rime.im/download/',
      version: 'a[href="https://bintray.com/rime/weasel/release"]',
      changelog: {
        url: 'https://rime.im/release/weasel/',
        selector: '.mypage',
        attr: 'text',
        match: /^#[\d-]+/,
        split: true
      },
      download: 'a[href="https://bintray.com/rime/weasel/release"]+a',
      beforeInstall: info => {
        const path = require('path');
        const setup = path.resolve(info.parentPath, 'WeaselSetup.exe');
        if (require('fs').existsSync(setup)) require('child_process').execSync(`"${setup}" /u`);
      },
      install: 'install_nsis',
      afterInstall: info => {
        const path = require('path');
        const setup = path.resolve(info.parentPath, 'WeaselSetup.exe');
        require('child_process').execSync(`"${setup}" /i`);
      }
    },
    WeatherMate: {
      url: 'https://ravib.com/wm/relnotes.htm',
      version: ['[color="#900000"]>b', 'text', /Version (.*?),/],
      changelog: 'body > center > table:nth-child(3) > tbody > tr > td > center > table > tbody > tr > td > p:nth-child(3) > table > tbody > tr:nth-child(2)',
      download: 'https://ravib.com/wm/bin/wm4.zip',
      install: 'install'
    },
    webify: {
      site: {
        GitHub: 'https://github.com/beefsack/webify/releases/latest'
      },
      versionChoice: 'windows-amd64.zip$',
      install: 'install_zipped_single'
    },
    'Website 2 APK Builder': {
      commercial: 2,
      site: {
        GitHub: 'https://github.com/praveshagrawal/Website-2-APK-Builder/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno'
    },
    WebTorrent: {
      site: {
        GitHub: 'https://github.com/webtorrent/webtorrent-desktop/releases/latest'
      },
      versionChoice: '-win.zip',
      install: 'install'
    },
    Weer: {
      url: 'https://weerdbg.com/zh-cn/download.md',
      version: '[href$="windows.zip"]',
      changelog: {
        url: 'https://weerdbg.com/zh-cn/changelog.md',
        match: /^v[\d.]+/,
        split: true
      },
      download: '[href$="windows.zip"]',
      install: 'install_zipped_single'
    },
    weweChat: {
      site: {
        GitHub: 'https://github.com/trazyn/weweChat/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Wexflow: {
      site: {
        GitHub: 'https://github.com/aelassas/Wexflow/releases/latest'
      },
      versionChoice: 'windows-x64.exe',
      install: 'install_inno'
    },
    Wexond: {
      site: {
        GitHub: 'https://github.com/wexond/desktop/releases/latest'
      },
      versionChoice: 'win.zip',
      install: 'install'
    },
    WGestures: {
      site: {
        GitHub: 'https://github.com/yingDev/WGestures/releases/latest'
      },
      install: ['install_zipped', 'install_msi', null, null, 'WGestures.exe']
    },
    wget: {
      withoutHeader: true,
      url: 'https://eternallybored.org/misc/wget/',
      version: '#content > table > tbody > tr:nth-child(2) > td:nth-child(1)',
      download: 'https://eternallybored.org/misc/wget/{version}/64/wget.exe',
      install: 'install_single'
    },
    WhatPulse: {
      commercial: 2,
      url: 'http://whatpulse.org/downloads/',
      version: ['.toolTip[title*="Windows client"]', 'title'],
      download: 'http://whatpulse.org/downloads/311/',
      install: 'install_inno'
    },
    'Whats My DPI': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/muldersoft/files/Whats%20My%20DPI/'
      },
      versionChoice: /\.([\d-]+).zip/,
      install: 'install_zipped_single'
    },
    WhatsApp: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Chat/Instant-Messaging/WhatsApp.shtml'
      },
      download: 'https://web.whatsapp.com/desktop/windows/release/x64/WhatsAppSetup.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    WhatsDesktop: {
      site: {
        GitHub: 'https://github.com/mawie81/whatsdesktop/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Whitecloud: {
      url: 'https://whitecloud.xyyaya.com/',
      version: ['a[href$=".zip"]', 'href', /%20([\d.]+).zip/],
      download: 'a[href$=".zip"]',
      install: 'install'
    },
    Wifinian: {
      site: {
        GitHub: 'https://github.com/emoacht/Wifinian/releases/latest'
      },
      install: ['install_zipped', 'install_msi', '.msi', 'Wifinian.exe']
    },
    WikidPad: {
      site: {
        GitHub: 'https://github.com/WikidPad/WikidPad/releases/'
      },
      versionChoice: ['.exe', /WikidPad-(.*)/],
      install: 'install_inno'
    },
    'Win Toolkit': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/win_toolkit,1.html'
      },
      install: 'install_zipped_single'
    },
    'Win10 BrightnessSlider': {
      site: {
        GitHub: 'https://github.com/blackholeearth/Win10_BrightnessSlider/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    'Win10-Initial-Setup-Script': {
      site: {
        'GitHub-commit': 'https://github.com/Disassembler0/Win10-Initial-Setup-Script/releases'
      },
      install: 'install'
    },
    'Win32 Disk Imager': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/win32diskimager/files/Archive/'
      },
      versionChoice: /Win32DiskImager-(.*)-binary.zip/,
      install: 'install'
    },
    Winamp: {
      commercial: 2,
      url: 'http://www.winamp.com/',
      version: 'h2',
      download: '.btn-download',
      install: 'install_nsis'
    },
    WinAuth: {
      site: {
        GitHub: 'https://github.com/winauth/winauth/releases/latest'
      },
      install: 'install_zipped_single',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/winauth/winauth/releases'
          }
        }
      }
    },
    WinAutomation: {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/Launchers-Shutdown-Tools/WinAutomation.shtml'
      },
      download: 'http://assets.winautomation.com/releases/WinAutomationSetup.exe',
      install: ['install_zipped', 'install_msi', 'data\\\\WinAutomationSetup.msi', null, 'WinAutomation.Server.exe']
    },
    WinBrowser: {
      commercial: 3,
      url: 'https://www.winbrowser.com/download.html',
      version: '.downloadPageContent > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1) > b:nth-child(1)',
      changelog: ['https://www.winbrowser.com/whatsnew.html', '.indentedList'],
      download: 'https://www.winbrowser.com/cgi-bin/download_file.php/WinBrowserSetup64.exe?f=WinBrowserSetup64.exe',
      install: ['install_ai_msi', null, 'WinBrowserSetup64.msi', 'WinBrowser.exe']
    },
    WinCatalog: {
      commercial: 3,
      url: 'https://www.wincatalog.com/download.html',
      version: '.card-body>p+p',
      download: async (res, $, fns, choice) => fns.walkLink('https://www.wincatalog.com/thankyou.html', fns, '[href$="setup.exe"]'),
      install: 'install_inno'
    },
    WinCompose: {
      site: {
        GitHub: 'https://github.com/samhocevar/wincompose/releases/latest'
      },
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/samhocevar/wincompose/releases'
          }
        }
      }
    },
    WinContig: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/Hard-Disk-Utils/WinContig.shtml'
      },
      install: 'install'
    },
    WinDirStat: {
      withoutHeader: true,
      url: 'https://windirstat.net/download.html',
      version: 'li.download',
      download: 'a[href*="sourceforge.net"][href$=".exe"]',
      install: ['install_zipped_single', 'windirstat.exe']
    },
    WinDock: {
      url: 'http://www.ivanyu.ca/windock/',
      version: (res, $) => $('a[href$=".exe"]').eq(0).attr('href').match(/WinDock_Setup_(.*?).exe/)[1].replace(/_/g, '.'),
      download: 'a[href$=".exe"]',
      install: 'install_inno'
    },
    'Window Detective': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/windowdetective/files'
      },
      downloadChoice: [null, 'setup.exe'],
      install: 'install_inno'
    },
    WindowGrid: {
      url: 'http://windowgrid.net/',
      version: '#downloads>a',
      changelog: '.version+ul',
      download: '#downloads>a',
      install: 'install'
    },
    'Windows 10 Login Background Changer': {
      site: {
        GitHub: 'https://github.com/Krutonium/Windows-10-Login-Background-Changer/releases/latest'
      },
      install: ['install', null, 'Command Line']
    },
    'Windows Inspection Tool Set': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/windowstoolset/files/Windows%20Inspection%20Tool%20Set/'
      },
      versionChoice: /(.*?) \(Release\)/,
      changelog: ['https://wits.magicsplat.com/versionhistory.html', '.content>ul'],
      downloadChoice: [/(.*?) \(Release\)/, /setup-wits-.*?\(64 bit\).exe/],
      install: ['install_zipped', 'install_msi', '.msi', null, 'wits.exe'],
      other: {
        beta: {
          versionChoice: /(.*?) \((Beta|Release)\)/,
          changelog: null,
          downloadChoice: [/(.*?) \((Beta|Release)\)/, /setup-wits-.*?\(64 bit\).exe/]
        }
      }
    },
    'Windows Privacy Dashboard': {
      url: 'https://wpd.app/changelog/',
      version: '.badge-primary',
      changelog: {
        selector: '.container',
        attr: 'text',
        // match: /^v[\d.]+/,
        split: true
      },
      download: 'https://wpd.app/get/latest.zip',
      install: 'install'
    },
    'Windows System Control Center': {
      commercial: 1,
      url: 'https://www.kls-soft.com/wscc/history.php',
      version: '.divhistoryversionheader',
      changelog: '.divhistoryversionitems',
      download: 'http://www.kls-soft.com/downloads/wscc_x64.zip',
      install: 'install'
    },
    windows95: {
      site: {
        GitHub: 'https://github.com/felixrieseberg/windows95/releases/latest'
      },
      versionChoice: 'win32-standalone-x64.zip',
      install: 'install'
    },
    WindowsSpyBlocker: {
      site: {
        GitHub: 'https://github.com/crazy-max/WindowsSpyBlocker/releases/latest'
      },
      versionChoice: 'WindowsSpyBlocker.exe',
      install: 'install_single'
    },
    WindowTabs: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/OS-Enhancements/WindowTabs.shtml'
      },
      install: 'install'
    },
    Winds: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/News-Newsgroups-Blog-Tools/Winds.shtml'
      },
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Windscribe: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/Windscribe.shtml'
      },
      download: 'https://assets.windscribe.com/desktop/win/Windscribe.exe',
      install: 'install_inno_type'
    },
    WinDynamicDesktop: {
      site: {
        GitHub: 'https://github.com/t1m0thyj/WinDynamicDesktop/releases/latest'
      },
      versionChoice: 'Portable.exe',
      install: 'install_single',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/t1m0thyj/WinDynamicDesktop/releases'
          }
        }
      }
    },
    Winflector: {
      commercial: 2,
      url: 'https://www.winflector.com/download.html',
      version: ['[href^="store/free-version"]', 'text', /\((.*?)\)/],
      download: '[href^="store/free-version"]',
      install: 'install_inno'
    },
    winfoom: {
      site: {
        GitHub: 'https://github.com/ecovaci/winfoom/releases/latest'
      },
      install: 'install'
    },
    WinFsp: {
      site: {
        GitHub: 'https://github.com/billziss-gh/winfsp/releases/latest'
      },
      versionChoice: '.msi',
      install: ['install_msi', null, 'bin/launcher-x64.exe'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/billziss-gh/winfsp/releases'
          }
        }
      }
    },
    WinHex: {
      commercial: 3,
      url: 'http://www.x-ways.net/winhex/',
      version: 'strong',
      changelog: ['http://www.winhex.com/winhex/whatsnew.html', '[width="90%"]'],
      download: 'http://www.x-ways.net/winhex.zip',
      install: 'install'
    },
    WinLaunch: {
      withoutHeader: true,
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/Launchers-Shutdown-Tools/C0rrupted-WinLaunch.shtml'
      },
      download: 'https://sourceforge.net/projects/winlaunch/files/WinLaunch.zip/download',
      install: 'install'
    },
    WinMerge: {
      withoutHeader: true,
      url: 'http://winmerge.org/downloads/',
      version: 'h3',
      changelog: {
        url: 'https://winmerge.org/docs/changelog.php',
        selector: '#content>pre',
        attr: 'text',
        match: /^WinMerge [\d.]+/,
        split: true
      },
      download: 'a[href$="x64-exe.zip"]',
      install: 'install'
    },
    WinMute: {
      site: {
        GitHub: 'https://github.com/lx-s/WinMute/releases/latest'
      },
      versionChoice: 'x64.zip',
      install: 'install'
    },
    WinNc: {
      commercial: 3,
      url: 'https://www.winnc.com/download/',
      version: 'h2',
      changelog: {
        selector: '.section_wrapper',
        attr: 'text',
        match: /^WinNc [\d.]+/,
        split: true
      },
      download: 'http://www.winnc.com/setup.exe',
      install: 'install_inno'
    },
    WinNTSetup: {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/winntsetup,1.html'
      },
      install: 'install'
    },
    WinPcap: {
      url: 'https://www.winpcap.org/install/default.htm',
      version: 'p+h1',
      changelog: ['https://www.winpcap.org/misc/changelog.htm', '.content>ul'],
      download: 'a[href$=".exe"]',
      install: 'install_nsis'
    },
    winPenPack: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/winpenpack/files/winPenPack_Suites/releases/'
      },
      downloadChoice: [null, 'win64.zip'],
      install: 'install'
    },
    winpty: {
      site: {
        GitHub: 'https://github.com/rprichard/winpty/releases/latest'
      },
      install: ['install', null, 'x64\\bin']
    },
    WinRAR: {
      commercial: 2,
      url: 'https://www.rarlab.com/download.htm',
      version: ['a[href^="/rar/winrar-x64"][href$=".exe"]', 'text', /\(64 bit\)\s+(.*)/],
      changelog: {
        url: 'https://rarlab.com/rarnew.htm',
        selector: 'pre',
        attr: 'text',
        match: /Version [\d.]+/,
        split: true
      },
      download: 'a[href^="/rar/winrar-x64"][href$=".exe"]',
      fixedPath: '%ProgramFiles%\\WinRAR\\WinRAR.exe',
      install: 'install_cli_s',
      other: {
        '550sc': {
          download: 'https://www.win-rar.com/fileadmin/winrar-versions/sc20170830/wrr/winrar-x64-550sc.exe',
          afterInstall: info => {
            require('fs').writeFileSync(require('path').join(info.parentPath, 'rarreg.key'), [
              'RAR registration data',
              'HelloWorld',
              'Unlimited Company License',
              'UID=a01c6008e0689b098478',
              '6412212250847815c9a3320e7f6dc1ddb915f22b1f0987719f070a',
              '5fdfdbeacdf9c2f3270160dafafd16abdc2494cfb27b7083aa9283',
              '6c1e746e7788589e41f0a4e7e180ec401406f7cbecaef27664154d',
              'f87828bd15a59e3baaa103b32cdd5894ca601fda5e772702dbf028',
              '62722040f2759ccae48e77c7548c581d6bafc7407bec401406f7cb',
              'ecaef2768636822d7eadb0f102410a33a75b7a05538981ba609b03',
              '486733b38939ad7832a6b78eee20f4743fe81f67c3a00657579779'
            ].join('\r\n'));
          }
        }
      }
    },
    'WinReducer EX-100': {
      commercial: 3,
      url: 'https://www.winreducer.net/winreducer-ex-100.html',
      version: ['h2', 'text', /WinReducer EX-100 - v(.*)/],
      changelog: {
        url: '[href$="changelog_wrex100.txt"]',
        match: /^\* WinReducer EX-100 - v[\d.]+/,
        split: true
      },
      download: '[href$="winreducerex100_x64.zip"]',
      install: 'install'
    },
    WinSCP: {
      withoutHeader: true,
      url: 'https://winscp.net/eng/download.php',
      version: 'h1',
      changelog: ['https://winscp.net/eng/docs/history', 'section[id]'],
      download: async (res, $, fns, choice) => {
        const uri1 = $('a[href$="Setup.exe"]').eq(0).attr('href');
        const res1 = await fns.req(uri1);
        const $1 = fns.cheerio.load(res1.body);
        return $1('a[href$="Setup.exe/download"]').eq(0).attr('href');
      },
      install: 'install_inno'
    },
    WinSizeChanger3: {
      url: 'https://waiei.net/soft_wsc.html',
      version: '#download h1',
      download: '#download [href$=".zip"]',
      install: 'install'
    },
    Winspector: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Security/Security-Related/Winspector.shtml'
      },
      install: 'install_inno'
    },
    'WinSpy++': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Programming/Other-Programming-Files/WinSpyPlusPlus.shtml'
      },
      install: 'install_zipped_single'
    },
    WinSpy: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/winspyex/files/'
      },
      downloadChoice: [null, '.7z'],
      install: 'install'
    },
    WinSSHTerm: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Network-Tools/Telnet-SSH-Clients/WinSSHTerm.shtml'
      },
      install: ['install_msi', null, 'WinSSHTerm.exe']
    },
    winsw: {
      site: {
        GitHub: 'https://github.com/winsw/winsw/releases/latest'
      },
      versionChoice: 'NET4.exe',
      install: 'install_single'
    },
    WinUAE: {
      url: 'http://www.winuae.net/download/',
      version: '.entry-content>p',
      download: '[href$="x64.zip"]',
      install: 'install_zipped_single'
    },
    WinXcorners: {
      site: {
        GitHub: 'https://github.com/vhanla/winxcorners/releases/latest'
      },
      install: 'install_zipped_single'
    },
    winyl: {
      site: {
        GitHub: 'https://github.com/winyl-player/winyl/releases/latest'
      },
      versionChoice: 'portable_x64.zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/winyl-player/winyl/releases'
          }
        }
      }
    },
    WinZip: {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Compression-tools/WinZip.shtml'
      },
      downloadChoice: 'x64',
      install: ['install_msi', null, 'winzip64.exe']
    },
    Wire: {
      site: {
        GitHub: 'https://github.com/wireapp/wire-desktop/releases/latest'
      },
      versionChoice: { filter: i => i.tag_name.match(/windows/), match: /windows\/(.*)/ },
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    WireGuard: {
      tags: ['proxy'],
      useProxy: true,
      url: 'https://build.wireguard.com/distros.json',
      version: (res) => res.json['windowsdl-win'].version,
      download: 'https://download.wireguard.com/windows-client/wireguard-amd64-{version}.msi',
      install: ['install_msi', null, 'wireguard.exe']
    },
    Wireshark: {
      url: 'https://www.wireshark.org/download.html',
      version: '[href="#group_accordion_stable"]',
      changelog: ['https://www.wireshark.org/docs/relnotes/wireshark-{version}.html', '#content>.sect1:nth-child(2)'],
      download: '.platform-win64+a',
      install: 'install_nsis',
      other: {
        // development: {
        //   version: '[href="#group_accordion_development"]',
        //   download: '#group_accordion_development .platform-win64+a'
        // },
        oldstable: {
          version: '[href="#group_accordion_oldstable"]',
          download: '#group_accordion_oldstable .platform-win64+a'
        },
        automated: {
          url: 'https://www.wireshark.org/download/automated/win64/',
          version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
            selector: '.indexcolname>a',
            sort: true,
            match: /Wireshark-win64-(.*?).exe/
          }),
          changelog: null,
          download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
            selector: '.indexcolname>a',
            sort: true,
            matchCheck: /Wireshark-win64-(.*?).exe/
          })
        }
      }
    },
    'WiX Toolset': {
      site: {
        GitHub: 'https://github.com/wixtoolset/wix3/releases/latest'
      },
      versionChoice: ['binaries.zip', /v([\d.]+)/, false, 'name'],
      install: 'install'
    },
    WizNotePlus: {
      site: {
        GitHub: 'https://github.com/altairwei/WizNotePlus/releases'
      },
      versionChoice: 'windows-v.*?.zip',
      install: 'install'
    },
    'WordPress.com': {
      site: {
        GitHub: 'https://github.com/Automattic/wp-desktop/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/Automattic/wp-desktop/releases'
          }
        }
      }
    },
    WordWeb: {
      commercial: 3,
      url: 'https://wordweb.info/',
      version: ['h2', 'text', /Latest Version ([\d.]+)/],
      changelog: ['https://wordweb.info/WhatsNew.html', '#require>div'],
      download: 'https://wordweb.info/cgi-bin/geoip/wordweb.exe',
      install: 'install'
    },
    'Work Crawler': {
      site: {
        GitHub: 'https://github.com/kanasimi/work_crawler/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Workrave: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/workrave/files/workrave/'
      },
      downloadChoice: [null, 'installer.exe'],
      install: 'install_inno_type'
    },
    Wormhole: {
      url: 'https://er.run/release',
      version: '.version>.text',
      changelog: '.release-note',
      download: 'https://files.octopusgame.com/os/WormholeInstaller.exe',
      install: 'install'
    },
    Wox: {
      site: {
        GitHub: 'https://github.com/Wox-launcher/Wox/releases/latest'
      },
      versionChoice: 'Wox-(.*).exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/Wox-launcher/Wox/releases'
          }
        }
      }
    },
    WriteFreely: {
      site: {
        GitHub: 'https://github.com/writeas/writefreely/releases/latest'
      },
      versionChoice: 'windows_amd64.zip',
      install: 'install'
    },
    wsltty: {
      site: {
        GitHub: 'https://github.com/mintty/wsltty/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install'
    },
    'WSUS Offline Update': {
      url: 'http://download.wsusoffline.net/',
      version: 'a[href$=".zip"]',
      changelog: '#content>p',
      download: 'a[href$=".zip"]',
      install: 'install'
    },
    Wu10Man: {
      site: {
        GitHub: 'https://github.com/WereDev/Wu10Man/releases/latest'
      },
      install: 'install'
    },
    wubiLex: {
      url: 'http://wubi.aardio.com/update/',
      version: (res) => res.json.version,
      changelog: (res) => res.json.description,
      download: 'http://wubi.aardio.com/update/wubiLex.7z',
      install: 'install_single'
    },
    WuMgr: {
      site: {
        GitHub: 'https://github.com/DavidXanatos/wumgr/releases/latest'
      },
      install: 'install'
    },
    'wxDownload Fast': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/dfast/files/wxDownload%20Fast/'
      },
      downloadChoice: [null, 'portable.zip'],
      install: 'install'
    },
    wxHexEditor: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/wxhexeditor/files/wxHexEditor/'
      },
      downloadChoice: [null, 'Win64.zip'],
      install: 'install'
    }
  }
};
