'use strict';

let download;

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    AAFRealtekMod: {
      site: {
        GitHub: 'https://github.com/AlanFinotty1995/AAFRealtekMod/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno_type'
    },
    aapt: {
      url: 'https://androidaapt.com/',
      version: ['.download-card>.item>.tips', 'text', /v(.*)/],
      download: 'https://dl.androidaapt.com/aapt-windows.zip',
      install: 'install_zipped_single'
    },
    aardio: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_542108.html'
      },
      download: 'http://ide.update.aardio.com/releases/aardio.7z',
      install: 'install'
    },
    abc: {
      site: {
        GitHub: 'https://github.com/appbaseio/abc/releases/latest'
      },
      versionChoice: 'windows.zip',
      install: 'install_zipped_single'
    },
    Abricotine: {
      site: {
        GitHub: 'https://github.com/brrd/Abricotine/releases/latest'
      },
      versionChoice: 'win32-x64.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    'ACBF Viewer': {
      url: 'https://launchpad.net/acbf/+download',
      version: '.listing td a[href$="exe"]',
      changelog: '[id^="release-information"]',
      download: '.listing td a[href$="exe"]',
      install: 'install_nsis'
    },
    'Access Bridge Explorer': {
      site: {
        GitHub: 'https://github.com/google/access-bridge-explorer/releases/latest'
      },
      install: 'install'
    },
    Accesser: {
      site: {
        GitHub: 'https://github.com/URenko/Accesser/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    'Ace Video Converter': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Multimedia/Video/Encoders-Converter-DIVX-Related/Ace-Video-Converter.shtml'
      },
      install: 'install_inno'
    },
    'Acrylic DNS Proxy': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/acrylic/files/Acrylic/'
      },
      versionChoice: /([\d.]+)/,
      downloadChoice: [null, 'Acrylic-Portable.zip'],
      install: 'install'
    },
    Actiona: {
      url: 'https://wiki.actiona.tools/doku.php?id=:en:start',
      version: 'p:has([href="/doku.php?id=en:changelog"])',
      changelog: {
        url: 'https://wiki.actiona.tools/doku.php?id=en:changelog',
        selector: '.page',
        attr: 'text',
        match: /^v[\d.]+/,
        split: true
      },
      download: 'a[href$="windows-64bit.7z"]',
      install: 'install'
    },
    'ActiveCollab-Electron': {
      site: {
        GitHub: 'https://github.com/nurtext/active-collab-desktop/releases'
      },
      versionChoice: 'win-x64(.*).zip',
      install: 'install'
    },
    ActiveCollab: {
      url: 'https://activecollab.com/help/release-notes/',
      version: 'h1',
      changelog: '.c-release-notes__content>ol',
      download: 'https://activecollab.com/api/v2/desktop-apps/activecollab/releases/win32/download',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    ActivePresenter: {
      commercial: 2,
      url: 'https://atomisystems.com/download/',
      version: '.et_pb_text_inner>h4',
      changelog: ['https://cdn.atomisystems.com/updates/ActivePresenter/v7/releasenotes_v7.html', '.version'],
      download: '.et_pb_button_0',
      install: 'install_inno',
      other: {
        6: {
          version: '.et_pb_text_inner>h4:contains("6")',
          changelog: ['https://cdn.atomisystems.com/updates/ActivePresenter/v6/releasenotes_v6.html', '.version'],
          download: '.et_pb_button_2'
        }
      }
    },
    'Ad Muncher': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Popup-Ad-Spyware-Blockers/Ad-Muncher.shtml'
      },
      download: 'http://www.admuncher.com/cgi-bin/download.pl/AM-Install.exe'
    },
    ADev: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/adev/files/ADev/'
      },
      versionChoice: /ADev-(.*)/,
      downloadChoice: [/ADev-(.*)/, /ADev-(.*?).zip/],
      install: 'install'
    },
    'Adobe Digital Editions': {
      url: 'https://www.adobe.com/solutions/ebook/digital-editions/download.html',
      version: '.text-light',
      changelog: {
        url: 'https://www.adobe.com/solutions/ebook/digital-editions/release-notes.html',
        selector: '.grid-cols-12',
        attr: 'text',
        match: /^Changes in ADE [\d.]+/,
        split: true
      },
      download: '[href*="adobe/digitaledition"][href$="Installer.exe"]',
      install: 'install_nsis'
    },
    AdoptOpenJDK: {
      url: 'https://github.com/AdoptOpenJDK',
      version: async (res, $, fns, choice = { version: 15, jvm: 'hotspot', type: 'jdk' }) => {
        const uri1 = `https://api.adoptopenjdk.net/v3/assets/feature_releases/${choice.version}/ga?jvm_impl=${choice.jvm}&vendor=adoptopenjdk`;
        // https://api.adoptopenjdk.net/v3/assets/feature_releases/11/ga?jvm_impl=hotspot&vendor=adoptopenjdk&
        // https://api.adoptopenjdk.net/v3/assets/latest/11/hotspot?release=latest&jvm_impl=hotspot&vendor=adoptopenjdk&
        const res1 = await fns.req(uri1);
        const info = res1.json.find(i => i.binaries.find(i => i.os === 'windows' && i.architecture === 'x64' && i.image_type === choice.type));
        download = info.binaries.find(i => i.os === 'windows' && i.architecture === 'x64' && i.image_type === choice.type).package.link;
        return info.version_data.semver;
      },
      download: () => download,
      install: 'install',
      other: {
        '15-hotspot-jdk': { versionChoice: { version: 15, jvm: 'hotspot', type: 'jdk' } }
      }
    },
    'Advanced Renamer': {
      commercial: 1,
      url: 'https://www.advancedrenamer.com/versionlog',
      version: '.siteblock>b',
      changelog: {
        selector: '.siteblock',
        attr: 'text',
        match: /Advanced Renamer [\d.]+/,
        split: true
      },
      download: 'https://www.advancedrenamer.com/down/advanced_renamer_portable.zip',
      install: 'install'
    },
    'Advanced REST Client': {
      site: {
        GitHub: 'https://github.com/advanced-rest-client/arc-electron/releases/latest'
      },
      versionChoice: 'setup.exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: { GitHub: 'https://github.com/advanced-rest-client/arc-electron/releases' }
        }
      }
    },
    Aegisub: {
      url: 'http://www.aegisub.org/downloads/',
      version: '#current+p>strong',
      changelog: {
        url: '[href^="../changelog/"]',
        selector: '.page-header+ul'
      },
      download: '[href$="portable-64.exe"]',
      install: 'install'
    },
    'Aero Glass': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Desktop-Enhancements/Other-Desktop-Enhancements/Aero-Glass.shtml'
      },
      versionChoice: /([\d.]+) For Windows 8\.1\+$/,
      downloadChoice: /for Windows 8\.1\+$/,
      install: 'install_inno',
      other: {
        8: {
          versionChoice: /([\d.]+) For Windows 8/,
          downloadChoice: /for Windows 8$/
        }
      }
    },
    'Agat Emulator': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/agatemulator/files/agatemulator/'
      },
      versionChoice: /(.*)/,
      downloadChoice: [null, /agatemulator-(.*?).exe/],
      install: 'install_inno'
    },
    age: {
      tags: ['open-source', 'command-line'],
      site: {
        GitHub: 'https://github.com/FiloSottile/age/releases'
      },
      versionChoice: 'windows-amd64.zip',
      install: 'install'
    },
    'AhMyth Android Rat': {
      site: {
        GitHub: 'https://github.com/AhMyth/AhMyth-Android-RAT/releases'
      },
      versionChoice: 'Win64.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    ahoy: {
      site: {
        GitHub: 'https://github.com/ahoy-cli/ahoy/releases/latest'
      },
      versionChoice: 'windows-amd64.exe',
      install: 'install_single'
    },
    AIDA64: {
      commercial: 2,
      url: 'https://www.aida64.co.uk/download',
      version: '.view-content>.pagecontent>div:nth-child(1) tbody>tr:nth-child(3)>td.version',
      changelog: async (res, $, fns, choice) => [(await fns.walkLink('https://www.aida64.co.uk/news', fns, {
        selector: 'a.title'
      }, {
        selector: '.body>h3+ul',
        attr: 'html'
      })), true],
      download: '.view-content>.pagecontent>div:nth-child(1) tbody>tr:nth-child(3)>td.button>a',
      install: 'install',
      other: {
        beta: {
          version: '.view-content>.pagecontent>div:nth-child(4) tbody>tr:nth-child(2)>td.version',
          download: '.view-content>.pagecontent>div:nth-child(4) tbody>tr:nth-child(2)>td.button>a'
        },
        Engineer: {
          version: '.view-content>.pagecontent>div:nth-child(1) tbody>tr:nth-child(5)>td.version',
          download: '.view-content>.pagecontent>div:nth-child(1) tbody>tr:nth-child(5)>td.button>a'
        },
        'Engineer-beta': {
          version: '.view-content>.pagecontent>div:nth-child(4) tbody>tr:nth-child(3)>td.version',
          download: '.view-content>.pagecontent>div:nth-child(4) tbody>tr:nth-child(3)>td.button>a'
        }
      }
    },
    aidoru: {
      site: {
        GitHub: 'https://github.com/ffwff/aidoru/releases/latest'
      },
      install: 'install'
    },
    AIMP: {
      url: 'http://www.aimp.ru/?do=download&os=windows',
      version: ['h1', 'text', /AIMP v([\d.]+), build ([\d.]+)/, '$1.$2'],
      changelog: ['https://www.aimp.ru/?do=changelog', '.card_content'],
      download: 'https://www.aimp.ru/?do=download.file&id=4',
      install: ['install_cli', null, ['/AUTO={dir}', '/PORTABLE', '/SILENT']]
    },
    'AIO Boot': {
      site: {
        GitHub: 'https://github.com/nguyentumine/AIO-Boot/releases/latest'
      },
      versionChoice: '.7z',
      install: 'install',
      other: {
        extractor: {
          versionChoice: 'AIO_Boot_Extractor.exe',
          install: 'install_single'
        }
      }
    },
    'Aircrack-ng': {
      url: 'https://github.com/aircrack-ng/aircrack-ng/releases/latest',
      version: ['.muted-link.css-truncate', 'text', /(.*)/],
      changelog: '.release-header+.markdown-body',
      download: 'https://download.aircrack-ng.org/aircrack-ng-{version}-win.zip',
      install: 'install'
    },
    'AirDC++': {
      site: {
        GitHub: 'https://github.com/airdcpp/airgit/releases/latest'
      },
      versionChoice: 'x64.7z',
      install: 'install'
    },
    AirDroid: {
      commercial: 2,
      site: {
        download: 'https://www.airdroid.com/get.html'
      },
      versionChoice: ['https://srv3.airdroid.com/p20/web/getbinaryredirect?type=exe', /AirDroid_Desktop_Client_(.*?).exe/],
      install: 'install_nsis'
    },
    AirExplorer: {
      commercial: 2,
      url: 'https://www.airexplorer.net/en/download.php',
      version: '.elementor-shortcode>h3',
      changelog: '.elementor-shortcode>h3+p',
      download: 'https://www.airexplorer.net/downloads/AirExplorer-OnlineInstaller.exe',
      install: 'install_nsis'
    },
    AirLink: {
      url: 'http://airlink.timelink.cn/download',
      version: ['.down_btn[href$=".exe"]', 'href', /AirLink ([\d.]+).exe/],
      changelog: ['http://airlink.timelink.cn/history', '.total_content'],
      download: '.down_btn[href$=".exe"]',
      install: 'install_nsis_cli',
      other: {
        max: {
          version: ['.down_btn[href$=".exe"][href*="AirLink(M)"]', 'href', /AirLink\(M\) ([\d.]+).exe/],
          download: '.down_btn[href$=".exe"][href*="AirLink(M)"]'
        }
      }
    },
    AirLiveDrive: {
      commercial: 2,
      url: 'https://www.airlivedrive.com/en/download/',
      version: '[id^="post"]>.entry>h2+h3',
      changelog: 'h2+h3+p',
      download: 'http://www.airlivedrive.com/downloads/AirLiveDrive-OfflineInstaller.exe',
      install: 'install_nsis'
    },
    AkelPad: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/akelpad/files/AkelPad%204/'
      },
      downloadChoice: [null, null, 'x64-setup.exe'],
      install: ['install_nsis', null, '$_11_']
    },
    Alacritty: {
      site: {
        GitHub: 'https://github.com/alacritty/alacritty/releases/latest'
      },
      versionChoice: 'windows-portable.zip',
      install: 'install'
    },
    alda: {
      site: {
        GitHub: 'https://github.com/alda-lang/alda/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    Alduin: {
      site: {
        GitHub: 'https://github.com/AlduinApp/alduin/releases/latest'
      },
      versionChoice: 'win.zip',
      install: 'install'
    },
    AlephNote: {
      site: {
        GitHub: 'https://github.com/Mikescher/AlephNote/releases/latest'
      },
      install: 'install'
    },
    ali: {
      site: {
        GitHub: 'https://github.com/nakabonne/ali/releases/latest'
      },
      versionChoice: 'windows_amd64.tar.gz',
      install: ['install_zipped', 'install_zipped_single']
    },
    'All About PDF': {
      commercial: 3,
      url: 'https://allaboutpdf.com/versionhistory',
      version: 'h3',
      changelog: {
        selector: '#content>div>div>div>div:nth-child(2)',
        attr: 'text',
        match: /^BUILD [\d.]+/,
        split: true
      },
      download: 'http://download.allaboutpdf.com/all-about-pdf.zip',
      install: 'install'
    },
    'AllMyNotes Organizer': {
      commercial: 3,
      url: 'https://www.vladonai.com/allmynotes-organizer-history-whats-new',
      version: 'h2',
      changelog: '[style="width: 100%;"]',
      download: 'https://www.vladonai.com/download.php?name=all-my-notes-organizer-portable-notetaking-app.zip',
      install: 'install'
    },
    ALLPlayer: {
      url: 'https://www.allplayer.org/en/',
      version: 'h2',
      download: 'http://allplayer.org/Download/ALLPlayerEN.exe',
      install: 'install_inno_type'
    },
    allTags: {
      url: 'https://alltags.net/?target=download&lang=en_us',
      version: '.alternating > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1)',
      changelog: ['https://alltags.net/?target=news&lang=en_us', '.content'],
      download: '[href$="64bit.zip"]',
      install: 'install'
    },
    'Allway Sync': {
      commercial: 3,
      url: 'https://allwaysync.com/content/get_news.php?number=1',
      version: '.list-group-item>h4',
      changelog: '.list-group-item',
      download: 'https://allwaysync.com/content/download/allwaysync-x64.exe',
      install: 'install_inno_type'
    },
    AlReader: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_33324.html'
      },
      download: 'https://www.alreader.com/download.php?file=AlReader2.Win32.en.zip',
      install: 'install'
    },
    Altair: {
      site: {
        GitHub: 'https://github.com/imolorhe/altair/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    'Altap Salamander': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/altap_salamander,1.html'
      },
      install: ['install_zipped', 'install', 'x64.exe']
    },
    AltDrag: {
      site: {
        GitHub: 'https://github.com/stefansundin/altdrag/releases/latest'
      },
      install: 'install'
    },
    AltStore: {
      site: {
        'GitHub-commit': 'https://github.com/rileytestut/AltStore/releases'
      },
      download: 'https://f000.backblazeb2.com/file/altstore/altinstaller.zip',
      install: ['install_zipped', 'install_msi', '.msi', null, 'AltServer.exe']
    },
    Amidst: {
      site: {
        GitHub: 'https://github.com/toolbox4minecraft/amidst/releases/latest'
      },
      versionChoice: '.jar',
      install: 'install_single'
    },
    Aminal: {
      site: {
        GitHub: 'https://github.com/liamg/aminal/releases/latest'
      },
      versionChoice: '-windows-amd64.exe',
      install: 'install_single'
    },
    Ampache: {
      site: {
        GitHub: 'https://github.com/ampache/ampache/releases/latest'
      },
      install: 'install'
    },
    Anaconda: {
      url: 'https://repo.anaconda.com/archive/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a[href$=".exe"]',
        sort: true,
        match: /Anaconda3-(.*?)-Windows-x86_64.exe/
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a[href$=".exe"]',
        sort: true,
        matchCheck: /Anaconda3-(.*?)-Windows-x86_64.exe/
      }),
      // https://docs.anaconda.com/anaconda/install/silent-mode/
      install: 'install_nsis_cli',
      other: {
        2: {
          version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
            selector: 'a[href$=".exe"]',
            sort: true,
            match: /Anaconda2-(.*?)-Windows-x86_64.exe/
          }),
          download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
            selector: 'a[href$=".exe"]',
            sort: true,
            matchCheck: /Anaconda2-(.*?)-Windows-x86_64.exe/
          })
        },
        mini: {
          url: 'https://repo.anaconda.com/miniconda/',
          version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
            selector: 'a[href$=".exe"]',
            sort: true,
            match: /Miniconda3-py\d+_(.*?)-Windows-x86_64.exe/
          }),
          download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
            selector: 'a[href$=".exe"]',
            sort: true,
            matchCheck: /Miniconda3-py\d+_(.*?)-Windows-x86_64.exe/
          })
        },
        mini2: {
          url: 'https://repo.anaconda.com/miniconda/',
          version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
            selector: 'a[href$=".exe"]',
            sort: true,
            match: /Miniconda2-py\d+_(.*?)-Windows-x86_64.exe/
          }),
          download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
            selector: 'a[href$=".exe"]',
            sort: true,
            matchCheck: /Miniconda2-py\d+_(.*?)-Windows-x86_64.exe/
          })
        }
      }
    },
    Anatine: {
      site: {
        GitHub: 'https://github.com/sindresorhus/anatine/releases/latest'
      },
      versionChoice: 'Anatine-windows-(.*?).zip',
      install: 'install'
    },
    'Android 调试助手': {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_656244.html'
      },
      install: 'install'
    },
    AndroidTools: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/android-tools/files/'
      },
      versionChoice: /AT-INSTALLER-([\d-]+).msi/,
      install: ['install_msi', null, 'AndroidTools.exe']
    },
    Angband: {
      site: {
        GitHub: 'https://github.com/angband/angband/releases/latest'
      },
      versionChoice: '-win.zip',
      install: 'install'
    },
    'angr Management': {
      site: {
        GitHub: 'https://github.com/angr/angr-management/releases'
      },
      versionChoice: 'win64.zip',
      install: 'install'
    },
    'Angry IP Scanner': {
      site: {
        GitHub: 'https://github.com/angryip/ipscan/releases/latest'
      },
      versionChoice: 'win64-(.*).exe',
      install: 'install_single'
    },
    AniGamerDownloader: {
      site: {
        GitHub: 'https://github.com/sakuraakira/AniGamerDownloader/releases/latest'
      },
      install: 'install'
    },
    Anime4K: {
      site: {
        GitHub: 'https://github.com/bloc97/Anime4K/releases/latest'
      },
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/bloc97/Anime4K/releases'
          }
        }
      }
    },
    Anime4KCPP: {
      site: {
        GitHub: 'https://github.com/TianZerL/Anime4KCPP/releases/latest'
      },
      versionChoice: 'Anime4KCPP_GUI-(.*?)-Win64-msvc.7z',
      install: 'install',
      other: {
        cli: {
          versionChoice: 'Anime4KCPP_CLI-(.*?)-Win64-msvc.7z'
        }
      }
    },
    Anki: {
      site: {
        GitHub: 'https://github.com/ankitects/anki/releases/latest'
      },
      versionChoice: 'windows.exe',
      install: 'install'
    },
    annie: {
      site: {
        GitHub: 'https://github.com/iawia002/annie/releases/latest'
      },
      versionChoice: 'Windows_64-bit.zip',
      install: 'install_zipped_single'
    },
    'Another Redis DeskTop Manager': {
      site: {
        GitHub: 'https://github.com/qishibo/AnotherRedisDesktopManager/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    AntDownloadManager: {
      commercial: 2,
      url: 'https://antdownloadmanager.com/download.php',
      version: ['.download_header:contains("Current version")', 'text', /Current version: (\d+[\d.]+\d+) Build (\d+) \(.*$/, '$1.$2'],
      changelog: '.download_item>ul',
      download: 'https://antdownloadmanager.com/cgi/download.cgi',
      install: ['install_inno', null, { '{code_AppPath}': '{dir}' }],
      other: {
        beta: {
          version: '.download_item_beta .download_a>a',
          download: ['.download_item_beta .download_a>a', 'antdmexe']
        }
      }
    },
    AntiMicro: {
      tags: ['game-tools'],
      site: {
        GitHub: 'https://github.com/AntiMicro/antimicro/releases/latest'
      },
      versionChoice: 'portable.zip',
      install: 'install'
    },
    AnyBurn: {
      url: 'http://www.anyburn.com/cn/download.htm',
      version: '[href="../anyburn_setup.exe"]',
      changelog: 'blockquote+p+ul+p+p[align="left"]+ul',
      download: 'http://www.anyburn.com/anyburn_setup_x64.exe',
      install: 'install_nsis'
    },
    AnyDesk: {
      commercial: 1,
      url: 'https://anydesk.com/platforms/windows',
      version: '#download-info',
      changelog: '#changelog .any-list-icon',
      download: 'http://download.anydesk.com/AnyDesk.exe',
      install: 'install_single'
    },
    'AnyTXT Searcher': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/anytxt/files/'
      },
      versionChoice: /AnyTXT.Searcher.([\d.]+).exe/,
      downloadChoice: /AnyTXT.Searcher.([\d.]+).exe/,
      install: 'install_inno'
    },
    AnyVideoConverter: {
      commercial: 2,
      url: 'https://www.any-video-converter.com/products/for_video_ultimate/whatnew.php',
      version: '.number',
      changelog: '.updatelog',
      download: 'https://www.any-video-converter.com/avc-ultimate.exe',
      install: 'install_inno'
    },
    Ao: {
      site: {
        GitHub: 'https://github.com/klaussinani/ao/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    'Apabi Reader': {
      url: 'http://www.apabi.cn/download/',
      version: ['[href$=".exe"]', 'href', /PRCReaderSetup-(.*?).exe/],
      download: '[href$=".exe"]'
    },
    'Apache OpenOffice': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/openofficeorg.mirror/files/'
      },
      downloadChoice: [null, 'binaries', 'en-US', 'Win_x86_install_en-US.exe'],
      install: 'install_nsis_cli'
    },
    'ApexDC++': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/apexdc/files/ApexDC%2B%2B/'
      },
      downloadChoice: [null, 'x64_setup.exe'],
      install: 'install_inno'
    },
    apitrace: {
      site: {
        GitHub: 'https://github.com/apitrace/apitrace/releases/latest'
      },
      versionChoice: 'win64.7z',
      install: 'install'
    },
    'APK Organize': {
      url: 'https://forum.xda-developers.com/showthread.php?t=1948426',
      version: '[href^="attachment.php"]:contains("APK Organize")',
      download: '[href^="attachment.php"]:contains("APK Organize")',
      install: 'install_zipped_single'
    },
    'APK-Info': {
      site: {
        GitHub: 'https://github.com/Enyby/APK-Info/releases/latest'
      },
      install: 'install'
    },
    ApkEasyTool: {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Programming/Debuggers-Decompilers-Dissasemblers/Apk-Easy-Tool.shtml'
      },
      install: ['install_msi', null, 'apkeasytool.exe']
    },
    ApkFileManager: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/apkfilemanager/files/Unstable%20or%20Beta%20Builds/Windows/'
      },
      versionChoice: /apkFileManager_v([\d.]+).zip/,
      install: 'install'
    },
    ApkShellext: {
      site: {
        GitHub: 'https://github.com/kkguo/apkshellext/releases'
      },
      versionChoice: 'ApkShellext2.7z',
      install: 'install'
    },
    ApkStudio: {
      site: {
        GitHub: 'https://github.com/vaibhavpandeyvpz/apkstudio/releases/latest'
      },
      versionChoice: 'x64.zip',
      install: 'install'
    },
    Apktool: {
      site: {
        GitHub: 'https://github.com/iBotPeaches/Apktool/releases/latest'
      },
      versionChoice: '.jar',
      install: 'install_single'
    },
    AppGet: {
      site: {
        GitHub: 'https://github.com/appget/appget/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno'
    },
    Appium: {
      site: {
        GitHub: 'https://github.com/appium/appium-desktop/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/appium/appium-desktop/releases'
          }
        }
      }
    },
    AppServ: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/appserv/files/AppServ%20Open%20Project/'
      },
      downloadChoice: [null, 'appserv-x64-(.*?).exe'],
      install: 'install_nsis_cli'
    },
    'Archivarius 3000': {
      commercial: 3,
      // url: 'http://www.likasoft.com/download.shtml',
      // version: '.red',
      // changelog: ['http://www.likasoft.com/news.shtml', 'h3+p+ul'],
      // download: 'http://www.likasoft.com/download/arch3000.x64.exe',
      site: {
        // Softpedia: 'https://www.softpedia.com/get/System/File-Management/Archivarius-3000.shtml'
        // TechSpot: 'https://www.techspot.com/downloads/407-archivarius-3000.html'
        Softonic: 'https://en.softonic.com/download/archivarius/windows/post-download'
      },
      // versionChoice: '64-bit',
      install: 'install_inno_cli'
    },
    Arctime: {
      commercial: 2,
      url: 'https://arctime.org/download.html',
      version: '#u6872-2',
      changelog: {
        url: 'http://arctime.cn/changelog.html',
        selector: '#u608-309',
        attr: 'text',
        match: /^Arctime Pro [\d.]+/,
        split: true
      },
      download: 'https://t.arctime.cn/ap2w64',
      install: 'install',
      other: {
        free: {
          commercial: 0,
          version: '#u886-2',
          changelog: {
            url: 'https://arctime.org/changelog.html',
            selector: '#u6750-1427',
            attr: 'text',
            match: /^Arctime [\d.]+/,
            split: true
          },
          download: 'https://t.arctime.cn/a1w64'
        }
      }
    },
    ARDC: {
      url: 'https://www.cnblogs.com/we-hjb/p/10989928.html',
      version: ['#cnblogs_post_body', 'text', /安卓投屏助手\((.*?)\)/],
      changelog: {
        selector: '#cnblogs_post_body',
        attr: 'text',
        match: /^安卓投屏助手\((.*?)\)/,
        split: true
      },
      download: '#cnblogs_post_body a[href$=".7z"]',
      install: 'install'
    },
    'aria2-build-msys2': {
      site: {
        GitHub: 'https://github.com/myfreeer/aria2-build-msys2/releases/latest'
      },
      versionChoice: 'aria2c.7z',
      install: 'install_zipped_single'
    },
    'aria2-desktop': {
      site: {
        GitHub: 'https://github.com/wapznw/aria2desktop/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    aria2: {
      site: {
        GitHub: 'https://github.com/aria2/aria2/releases/latest'
      },
      versionChoice: ['win-64bit(.*).zip', /release-(.*)/],
      install: ['install_zipped_single', 'aria2c.exe']
    },
    'AriaNg GUI': {
      site: {
        GitHub: 'https://github.com/Xmader/aria-ng-gui/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    ArsClip: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Office-tools/Clipboard/ArsClip.shtml'
      },
      install: 'install',
      other: {
        beta: {
          versionChoice: 'Test',
          downloadChoice: 'Beta'
        }
      }
    },
    Artweaver: {
      commercial: 2,
      url: 'https://www.artweaver.de/en/changelog',
      version: '.tabs_container>div:nth-child(2) a[href^="/en/help/"]',
      changelog: {
        url: '.tabs_container>div:nth-child(2) a[href^="/en/help/"]',
        selector: '.content'
      },
      download: 'https://www.artweaver.de/direct/ArtweaverPlus.exe',
      install: 'install_inno_type',
      other: {
        free: {
          commercial: 0,
          version: '.tabs_container>div:nth-child(3) a[href^="/en/help/"]',
          changelog: {
            url: '.tabs_container>div:nth-child(3) a[href^="/en/help/"]',
            selector: '.content'
          },
          download: 'https://www.artweaver.de/direct/Artweaver.exe'
        }
      }
    },
    'AS SSD Benchmark': {
      url: 'https://www.alex-is.de/PHP/fusion/downloads.php?download_id=9',
      version: 'h2',
      changelog: {
        url: 'https://www.alex-is.de/PHP/fusion/articles.php?article_id=4',
        selector: '.main-body:contains("Changelog:")',
        attr: 'text',
        match: /^[\d.]+/,
        split: true
      },
      download: 'https://www.alex-is.de/progs/AS%20SSD%20Benchmark.zip',
      install: 'install_zipped_single'
    },
    AssaultCube: {
      site: {
        GitHub: 'https://github.com/assaultcube/AC/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_nsis'
    },
    AstroGrep: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/astrogrep/files/AstroGrep%20%28Win32%29/'
      },
      downloadChoice: [null, 'portable.zip'],
      install: 'install'
    },
    Atom: {
      site: {
        GitHub: 'https://github.com/atom/atom/releases/latest'
      },
      versionChoice: '-x64-windows.zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/atom/atom/releases'
          }
        }
      }
    },
    'ATTO Disk Benchmark': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/Benchmarks/ATTO-Disk-Benchmark.shtml'
      },
      install: ['install_zipped', 'install_zipped', null, 'install_msi_single', 'setup.msi', 'ATTODiskBenchmark.exe']
    },
    Audacious: {
      url: 'https://audacious-media-player.org/download',
      version: 'a[href$="win32.zip"]',
      download: 'a[href$="win32.zip"]',
      install: 'install'
    },
    Audacity: {
      site: {
        FossHub: 'https://www.fosshub.com/Audacity.html'
      },
      downloadChoice: /audacity-win-.*?.exe/,
      install: 'install_inno'
    },
    'Audio Router': {
      site: {
        GitHub: 'https://github.com/audiorouterdev/audio-router/releases/latest'
      },
      install: 'install'
    },
    AudioPlaybackConnector: {
      site: {
        GitHub: 'https://github.com/ysc3839/AudioPlaybackConnector/releases/latest'
      },
      versionChoice: 'AudioPlaybackConnector64.exe',
      install: 'install_single'
    },
    AudioSwitch: {
      site: {
        GitHub: 'https://github.com/sirWest/AudioSwitch/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno_single'
    },
    AudioSwitcher: {
      site: {
        GitHub: 'https://github.com/xenolightning/AudioSwitcher_v1/releases/latest'
      },
      install: 'install_zipped_single'
    },
    Aurora: {
      site: {
        GitHub: 'https://github.com/antonpup/Aurora/releases/latest'
      },
      install: 'install'
    },
    AuroraDNS: {
      site: {
        GitHub: 'https://github.com/mili-tan/AuroraDNS.GUI/releases/latest'
      },
      versionChoice: 'Release.zip$',
      install: 'install'
    },
    Authy: {
      commercial: 2,
      site: {
        download: 'https://authy.com/download/'
      },
      versionChoice: 'https://electron.authy.com/download?channel=stable&arch=x64&platform=win32&version=latest&product=authy',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    AutoClicker: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/AutoClicker-2.shtml'
      },
      download: 'https://sourceforge.net/projects/orphamielautoclicker/files/AutoClicker.exe/download',
      install: 'install_single'
    },
    AutoDarkMode: {
      site: {
        GitHub: 'https://github.com/Armin2208/Windows-Auto-Night-Mode/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/Armin2208/Windows-Auto-Night-Mode/releases'
          }
        }
      }
    },
    AutoHotkey: {
      site: {
        GitHub: 'https://github.com/Lexikos/AutoHotkey_L/releases/latest'
      },
      versionChoice: '.exe',
      // download: 'https://www.autohotkey.com/download/ahk.zip',
      install: 'install',
      afterInstall: info => {
        const path = require('path');
        require('fs').copyFileSync(path.resolve(info.parentPath, 'AutoHotkeyU64.exe'), path.resolve(info.parentPath, 'AutoHotkey.exe'));
      }
    },
    'Automatic Printer Switcher': {
      site: {
        GitHub: 'https://github.com/faisalthaheem/automatic-printer-switcher/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno_single'
    },
    AUXPI: {
      site: {
        GitHub: 'https://github.com/0xDkd/auxpi/releases/latest'
      },
      versionChoice: 'windows.tar.gz',
      install: ['install_zipped', 'install']
    },
    'Avant Browser': {
      url: 'http://www.avantbrowser.com/new.aspx',
      version: ['h2', 'text', /Avant Browser (\d{4}) build (\d+), .*$/, '$1.$2'],
      changelog: '.new',
      download: 'http://dl3.avantbrowser.com/avant.exe',
      install: 'install'
    },
    Avanti: {
      url: 'http://avanti.arrozcru.org/',
      version: ['[href^="downloads/avanti-"][href$=".7z"]', 'href', /avanti-([\d]+)\.7z$/],
      changelog: {
        url: 'http://avanti.arrozcru.org/changelog.htm',
        selector: '.txt0',
        attr: 'text',
        match: /AVANTI [\d.]+/,
        split: true
      },
      download: '[href^="downloads/avanti-"][href$=".7z"]',
      install: ['install', null, 'Avanti-ffmpeg-GUI-*\\*']
    },
    avbook: {
      site: {
        GitHub: 'https://github.com/guyueyingmu/avbook/releases'
      },
      versionChoice: ['.7z', /v\.(.*)/],
      install: 'install'
    },
    Avidemux: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/avidemux/files/avidemux/'
      },
      downloadChoice: [null, /64bits(.*?).exe/]
    },
    Avisynth: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/avisynth2/files/AviSynth%202.6/'
      },
      versionChoice: /AviSynth (.*)$/,
      downloadChoice: [/AviSynth (.*)$/, /.exe/],
      install: 'install_nsis',
      other: {
        alpha: {
          site: {
            SourceForge: 'https://sourceforge.net/projects/avisynth2/files/AviSynth_Alpha_Releases/'
          },
          versionChoice: /AVS (.*)$/,
          downloadChoice: [/AVS (.*)$/, /.exe/]
        }
      }
    },
    Avocode: {
      commercial: 3,
      url: 'https://avocode.com/changelog',
      version: ['[data-test="changelog__dynamic__log"]', 'id', /(.*)/],
      changelog: '[data-test="changelog__dynamic__log"]>div',
      download: 'https://manager.avocode.com/download/avocode-app/windows-x64/',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    Awake: {
      site: {
        GitHub: 'https://github.com/gdegeneve/Awake/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    'Awesome Duplicate Photo Finder': {
      url: 'https://www.duplicate-finder.com/photo-download.html',
      version: '.post>.entry>div>p:last-child',
      download: 'https://www.duplicate-finder.com/files/awesome_photo_finder.zip',
      install: 'install_zipped_single'
    },
    AwesomeBump: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/awesomebump.mirror/files/'
      },
      versionChoice: /Winx32v(.*)/,
      downloadChoice: [/Winx32v(.*)/, /AwesomeBumpV.*.zip/],
      install: 'install'
    },
    AwesomeWallpaper: {
      site: {
        GitHub: 'https://github.com/AlexanderPro/AwesomeWallpaper/releases/latest'
      },
      install: 'install'
    },
    'AWS Vault': {
      site: {
        GitHub: 'https://github.com/99designs/aws-vault/releases/latest'
      },
      versionChoice: 'windows-386.exe',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/99designs/aws-vault/releases'
          }
        }
      }
    },
    axel: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/axel4windows/files/'
      },
      downloadChoice: [null, '.exe'],
      install: 'install_single'
    },
    AxureRP: {
      commercial: 3,
      url: 'https://www.axure.com/release-history',
      version: '.b-sidebar-box__content>h3',
      changelog: '.b-sidebar-box__content>ul',
      // https://d3uii9pxdigrx1.cloudfront.net/AxureRP-Setup.exe
      // https://maxure.s3.amazonaws.com/AxureRP-Setup.exe
      download: 'https://axure.cachefly.net/AxureRP-Setup.exe',
      install: ['install_wix', null, /AxureRp/, 'AxureRP9.exe']
    },
    Azardi: {
      url: 'http://azardi.infogridpacific.com/azardi-download.html',
      version: 'h1',
      download: '.button-igp>a[href$=".exe"]',
      install: 'install_inno'
    }
  }
};
