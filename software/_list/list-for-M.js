'use strict';

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    'M3U8-Downloader': {
      site: {
        GitHub: 'https://github.com/magicdmer/M3U8-Downloader/releases/latest'
      },
      install: 'install'
    },
    Machete: {
      commercial: 2,
      url: 'http://www.machetesoft.com/machete-version-history.html',
      version: 'h1>strong',
      changelog: 'ul.pb-2',
      download: 'http://www.machetesoft.com/downloads/MacheteInst.msi',
      install: ['install_msi', null, 'Machete.exe'],
      other: {
        lite: {
          commercial: 0,
          download: 'http://www.machetesoft.com/downloads/MacheteLiteInst.msi',
          install: ['install_msi', null, 'MacheteLite.exe']
        }
      }
    },
    'macintosh.js': {
      site: {
        GitHub: 'https://github.com/felixrieseberg/macintosh.js/releases/latest'
      },
      versionChoice: 'setup-x64.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    'Macro Creator': {
      site: {
        GitHub: 'https://github.com/Pulover/PuloversMacroCreator/releases/latest'
      },
      install: ['install', null, 'MacroCreatorPortable\\x64']
    },
    MacType: {
      site: {
        GitHub: 'https://github.com/snowie2000/mactype/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno_cli',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/snowie2000/mactype/releases'
          },
          versionChoice: '.exe'
        }
      }
    },
    'MadEdit-Mod': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/madedit-mod/files/'
      },
      downloadChoice: [null, 'X64.7z'],
      install: 'install'
    },
    MadVR: {
      url: 'http://madvr.com/',
      version: 'body > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(6) > td:nth-child(3) > div > p:nth-child(1)',
      download: 'http://madshi.net/madVR.zip',
      install: 'install'
    },
    magnetW: {
      site: {
        GitHub: 'https://github.com/xiandanin/magnetW/releases/latest'
      },
      versionChoice: 'win.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    MagnetY: {
      site: {
        GitHub: 'https://github.com/HexPang/MagnetY/releases/latest'
      },
      versionChoice: '.rar',
      install: 'install'
    },
    Mahou: {
      site: {
        GitHub: 'https://github.com/BladeMight/Mahou/releases/latest'
      },
      install: 'install'
    },
    Mailbird: {
      commercial: 3,
      url: 'https://www.getmailbird.com/ReleaseNotes/LatestReleaseNotes.html',
      version: 'p',
      changelog: 'ul',
      download: 'https://download.getmailbird.com/installers/MailbirdSetup.exe',
      install: 'install_ai'
    },
    Mailspring: {
      site: {
        GitHub: 'https://github.com/Foundry376/Mailspring/releases/latest'
      },
      versionChoice: 'full.nupkg',
      install: ['install', null, 'lib\\net*']
    },
    'MajorGeeks Windows Tweaks': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/majorgeeks_registry_tweaks,1.html'
      },
      install: 'install'
    },
    'Make SFX': {
      url: 'https://revocue.cz/en/make-sfx/index.php',
      version: '.tdownloadx>tbody>tr:nth-child(2)>td:nth-child(2)',
      download: 'https://revocue.cz/download/makesfx.exe',
      install: 'install_single'
    },
    MakeInstantPlayer: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/muldersoft/files/Make%20Instant%20Player/'
      },
      versionChoice: /\.([\d-]+).exe/,
      install: 'install_nsis'
    },
    MakeMKV: {
      url: 'https://www.makemkv.com/download/',
      version: '[href^="/download/Setup"][href$=".exe"]',
      changelog: 'h4:contains("Revision history")+li+ul',
      download: '[href^="/download/Setup"][href$=".exe"]',
      install: 'install_nsis'
    },
    MAME: {
      site: {
        GitHub: 'https://github.com/mamedev/mame/releases/latest'
      },
      versionChoice: ['64bit.exe', /([\d.]+)/, false, 'name'],
      install: 'install'
    },
    Mancy: {
      site: {
        GitHub: 'https://github.com/princejwesley/Mancy/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    MangaMeeya: {
      site: {
        'Tencent SoftMgr': 'https://pc.qq.com/detail/12/detail_11332.html'
      },
      install: 'install_zipped_single'
    },
    MangaRipper: {
      site: {
        GitHub: 'https://github.com/NguyenDanPhuong/MangaRipper/releases/latest'
      },
      install: 'install'
    },
    ManicTime: {
      commercial: 2,
      url: 'https://www.manictime.com/download/',
      version: 'div>b',
      changelog: ['https://www.manictime.com/Releases/', '.col-md-8'],
      download: 'a[event-action="usb"]',
      install: 'install'
    },
    Manta: {
      site: {
        GitHub: 'https://github.com/hql287/Manta/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    'Mark Text': {
      site: {
        GitHub: 'https://github.com/marktext/marktext/releases/latest'
      },
      versionChoice: 'x64-win.zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/marktext/marktext/releases'
          }
        }
      }
    },
    'Markdown Edit': {
      site: {
        GitHub: 'https://github.com/mike-ward/Markdown-Edit/releases/latest'
      },
      install: 'install'
    },
    'Markdown 工具箱': {
      site: {
        GitHub: 'https://github.com/HaujetZhao/Markdown-Toolbox/releases/latest'
      },
      versionChoice: '.7z',
      install: 'install'
    },
    MarkdownMonster: {
      commercial: 3,
      site: {
        GitHub: 'https://github.com/RickStrahl/MarkdownMonster/releases'
      },
      versionChoice: (i) => !i.prerelease,
      download: 'https://west-wind.com/files/MarkdownMonsterPortable.zip',
      install: 'install'
    },
    MarkdownPad: {
      commercial: 2,
      url: 'https://markdownpad.com/news/',
      version: 'h4',
      changelog: '.blogpost',
      download: 'http://markdownpad.com/download/markdownpad2-setup.exe',
      install: 'install_ai'
    },
    Markn: {
      site: {
        GitHub: 'https://github.com/minodisk/markn/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    MarkRight: {
      site: {
        GitHub: 'https://github.com/dvcrn/markright/releases/latest'
      },
      versionChoice: 'Windows64.exe',
      install: 'install_nsis'
    },
    Marky: {
      site: {
        GitHub: 'https://github.com/vesparny/marky/releases/latest'
      },
      versionChoice: '-win.zip',
      install: 'install'
    },
    massCode: {
      site: {
        GitHub: 'https://github.com/antonreshetov/massCode/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    MassiGra: {
      site: {
        chocolatey: 'https://chocolatey.org/packages/massigra'
      },
      install: ['install_zipped', 'install', '.zip']
    },
    MasterSeeker: {
      url: 'http://master-seeker.com/WhatsNew',
      version: '.version',
      changelog: 'h2+div>ul',
      download: 'http://master-seeker.com/download',
      install: 'install_zipped_single'
    },
    Materialette: {
      site: {
        GitHub: 'https://github.com/mike-schultz/materialette/releases/latest'
      },
      versionChoice: 'windows(.*).zip',
      install: 'install'
    },
    'Mathpix Snipping Tool': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Office-tools/Text-editors/Mathpix-Snipping-Tool.shtml'
      },
      download: 'https://mathpix.com/win_app/mathpix_snipping_tool_setup.exe',
      install: 'install_inno'
    },
    MathType: {
      commercial: 3,
      url: 'https://docs.wiris.com/en/mathtype/release_notes/start',
      version: 'h2[id^="release_mathtype_desktop"]',
      changelog: {
        selector: '.dw-content',
        attr: 'text',
        match: /^Release MathType/,
        split: true
      },
      download: 'https://store.wiris.com/en/products/downloads/mathtype/installer/windows/zh',
      install: ['install_nsis', null, '$LOCALAPPDATA\\Temp\\mathtype.tmp']
    },
    Mattermost: {
      site: {
        GitHub: 'https://github.com/mattermost/desktop/releases/latest'
      },
      versionChoice: 'win-x64.zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/mattermost/desktop/releases'
          }
        }
      }
    },
    MaxLauncher: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/maxlauncher/files/MaxLauncher/'
      },
      downloadChoice: [null, /maxlauncher_(.*)_portable.zip/],
      install: 'install',
      other: {
        beta: {
          site: {
            SourceForge: 'https://sourceforge.net/projects/maxlauncher/files/MaxLauncher/Beta/'
          }
        }
      }
    },
    Maxthon: {
      url: 'http://www.maxthon.cn/mx5/changelog/',
      version: 'h2',
      changelog: {
        selector: 'body',
        attr: 'text',
        split: true
      },
      download: 'http://www.maxthon.cn/mx5/portable/dl',
      install: 'install'
    },
    MaxTo: {
      commercial: 3,
      url: 'https://maxto.net/en/release/stable',
      version: '.card-title',
      changelog: '.card-body>ul',
      download: '.card-body>a[href$="Setup.exe"]',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*'],
      other: {
        beta: {
          url: 'https://maxto.net/en/release/beta'
        },
        alpha: {
          url: 'https://maxto.net/en/release/alpha'
        }
      }
    },
    Maya: {
      site: {
        GitHub: 'https://github.com/25H/Maya/releases/latest'
      },
      install: 'install'
    },
    MCat: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/muldersoft/files/MCat/'
      },
      versionChoice: /\.([\d-]+).zip/,
      install: ['install_zipped_single', 'mcat.x64.exe']
    },
    Mcool: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Multimedia/Audio/Audio-Players/Mcool.shtml'
      },
      install: 'install'
    },
    MDict: {
      url: 'https://www.mdict.cn/wp/?page_id=5227',
      version: ['.et_pb_text_inner>ul>li:contains("Windows"):has([href$="MDictPC.7z"])', 'text', /\((.*?)\)/],
      download: 'https://www.mdict.cn/download/MDictPC2.7z',
      install: 'install',
      other: {
        1: {
          version: ['.et_pb_text_inner>ul>li:contains("Windows"):has([href$="MDictPC.zip"])', 'text', /\((.*?)\)/],
          download: 'https://www.mdict.cn/download/MDictPC.zip'
        }
      }
    },
    mdoc: {
      site: {
        GitHub: 'https://github.com/mono/api-doc-tools/releases/latest'
      },
      versionChoice: ['.zip$', /mdoc-(.*)/],
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/mono/api-doc-tools/releases'
          }
        }
      }
    },
    mdr: {
      site: {
        GitHub: 'https://github.com/MichaelMure/mdr/releases/latest'
      },
      versionChoice: 'mdr_windows_amd64.exe',
      install: 'install_single'
    },
    MedCalc: {
      commercial: 3,
      url: 'https://www.medcalc.org/download.php',
      version: '#content>h1',
      download: 'https://www.medcalc.org/download/medcalcsetup.msi',
      install: ['install_msi', null, 'medcalc.exe'],
      other: {
        'file viewer': {
          commercial: 0,
          download: 'https://www.medcalc.org/download/medcalcviewersetup.msi'
        }
      }
    },
    MediaCoder: {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/mediacoder_64_bit,1.html'
      },
      install: 'install_nsis'
    },
    'MediBang Paint': {
      commercial: 3,
      url: 'https://medibangpaint.com/en/app-download/',
      version: '.appdllink-content-version',
      changelog: ['https://medibangpaint.com/en/pc/releasenote/', '.product-about>h3+dl'],
      download: '[href$="64bit.exe"]',
      install: 'install_inno_type'
    },
    'MEGA Link Downloader': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Download-Managers/MEGA-Link-Downloader.shtml'
      },
      install: 'install_inno'
    },
    MEGAcmd: {
      url: 'https://raw.githubusercontent.com/meganz/MEGAcmd/master/build/megacmd/megacmd.changes',
      version: ['body', 'text', /- Update to version (\d+[\d.]+\d+):/],
      changelog: {
        match: /linux@mega.co.nz/,
        split: true
      },
      download: 'https://mega.nz/MEGAcmdSetup.exe',
      install: 'install_nsis'
    },
    MegaDownloader: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Download-Managers/MegaDownloader.shtml'
      },
      install: 'install_inno_single'
    },
    Megatools: {
      url: 'https://megatools.megous.com/builds/experimental/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        sort: true,
        match: /megatools-(.*?)-win64.zip/
      }),
      changelog: {
        url: 'https://megatools.megous.com/builds/NEWS',
        match: /^megatools [\d.]+/,
        split: true
      },
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        sort: true,
        matchCheck: /megatools-(.*?)-win64.zip/
      }),
      install: ['install', 'mega.ini']
    },
    MeGUI: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/megui/files/megui-stable/'
      },
      downloadChoice: [null, '-32.zip'],
      install: 'install'
    },
    MeiliSearch: {
      site: {
        GitHub: 'https://github.com/meilisearch/MeiliSearch/releases/latest'
      },
      versionChoice: 'meilisearch-windows-amd64.exe',
      install: 'install_single'
    },
    Meld: {
      url: 'http://meldmerge.org/',
      version: 'a[href$=".msi"]',
      changelog: ['https://meldmerge.org/news.html', '.news'],
      download: (res, $) => 'https://mirrors.ustc.edu.cn/gnome' + new URL($('a[href$=".msi"]').eq(0).attr('href')).pathname,
      install: ['install_msi', null, 'Meld.exe']
    },
    Mellow: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/mellow-io/mellow/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Melody: {
      site: {
        GitHub: 'https://github.com/flipped-aurora/melody/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_zipped_single'
    },
    memo: {
      url: 'https://github.com/btk/memo/blob/master/CHANGELOG.md',
      version: ['.markdown-body h3:has(.anchor[href^="#v"])', 'text', /^v(.*)/],
      download: 'https://usememo.com/MemoSetup.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    MEncoder264: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/muldersoft/files/MEncoder264/'
      },
      versionChoice: /\.([\d-]+).Full.exe/,
      install: 'install_nsis'
    },
    Mendeley: {
      commercial: 2,
      url: 'https://www.mendeley.com/release-notes',
      version: 'h3>a',
      changelog: '.views-field-field-content-items',
      download: 'https://www.mendeley.com/autoupdates/installer/Windows-x86/stable-incoming',
      install: 'install_nsis'
    },
    Mercurial: {
      url: 'https://www.mercurial-scm.org/wiki/Download',
      version: ['a[href$="x64.exe"]', 'href'],
      download: 'a[href$="x64.exe"]',
      install: 'install_inno'
    },
    Messenger: {
      site: {
        GitHub: 'https://github.com/aluxian/Messenger-for-Desktop/releases/latest'
      },
      versionChoice: 'win32-portable.zip',
      install: 'install'
    },
    MetaFox: {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/metafox,1.html'
      },
      install: 'install_inno'
    },
    mfcDuDownloadCodeGenerator: {
      site: {
        GitHub: 'https://github.com/jixunmoe/mfcDuDownloadCodeGenerator/releases/latest'
      },
      versionChoice: '.7z',
      install: 'install_zipped_single'
    },
    MFiles: {
      url: 'http://mfiles.maokebing.com/',
      version: ['[href*="win8-later"][href$="green.rar"]', 'href', /mfiles-helper-(.*)-win/],
      download: '[href*="win8-later"][href$="green.rar"]',
      install: 'install'
    },
    Micro: {
      site: {
        GitHub: 'https://github.com/zyedidia/micro/releases/latest'
      },
      versionChoice: 'win64.zip',
      install: 'install_zipped_single',
      other: {
        nightly: {
          site: {
            GitHub: 'https://github.com/zyedidia/micro/releases'
          },
          versionChoice: ['win64.zip', null, null, 'published_at']
        }
      }
    },
    'Midnight Commander': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/mcwin32/files/'
      },
      versionChoice: /mcwin32-(.*)-setup.exe/,
      install: 'install_inno'
    },
    MiKTeX: {
      url: 'https://miktex.org/download',
      version: ['#basic a[href$=".exe"]', 'href', /miktex-([\d.]+)-x64.exe/],
      download: '#basic a[href$=".exe"]'
    },
    Milkman: {
      site: {
        GitHub: 'https://github.com/warmuuh/milkman/releases/latest'
      },
      versionChoice: 'win64-bin.zip',
      install: 'install'
    },
    Min: {
      site: {
        GitHub: 'https://github.com/minbrowser/min/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    Mindustry: {
      tags: ['game'],
      site: {
        GitHub: 'https://github.com/Anuken/Mindustry/releases/latest'
      },
      versionChoice: 'Mindustry.jar',
      install: 'install_single'
    },
    Minecraft: {
      url: 'https://www.digminecraft.com/version_history/pc_mac.php',
      version: '.list-group-item_title',
      download: 'https://launcher.mojang.com/download/Minecraft.exe',
      install: 'install_single',
      other: {
        server: {
          url: 'https://www.minecraft.net/en-us/download/server/',
          version: '[aria-label="mincraft version"]',
          changelog: null,
          download: '[aria-label="mincraft version"]'
        },
        bedrock_server: {
          url: 'https://www.minecraft.net/en-us/download/server/bedrock/',
          version: ['[data-platform="serverBedrockWindows"]', 'href', /bedrock-server-(.*?).zip/],
          changelog: null,
          download: '[data-platform="serverBedrockWindows"]',
          install: 'install'
        }
      }
    },
    Minetest: {
      site: {
        GitHub: 'https://github.com/minetest/minetest/releases/latest'
      },
      versionChoice: 'win64.zip',
      install: 'install'
    },
    'MinGW-w64': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win64/Personal%20Builds/mingw-builds/'
      },
      downloadChoice: [null, 'win32', 'seh', /x86_64-(.*).7z/],
      install: 'install',
      afterInstall: info => {
        const path = require('path');

        require('fs').copyFileSync(path.resolve(info.parentPath, 'bin', 'mingw32-make.exe'), path.resolve(info.parentPath, 'bin', 'make.exe'));
      },
      other: {
        'win32-seh-x86_64': { downloadChoice: [null, 'win32', 'seh', /x86_64-(.*).7z/] },
        // 'win32-sjlj-i686': { downloadChoice: [null, 'win32', 'sjlj', /i686-(.*).7z/] },
        'win32-sjlj-x86_64': { downloadChoice: [null, 'win32', 'sjlj', /x86_64-(.*).7z/] },
        // 'win32-dwarf-i686': { downloadChoice: [null, 'win32', 'dwarf', /i686-(.*).7z/] },
        'posix-sjlj-x86_64': { downloadChoice: [null, 'posix', 'sjlj', /x86_64-(.*).7z/] },
        // 'posix-sjlj-i686': { downloadChoice: [null, 'posix', 'sjlj', /i686-(.*).7z/] },
        // 'posix-dwarf-i686': { downloadChoice: [null, 'posix', 'dwarf', /i686-(.*).7z/] },
        'posix-seh-x86_64': { downloadChoice: [null, 'posix', 'seh', /x86_64-(.*).7z/] }
      }
    },
    Minidumper: {
      site: {
        GitHub: 'https://github.com/goldshtn/minidumper/releases/latest'
      },
      install: 'install'
    },
    Miniflux: {
      site: {
        GitHub: 'https://github.com/miniflux/miniflux/releases/latest'
      },
      versionChoice: 'miniflux-windows-amd64',
      downloadChoice: ['miniflux-windows-amd64', '.exe'],
      install: 'install_single'
    },
    MiniGet: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_645998.html'
      },
      install: ['install', null, 'MiniGetPortable*\\']
    },
    Minikube: {
      site: {
        GitHub: 'https://github.com/kubernetes/minikube/releases/latest'
      },
      versionChoice: 'windows-amd64.exe',
      install: 'install_single'
    },
    Minime: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/minime-tool/files/Minime/'
      },
      versionChoice: /minime_v(.*).zip/,
      install: 'install_zipped_single'
    },
    minipad2: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Office-tools/Office-suites/minipad2.shtml'
      },
      install: 'install_zipped_single'
    },
    minisign: {
      site: {
        GitHub: 'https://github.com/jedisct1/minisign/releases/latest'
      },
      versionChoice: 'win32.zip',
      install: 'install_zipped_single'
    },
    Mipony: {
      url: 'https://www.mipony.net/en/download/',
      version: '.descarga_caja_completo>h2',
      changelog: '.descarga_caja_completo>p',
      download: 'http://download.mipony.net/downloads/MiPony-3-Installer.exe',
      install: 'install_nsis'
    },
    'Miranda IM': {
      url: 'https://www.miranda-ng.org/distr/stable/',
      version: ['[href*="miranda-ng-v"][href$="x64.7z"]', 'href'],
      changelog: async (res, $, fns, choice) => [(await fns.walkLink('https://wiki.miranda-ng.org/index.php?title=Changelog', fns, 'li>a[title^="Changelog/"]', {
        selector: '.mw-parser-output',
        attr: 'html'
      })), true],
      download: '[href*="miranda-ng-v"][href$="x64.7z"]',
      install: 'install'
    },
    mIRC: {
      url: 'https://www.mirc.com/get.html',
      version: 'td>strong',
      changelog: {
        url: 'https://www.mirc.com/news.html',
        selector: 'body > table:nth-child(2) > tbody > tr > td.middle > table',
        attr: 'text',
        match: /^mIRC [\d.]+/,
        split: true
      },
      download: 'https://www.mirc.com/get.php',
      install: 'install_nsis'
    },
    MisakaTranslator: {
      site: {
        GitHub: 'https://github.com/hanmin0822/MisakaTranslator/releases/latest'
      },
      versionChoice: '.rar',
      install: ['install', null, '*\\Release']
    },
    'Mist Browser': {
      site: {
        GitHub: 'https://github.com/ethereum/mist/releases/latest'
      },
      versionChoice: 'win64(.*).zip',
      install: 'install'
    },
    mkcert: {
      site: {
        GitHub: 'https://github.com/FiloSottile/mkcert/releases/latest'
      },
      versionChoice: 'windows-amd64.exe',
      install: 'install_single'
    },
    MKVToolNix: {
      url: 'https://mkvtoolnix.download/windows/releases/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, { selector: '.fb-n>a', attr: 'text', sort: true }),
      changelog: {
        url: 'https://mkvtoolnix.download/doc/NEWS.md',
        match: /# Version [\d.]+/,
        split: true
      },
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, { selector: '.fb-n>a', sort: true }, '.fb-n>a[href*="64-bit"][href$=".7z"]'),
      install: 'install'
    },
    Mob: {
      site: {
        GitHub: 'https://github.com/zenghongtu/Mob/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    MobaXterm: {
      commercial: 2,
      url: 'https://mobaxterm.mobatek.net/download-home-edition.html',
      version: '.btn_bleu',
      changelog: '.version_titre+ul',
      download: '.btn_bleu',
      install: 'install'
    },
    Mockoon: {
      site: {
        GitHub: 'https://github.com/mockoon/mockoon/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    ModernFlyouts: {
      site: {
        GitHub: 'https://github.com/ShankarBUS/ModernFlyouts/releases/latest'
      },
      versionChoice: '.Msixbundle',
      install: (info) => {
        return info.fns.install.cli(info, 'powershell', ['-Command', `Add-AppXPackage "${info.output}"`]);
      }
    },
    Moeditor: {
      site: {
        GitHub: 'https://github.com/Moeditor/Moeditor/releases'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    Mongotron: {
      site: {
        GitHub: 'https://github.com/officert/mongotron/releases'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    'Monitor Off Utility': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Desktop-Enhancements/Other-Desktop-Enhancements/Monitor-Off-Utility.shtml'
      },
      install: 'install_inno_single'
    },
    MonitorES: {
      site: {
        GitHub: 'https://github.com/ukanth/monitores/releases/latest'
      },
      versionChoice: ['.zip$', /Google Code Release (.*)$/, false, 'name'],
      install: 'install',
      other: {
        lite: {
          downloadChoice: 'MonitorESLite.exe',
          install: 'install_single'
        }
      }
    },
    Monitorian: {
      site: {
        GitHub: 'https://github.com/emoacht/Monitorian/releases/latest'
      },
      versionChoice: ['.zip$', /(.*)-Installer/],
      install: ['install_zipped', 'install_msi', '.msi', null, 'Monitorian.exe']
    },
    MoonPlayer: {
      site: {
        GitHub: 'https://github.com/coslyk/moonplayer/releases/latest'
      },
      versionChoice: '_win_x64.exe',
      install: 'install_inno',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/coslyk/moonplayer/releases'
          }
        }
      }
    },
    Mosaico: {
      url: 'http://www.soulidstudio.com/download/',
      version: 'p:contains("Version")',
      download: 'http://www.soulidstudio.com/downloads/mosaico_setup.exe',
      install: 'install_inno'
    },
    Motrix: {
      site: {
        GitHub: 'https://github.com/agalwood/Motrix/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/agalwood/Motrix/releases'
          }
        }
      }
    },
    'Mouse without Borders': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Desktop-Enhancements/Other-Desktop-Enhancements/Mouse-without-Borders.shtml'
      },
      install: 'install_msi_cli'
    },
    MouseJiggler: {
      site: {
        GitHub: 'https://github.com/cerebrate/mousejiggler/releases/latest'
      },
      install: 'install_zipped_single'
    },
    'Movie Catcher': {
      site: {
        GitHub: 'https://github.com/EvilCult/moviecatcher/releases'
      },
      versionChoice: ['Windows.zip', /Beta(.*)\(/],
      install: ['install_zipped_single', 'Movie Catcher.exe']
    },
    mp3DirectCut: {
      site: {
        FossHub: 'https://www.fosshub.com/mp3DirectCut.html'
      },
      downloadChoice: /.exe$/,
      install: 'install'
    },
    MP3Gain: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/mp3gain/files/MP3Gain-Windows%20%28Stable%29/'
      },
      downloadChoice: [null, /mp3gain-win-full-(.*?).zip/],
      install: 'install',
      other: {
        beta: {
          site: {
            SourceForge: 'https://sourceforge.net/projects/mp3gain/files/MP3Gain-Windows%20%28Beta%29/'
          }
        }
      }
    },
    MP3jam: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Download-Managers/MP3jam.shtml'
      },
      download: 'http://download2.mp3jam.org/MP3jamSetup.exe',
      install: 'install_inno'
    },
    Mp3tag: {
      url: 'https://www.mp3tag.de/en/download.html',
      version: ['h2', 'text', /v(\d+\.\w+)/],
      changelog: {
        url: 'https://www.mp3tag.de/en/changelog.html',
        selector: '.changes',
        attr: 'text',
        match: /REL: VERSION [\d.]+/,
        split: true
      },
      download: (res, $) => 'https://download.mp3tag.de/' + $('a[href="dodownload.html"]').text().trim(),
      install: 'install_nsis'
    },
    'MPC-BE': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/mpcbe/files/MPC-BE/Release%20builds/'
      },
      downloadChoice: [null, '.x64.7z'],
      install: 'install',
      other: {
        nightly: {
          site: {
            SourceForge: 'https://sourceforge.net/projects/mpcbe/files/MPC-BE/Nightly%20Builds%20%28from%20svn%20trunk%29/'
          },
          versionChoice: /(.*)/
        }
      }
    },
    'MPC-HC': {
      site: {
        GitHub: 'https://github.com/mpc-hc/mpc-hc/releases/latest'
      },
      versionChoice: 'x64.7z',
      install: 'install'
    },
    'MPEG Streamclip': {
      url: 'http://www.squared5.com/svideo/mpeg-streamclip-win.html',
      version: '.linkblock[onclick*="downloadinfo"]',
      changelog: '#contentversid>ul',
      download: '.linkblock[onclick*="downloadinfo"]',
      install: 'install_zipped_single'
    },
    MPlayer: {
      withoutHeader: true,
      url: 'http://oss.netfarm.it/mplayer/',
      version: ['#content>ul>li', 'text', /MPlayer (r\d+)/],
      changelog: '.changelog',
      download: 'a[rel="external"][href*="x86_64"]',
      install: 'install'
    },
    'mps-youtube': {
      site: {
        GitHub: 'https://github.com/mps-youtube/mps-youtube/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    mpv: {
      site: {
        GitHub: ' https://github.com/mpv-player/mpv/releases/latest'
      },
      versionChoice: i => !i.prerelease,
      download: 'https://downloads.sourceforge.net/project/mpv-player-windows/stable/mpv-{version}-x86_64.7z',
      install: ['install_zipped_single', 'mpv.exe'],
      other: {
        git: {
          site: {
            SourceForge: 'https://sourceforge.net/projects/mpv-player-windows/files/64bit/'
          },
          versionChoice: /mpv-x86_64-(.*?).7z/,
          changelog: null,
          download: null,
          install: 'install'
        }
      }
    },
    'mpv.net': {
      site: {
        GitHub: 'https://github.com/stax76/mpv.net/releases/latest'
      },
      versionChoice: 'portable-x64(.*).7z',
      install: 'install'
    },
    'MQTT X': {
      site: {
        GitHub: 'https://github.com/emqx/MQTTX/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    mRemoteNG: {
      site: {
        GitHub: 'https://github.com/mRemoteNG/mRemoteNG/releases/latest'
      },
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/mRemoteNG/mRemoteNG/releases'
          }
        }
      }
    },
    mrViewer: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/mrviewer/files/'
      },
      downloadChoice: [null, 'Windows-64.exe'],
      install: 'install_nsis'
    },
    'MSI Afterburner': {
      site: {
        TechSpot: 'https://www.techspot.com/downloads/4895-msi-afterburner.html'
      },
      download: 'http://download.msi.com/uti_exe/vga/MSIAfterburnerSetup.zip',
      install: ['install_zipped', 'install_nsis']
    },
    msys2: {
      url: 'http://repo.msys2.org/distrib/x86_64/',
      version: (res, $) => $('a[href$=".tar.xz"]').map((i, j) => $(j).text()).toArray().sort().reverse()[0].match(/msys2-base-x86_64-(\d+).tar.xz/)[1],
      download: (res, $) => 'https://mirrors.ustc.edu.cn/msys2/distrib/x86_64/' + $('a[href$=".tar.xz"]').map((i, j) => $(j).text()).toArray().sort().reverse()[0],
      install: ['install_zipped', 'install']
    },
    'mu-epub-reader': {
      site: {
        GitHub: 'https://github.com/azu/mu-epub-reader/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    muCommander: {
      site: {
        GitHub: 'https://github.com/mucommander/mucommander/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_zipped_single',
      other: {
        nightly: {
          site: {
            GitHub: 'https://github.com/mucommander/mucommander/releases'
          },
          versionChoice: ['portable.zip', null, null, 'published_at'],
          install: 'install'
        }
      }
    },
    MuEditor: {
      site: {
        GitHub: 'https://github.com/mu-editor/mu/releases/latest'
      },
      versionChoice: 'win64.exe',
      install: 'install_nsis',
      other: {
        alpha: {
          site: {
            GitHub: 'https://github.com/mu-editor/mu/releases'
          }
        }
      }
    },
    Mullvad: {
      commercial: 2,
      site: {
        GitHub: 'https://github.com/mullvad/mullvadvpn-app/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/mullvad/mullvadvpn-app/releases'
          }
        }
      }
    },
    'Multi Commander': {
      url: 'http://www.multicommander.com/downloads',
      version: ['a[href$=".exe"][href*="x64"]', 'text', /v([\d.]+) \(Build (\d+)\)/, '$1.$2'],
      changelog: {
        url: '[href^="/release/multicommander/version"]',
        selector: '.field-name-body'
      },
      download: 'a[href$=".exe"][href*="x64"]',
      install: 'install_nsis'
    },
    Multrin: {
      site: {
        GitHub: 'https://github.com/sentialx/multrin/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    MusConv: {
      commercial: 3,
      url: 'https://musconv.com/download/',
      version: 'h2.hide-home',
      download: '.windows>a',
      install: 'install_nsis'
    },
    Museeks: {
      site: {
        GitHub: 'https://github.com/martpie/museeks/releases/latest'
      },
      versionChoice: 'setup.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    'Music Collection': {
      url: 'http://www.gsoft4u.com/downloads',
      version: 'tr.tablebody:nth-child(2) > td:nth-child(2)',
      changelog: ['http://www.gsoft4u.com/updatelog', '.details>ul'],
      download: 'http://www.gsoft4u.com/down/Music%20Collection%20Portable.exe',
      install: 'install_inno_type'
    },
    MusicBee: {
      commercial: 1,
      url: 'https://www.getmusicbee.com/downloads/',
      version: '.installer_layer_wrapper>h2',
      changelog: ['https://www.getmusicbee.com/help/release-note/', '.markdownView'],
      download: 'a[href*="Portable"][href$=".zip/file"]',
      install: ['install_zipped', 'install_nsis']
    },
    'MusicBrainz Picard': {
      site: {
        GitHub: 'https://github.com/metabrainz/picard/releases/latest'
      },
      versionChoice: ['.exe', /release-(.*)/],
      install: 'install_nsis'
    },
    MusicDownloadMan: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_514519.html'
      },
      install: 'install'
    },
    MusicLake: {
      site: {
        GitHub: 'https://github.com/sunzongzheng/music/releases/latest'
      },
      versionChoice: 'win.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    MusicPlayer2: {
      site: {
        GitHub: 'https://github.com/zhongyang219/MusicPlayer2/releases/latest'
      },
      versionChoice: '_x64.7z',
      install: 'install'
    },
    'MusicTube Player': {
      site: {
        GitHub: 'https://github.com/simon-fraser/MusicTube-Player/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    MuWire: {
      url: 'https://muwire.com/',
      version: (res) => res.body.match(/var VERSION="(.*?)"/)[1],
      download: 'https://muwire.com/MuWire-{version}.exe',
      install: 'install_nsis'
    },
    'My Commander': {
      url: 'https://myco.yonan.ro/',
      version: ['.standard-button', 'href', /myco_(.*?).zip/],
      download: '.standard-button',
      install: 'install'
    },
    myBase: {
      commercial: 3,
      url: 'http://www.wjjsoft.com/download.html',
      version: '.CLS_Item:contains("Windows")>td+td',
      changelog: ['http://www.wjjsoft.com/mybase_v7_changelog.html', 'h2+div>ol'],
      download: (res, $) => '/dl_' + $('.CLS_Item:contains("Windows") a').eq(0).attr('href').match(/javascript:dl\('(.*?)'\);/)[1],
      install: ['install_zipped', 'install_inno']
    },
    MyCard: {
      url: 'https://cdn01.moecube.com/downloads/latest.yml',
      version: (res, $) => res.body.match(/mycard-setup-(.*?).exe/)[1],
      download: (res, $) => 'https://cdn01.moecube.com/downloads/' + res.body.match(/path: (.*)/)[1],
      install: ['install_zipped', 'install', 'app-32.7z']
    },
    MyCrypto: {
      site: {
        GitHub: 'https://github.com/MyCryptoHQ/MyCrypto/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    MyDraw: {
      commercial: 3,
      url: 'https://www.mydraw.com/downloads-download',
      version: 'h2',
      download: 'https://www.mydraw.com/_author/res/downloads/setup/mydraw/windows/mydrawsetup.exe',
      install: 'install_inno'
    },
    myFFmpeg: {
      commercial: 3,
      url: 'https://www.myffmpeg.com/download.html',
      version: '.mg-md+p',
      changelog: '.mg-md+p',
      download: 'http://www.myffmpeg.com/myFFmpegsetup64bit.exe',
      install: 'install'
    },
    MyFFVideoConverter: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Multimedia/Video/Encoders-Converter-DIVX-Related/MyFFVideoConverter.shtml'
      },
      install: 'install_inno_type'
    },
    MyPaint: {
      site: {
        GitHub: 'https://github.com/mypaint/mypaint/releases/latest'
      },
      versionChoice: 'mypaint-w64-(.*?)-standalone.7z',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/mypaint/mypaint/releases'
          }
        }
      }
    },
    MySQL: {
      url: 'https://dev.mysql.com/downloads/mysql/?tpl=platform&os=3',
      version: '[class^="table"] tr>td:nth-child(2)',
      download: async (res, $, fns, choice) => {
        const uri1 = $('[href^="/downloads/file/?id="]').eq(0).attr('href');
        const res1 = await fns.req(uri1);
        const $1 = fns.cheerio.load(res1.body);
        return $1('[href^="/get/Downloads"]').eq(0).attr('href');
      },
      install: 'install',
      other: {
        workbench: {
          url: 'https://dev.mysql.com/downloads/workbench/?tpl=platform&os=3',
          install: ['install_msi', null, 'MySQLWorkbench.exe']
        }
      }
    }
  }
};
