'use strict';

let download;

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    'f.lux': {
      url: 'https://justgetflux.com/update/v4/windows-download.json',
      version: (res, $) => JSON.parse(res.body.match(/^fluxupdate\((.*)\)$/)[1]).version,
      changelog: ['https://justgetflux.com/news/pages/v4/readme/', '[id^="version-"]+ul'],
      download: (res, $) => new URL(JSON.parse(res.body.match(/^fluxupdate\((.*)\)$/)[1]).update).href.replace(/\?.*/, ''),
      install: 'install_nsis'
    },
    FAAD: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/muldersoft/files/FAAD/'
      },
      versionChoice: /\.([\d-]+).zip/,
      install: ['install_zipped_single', 'faad.i686.exe']
    },
    falcon: {
      site: {
        GitHub: 'https://github.com/plotly/falcon/releases/latest'
      },
      versionChoice: 'win(.*).zip',
      install: ['install_zipped', 'install_zipped', null, 'install', 'app-64.7z']
    },
    FanCtrl: {
      site: {
        GitHub: 'https://github.com/lich426/FanCtrl/releases/latest'
      },
      install: 'install'
    },
    'Far Manager': {
      url: 'https://farmanager.com/download.php?l=en',
      version: ['li>b', 'text', /v([\d.]+) build (\d+) x/, '$1.$2'],
      download: 'a.body_link[href$=".7z"][href*="x64"]',
      install: 'install',
      other: {
        nightly: {
          version: ['h2:contains("Nightly")+div li>b', 'text', /v([\d.]+) build (\d+) x/, '$1.$2'],
          download: 'h2:contains("Nightly")+div a.body_link[href$=".7z"][href*="x64"]'
        },
        latest: {
          site: {
            GitHub: 'https://github.com/FarGroup/FarManager/releases/latest'
          },
          versionChoice: ['Far.x64(.*).7z', /^ci\/v(.*)$/]
        }
      }
    },
    FART: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/fart-it/files/fart-it/'
      },
      versionChoice: /(.*)/,
      downloadChoice: [null, 'win64.zip'],
      install: 'install'
    },
    'FastCopy-M': {
      site: {
        GitHub: 'https://github.com/Mapaler/FastCopy-M/releases/latest'
      },
      versionChoice: '64bit.zip',
      install: 'install'
    },
    FastCopy: {
      url: 'https://fastcopy.jp/',
      version: '.table_head>th',
      changelog: ['https://fastcopy.jp/help/fastcopy.htm', '[name="history"]>.help_section tbody>tr:nth-child(2)'],
      download: async (res, $, fns) => {
        const url = $('.dl_link>a').attr('href');
        const res1 = await fns.req(url);
        const $1 = fns.cheerio.load(res1.body);
        return $1('.dl a').attr('href');
      },
      install: ['install_cli', null, ['/SILENT', '/DIR={dir}', '/EXTRACT64', '/NOSUBDIR']]
    },
    FasterImageFlasher: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/fasterimageflasher/files/'
      },
      versionChoice: /FasterImageFlasher_(.*)_Portable.exe/,
      install: 'install_single'
    },
    FastKeys: {
      commercial: 3,
      url: 'https://www.fastkeysautomation.com/index.html',
      version: '#footer .col-md-4>h4',
      changelog: '#footer .col-md-4',
      download: 'https://www.fastkeysautomation.com/download/FastKeys_Setup.exe',
      install: 'install_inno'
    },
    fd: {
      site: {
        GitHub: 'https://github.com/sharkdp/fd/releases/latest'
      },
      versionChoice: 'pc-windows-msvc.zip',
      install: 'install_zipped_single'
    },
    FeedDemon: {
      url: 'http://www.bradsoft.com/',
      version: 'h1',
      download: '[href$=".exe"]',
      install: 'install_inno'
    },
    Feedreader: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/News-Newsgroups-Blog-Tools/Feedreader.shtml'
      },
      install: 'install_inno'
    },
    Felony: {
      site: {
        GitHub: 'https://github.com/henryboldi/felony/releases'
      },
      versionChoice: 'win.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    'Fenix Web Server': {
      site: {
        GitHub: 'https://github.com/coreybutler/fenix/releases/latest'
      },
      versionChoice: 'windows-(.*?).zip',
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/coreybutler/fenix/releases'
          },
          versionChoice: 'win.zip'
        }
      }
    },
    'FFmpeg Batch': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/ffmpeg-batch/files/'
      },
      versionChoice: /FFbatch_setup_(.*)_x64.exe/,
      install: 'install_inno'
    },
    FFmpeg: {
      url: 'https://ffmpeg.zeranoe.com/builds/builds.json',
      version: (res) => res.json.release[0],
      changelog: {
        url: 'https://raw.githubusercontent.com/FFmpeg/FFmpeg/master/Changelog',
        match: /^version [\d.]+/,
        split: true
      },
      download: 'https://ffmpeg.zeranoe.com/builds/win64/static/ffmpeg-{version}-win64-static.zip',
      install: ['install', null, '*\\bin\\*.exe'],
      other: {
        nightly: {
          version: (res) => res.json.git[0],
          changelog: null
        }
      }
    },
    FFmpegPlayer: {
      site: {
        GitHub: 'https://github.com/aliakseis/FFmpegPlayer/releases'
      },
      versionChoice: '.msi',
      install: ['install_msi', null, 'Player.exe']
    },
    FFmpegYAG: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/ffmpegyag/files/'
      },
      versionChoice: /ffmpegyag_([\d.]+)_windows-10-portable_i686.zip/,
      install: 'install_inno'
    },
    FFQueue: {
      url: 'https://ffqueue.bruchhaus.dk/Download.aspx',
      version: '[href="Download.aspx?job=getw32"]+small>b',
      changelog: '#changelog+h4+div',
      download: 'https://ffqueue.bruchhaus.dk/Download.aspx?job=getw32',
      install: 'install_zipped_single'
    },
    FFsplit: {
      site: {
        BitBucket: 'https://api.bitbucket.org/2.0/repositories/taqattack/ffsplit-public/downloads'
      },
      versionChoice: /FFsplit-(.*?)-Update.exe/,
      changelog: {
        url: 'https://www.ffsplit.com/changelog.html',
        selector: 'body>p:has(strong)',
        attr: 'text',
        split: true
      },
      install: 'install_inno_type'
    },
    'Fiddler Web Debugger': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Programming/Debuggers-Decompilers-Dissasemblers/Telerik-Fiddler.shtml'
      },
      download: 'https://telerik-fiddler.s3.amazonaws.com/fiddler/FiddlerSetup.exe',
      install: ['install_zipped', 'install_nsis', 'FiddlerSetup.exe']
    },
    'FiddlerCap Web Recorder': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Other-Internet-Related/FiddlerCap-Web-Recorder.shtml'
      },
      download: 'https://telerik-fiddler.s3.amazonaws.com/fiddler/FiddlerCapSetup.exe',
      install: 'install_nsis'
    },
    'File Viewer Plus': {
      commercial: 3,
      url: 'https://fileviewerplus.com/download',
      version: '.m-0',
      download: 'https://fileviewerplus.com/dl',
      install: 'install_inno'
    },
    'File-Engine': {
      site: {
        GitHub: 'https://github.com/XUANXUQAQ/File-Engine/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    FileBot: {
      commercial: 3,
      url: 'https://www.filebot.net/',
      version: '[href$="x64.msi"]',
      download: '[href$="x64.msi"]',
      install: ['install_msi', null, 'filebot.exe']
    },
    FileGee: {
      commercial: 3,
      url: 'http://www.filegee.com/download.html',
      version: '.bounce>div:nth-child(3) .banben',
      download: 'http://xiazai.filegee.com/FileGeeCN.exe',
      install: 'install_inno',
      other: {
        free: {
          commercial: 0,
          download: 'http://xiazai.filegee.com/FileGeeCNP.exe'
        }
      }
    },
    FileOptimizer: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/nikkhokkho/files/FileOptimizer/'
      },
      versionChoice: /(.*)/,
      downloadChoice: [null, 'FileOptimizerFull.7z.exe'],
      install: 'install'
    },
    FileUploader: {
      url: 'http://z-o-o-m.eu/down.htm',
      version: '#content a',
      changelog: '#content>ul',
      download: 'http://z-o-o-m.eu/down/FileUploader.exe',
      install: 'install_single'
    },
    FileVoyager: {
      url: 'https://www.filevoyager.com/download/',
      version: 'a[href$="Full.7z"]',
      changelog: {
        url: 'https://www.filevoyager.com/doc/changelog/',
        selector: '.entry-content',
        attr: 'text',
        match: /^[\d.]+/,
        split: true
      },
      download: 'a[href$="Full.7z"]',
      install: 'install'
    },
    FileZilla: {
      url: 'https://filezilla-project.org/download.php?type=client',
      version: '.downloadscreenshot+p',
      changelog: {
        url: 'https://filezilla-project.org/versions.php',
        selector: '.content',
        attr: 'text',
        match: /^[\d.]+/,
        split: true
      },
      download: '#quickdownloadbuttonlink',
      install: 'install_nsis',
      other: {
        server: {
          url: 'https://filezilla-project.org/download.php?type=server'
        },
        nightly: {
          url: 'https://filezilla-project.org/nightly.php',
          version: ['.nightlysuccessful [href$="/win64/FileZilla.zip"]', 'href', /nightlies\/([\d-]+)\/win64/],
          download: '.nightlysuccessful [href$="/win64/FileZilla.zip"]'
        }
      }
    },
    FilmFree: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/filmfree/files/'
      },
      versionChoice: /FilmFree (.*?) Installer.zip/,
      install: ['install_zipped', 'install_msi', '.msi', null, 'FilmFree.exe']
    },
    filmora: {
      url: 'https://www.shencut.com/download.html',
      version: async (res, $, fns, choice) => {
        const uri1 = $('.download_pc_url').eq(0).attr('href');
        const res1 = await fns.reqHEAD(uri1);
        download = res1.request.uri.href;
        return download.match(/filmora_setup_full(.*?).exe/);
      },
      download: () => download,
      install: 'install_inno'
    },
    Filmotech: {
      url: 'https://www.filmotech.info/download.php',
      version: 'table>tbody>tr:nth-child(4)>td',
      changelog: '.col-lg-12 .panel-body',
      download: 'table>tbody>tr:nth-child(4)>td:nth-child(3)>a',
      install: 'install_inno'
    },
    'Find and Run Robot': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/find_and_run_robot,1.html'
      },
      install: 'install_inno'
    },
    FireDaemon: {
      commercial: 3,
      url: 'https://firedaemon.com/firedaemon-pro-release-notes',
      version: '#article-body>table>tbody>tr:nth-child(2)>td:nth-child(1)>p>a',
      changelog: '#article-body>table>tbody>tr:nth-child(4)>td:nth-child(1)',
      download: '#article-body>table>tbody>tr:nth-child(2)>td:nth-child(1)>p>a',
      installType: 'InstallShield',
      other: {
        RC: {
          version: '#article-body>table>tbody>tr:nth-child(2)>td:nth-child(2)>p>a',
          changelog: '#article-body>table>tbody>tr:nth-child(4)>td:nth-child(2)',
          download: '#article-body>table>tbody>tr:nth-child(2)>td:nth-child(2)>p>a'
        },
        Fusion: {
          url: 'https://firedaemon.com/firedaemon-fusion-release-notes',
          version: '[href*="FireDaemon-Fusion-x86"][href$=".exe"]',
          download: '[href*="FireDaemon-Fusion-x86"][href$=".exe"]'
        },
        'Fusion-RC': {
          url: 'https://firedaemon.com/firedaemon-fusion-release-notes',
          version: '[href*="FireDaemon-Fusion-x64"][href$=".exe"]',
          download: '[href*="FireDaemon-Fusion-x64"][href$=".exe"]'
        },
        Zero: {
          url: 'https://firedaemon.com/firedaemon-zero-release-notes',
          version: '[href*="FireDaemon-Zero-x64"]',
          download: 'https://firedaemon.com/download-firedaemon-zero-x64'
        },
        daeMON: {
          commercial: 0,
          url: 'https://firedaemon.com/download/',
          version: '.two-col-inner:contains("FireDaemon daeMON")>p>small',
          changelog: null,
          download: 'https://firedaemon.com/download-firedaemon-daemon',
          install: ['install_zipped_single', 'daeMON-x64.exe']
        }
      }
    },
    'firefly-proxy': {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/yinghuocho/firefly-proxy/releases/latest'
      },
      versionChoice: 'windows(.*).bz2',
      install: ['install_zipped_single', 'firefly-proxy']
    },
    'firefox-history-merger': {
      site: {
        GitHub: 'https://github.com/crazy-max/firefox-history-merger/releases/latest'
      },
      versionChoice: 'amd64.exe',
      install: 'install_single'
    },
    Firepit: {
      site: {
        GitHub: 'https://github.com/abeisgoat/firepit/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    'Firewall Context Menu': {
      site: {
        GitHub: 'https://github.com/ItsMeFrancois/FirewallContextMenu/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno'
    },
    Flamory: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Bookmark-Managers/Flamory.shtml'
      },
      download: 'https://flamory.com/dl/release/SetupFlamory.exe',
      install: ['install_ai', null, 'App']
    },
    FlashFXP: {
      commercial: 3,
      url: 'https://www.flashfxp.com/download',
      version: '#version',
      changelog: ['https://www.flashfxp.com/history', '.list1'],
      download: '[title="Download FlashFXP"]',
      fixedPath: '%ProgramFiles(x86)%\\FlashFXP 5\\FlashFXP.exe',
      install: 'install_cli_s'
    },
    Fliqlo: {
      url: 'https://fliqlo.com',
      version: '.win>.cap strong',
      changelog: {
        url: 'https://fliqlo.com/version-history.html',
        selector: '#sec-windows>dl',
        attr: 'text',
        match: /^[\d.]+/,
        split: true
      },
      download: '.download.windows',
      install: 'install_zipped_single'
    },
    floor: {
      site: {
        GitHub: 'https://github.com/a2flo/floor/releases/latest'
      },
      versionChoice: 'windows_msvc_v.*?.zip',
      install: 'install'
    },
    'Fluent Reader': {
      site: {
        GitHub: 'https://github.com/yang991178/fluent-reader/releases/latest'
      },
      versionChoice: '.x64.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    FluentTerminal: {
      site: {
        chocolatey: 'https://chocolatey.org/packages/fluent-terminal'
      },
      install: ['install_zipped', 'install_zipped', 'tools\\\\FluentTerminal_.*.zip', (info) => info.fns.install.cli(info, 'powershell', ['-File', info.output]), 'Install.ps1']
    },
    flynet: {
      site: {
        GitHub: 'https://github.com/asche910/flynet/releases/latest'
      },
      versionChoice: 'windows_amd64.tar.gz',
      install: ['install_zipped', 'install']
    },
    fman: {
      commercial: 3,
      url: 'https://fman.io/download/thank-you?os=Windows',
      version: ['.lead2 a[href$=".exe"]', 'href'],
      changelog: {
        url: 'https://fman.io/changelog',
        selector: '.changelog',
        attr: 'text',
        match: /^Version [\d.]+/,
        split: true
      },
      download: '.lead2 a[href$=".exe"]'
    },
    Focusky: {
      commercial: 1,
      site: {
        download: 'http://focusky.com/'
      },
      versionChoice: 'http://focusky.com/download/index.php?platform=win&edition=64',
      changelog: ['http://focusky.com/update/update-history.php', '.liright'],
      install: ['install_zipped', 'install_inno']
    },
    'Folder Changer': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Desktop-Enhancements/Other-Desktop-Enhancements/Folder-Changer.shtml'
      },
      download: 'https://www.folderchanger.com/files/FolderChangerSetup.exe',
      install: 'install_inno'
    },
    'Folder Size View': {
      site: {
        GitHub: 'https://github.com/foldersizeview/foldersizeview.github.io/releases/latest'
      },
      versionChoice: 'Setup.zip',
      install: ['install_zipped', 'install_inno_type']
    },
    FolderExplorer: {
      site: {
        GitHub: 'https://github.com/d2-projects/folder-explorer/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    FolderSizes: {
      url: 'https://www.foldersizes.com/Content/static/ReleaseNotes.htm',
      version: 'h1+p+p',
      changelog: 'ul',
      download: 'https://f000.backblazeb2.com/file/KeyMetricSoft/FolderSizes/fs9-setup.exe',
      install: 'install_ai'
    },
    Follow: {
      url: 'https://hallwaytech.github.io/follow/changes-report.html',
      version: '.section+.section>h3',
      changelog: '.section+.section>.bodyTable',
      download: '.externalLink',
      install: 'install_single'
    },
    Foobar2000: {
      url: 'http://www.foobar2000.org/download',
      version: ['a[href^="/getfile/"]', 'text', /v([\d.]+)/],
      changelog: ['https://www.foobar2000.org/changelog', '.level3>ul'],
      download: (res, $) => $('a[href^="/getfile/"]').attr('href').replace('getfile', 'files'),
      install: 'install_nsis',
      other: {
        beta: {
          version: ['h2:contains("beta")+a[href^="/getfile/"]', 'text', /v([\d.]+ beta \d+)/],
          download: (res, $) => $('h2:contains("beta")+a[href^="/getfile/"]').attr('href').replace('getfile', 'files')
        }
      }
    },
    Foobox: {
      site: {
        GitHub: 'https://github.com/dream7180/foobox-cn/releases/latest'
      },
      install: ['install_zipped', 'install_nsis']
    },
    Fork: {
      url: 'https://git-fork.com/releasenoteswin',
      version: '.header4',
      changelog: '.col-md-6>.row+hr+.row',
      download: 'https://git-fork.com/update/win/ForkInstaller.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*'],
      afterInstall: info => {
        const path = require('path');
        const fs = require('fs');
        const cp = require('child_process');

        const git = fs.readdirSync(info.parentPath).filter(i => i.match(/^PortableGit.*\.7z/));
        if (git.length) {
          const version = git[0].split('-')[1];
          const src = path.join(info.parentPath, git[0]);
          const dist = path.join(process.env.LOCALAPPDATA, 'Fork\\gitInstance', version);
          cp.execSync(`plugins\\7z.exe x -sccUTF-8 -y -o"${dist}" "${src}"`);
          fs.unlinkSync(src);
        }
      }
    },
    FotoKilof: {
      site: {
        GitHub: 'https://github.com/TeaM-TL/FotoKilof/releases/latest'
      },
      install: 'install'
    },
    Fotosizer: {
      commercial: 2,
      url: 'https://www.fotosizer.com/Download',
      version: '[style="font-size: 18px"]',
      changelog: {
        selector: '.section-title:contains("Whats new")+div',
        attr: 'text',
        match: /^v[\d.]+/,
        split: true
      },
      download: async (res, $, fns, choice) => {
        const res1 = await fns.req('https://www.fotosizer.com/Downloader.ashx');
        return res1.body;
      },
      install: 'install_nsis'
    },
    FotoSketcher: {
      url: 'https://fotosketcher.com/download-fotosketcher/',
      version: ['h1+p', 'text', /FotoSketcher (.*?) \(/],
      download: 'a[href$="setup_64bit.exe"]',
      install: 'install_inno_single'
    },
    'Foxit Reader': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Office-tools/PDF/Foxit-PDF-Reader.shtml'
      },
      install: ['install_msi', null, 'FoxitReader.exe']
    },
    Fraidycat: {
      site: {
        GitHub: 'https://github.com/kickscondor/fraidycat/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Franz: {
      site: {
        GitHub: 'https://github.com/meetfranz/franz/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/meetfranz/franz/releases'
          },
          versionChoice: '.exe'
        }
      }
    },
    freac: {
      site: {
        GitHub: 'https://github.com/enzo1982/freac/releases/latest'
      },
      versionChoice: /windows-x64.zip$/,
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/enzo1982/freac/releases'
          }
        }
      }
    },
    'Free Download Manager': {
      url: 'https://www.freedownloadmanager.org/download.htm',
      version: '.download_btn_new+div',
      download: '.download_btn_new',
      install: ['install_inno', null, { '{code_CefInstallDir}': '{dir}' }]
    },
    'Free Torrent Downloader': {
      url: 'http://www.torrent-downloader.com/',
      version: '.updates .coloredstrong',
      changelog: '.updates>li',
      download: 'http://www.torrent-downloader.com/TorrentDownloaderFree.exe',
      install: 'install_inno'
    },
    FreeCAD: {
      site: {
        GitHub: 'https://github.com/FreeCAD/FreeCAD/releases/latest'
      },
      versionChoice: 'portable.7z',
      install: 'install'
    },
    FreeCommander: {
      commercial: 2,
      url: 'https://freecommander.com/en/downloads/',
      version: ['#post-29 span', 'text', /FreeCommander XE (\d+) Build (\d+\w?) 32-bit public/, '$1.$2'],
      download: 'https://freecommander.com/downloads/FreeCommanderXE-32-public_portable.zip',
      install: 'install'
    },
    FreeFileSync: {
      commercial: 2,
      url: 'https://freefilesync.org/download.php',
      version: '.changelog-header',
      changelog: '.sub-section:has(.changelog-header)>.content-margin',
      download: '.dl-section .direct-download-link[href*="Windows"]',
      other: {
        // The latest version support install with portable is 8.6
        portable: { // The latest version don't need install.dat is 7.9
          site: {
            FileHippo: 'https://filehippo.com/download_freefilesync_windows/66224/'
          },
          install: 'install_inno'
        }
      }
    },
    FreeGate: {
      tags: ['proxy'],
      useProxy: true,
      url: 'http://us.dongtaiwang.com/loc/download.en.php',
      version: '#one_col>table table>tbody>tr>th',
      download: '#one_col>table table>tbody>tr>td a[href$=".exe"]',
      install: 'install_single'
      // other: {
      //   limited: {
      //     version: '#one_col>table table>tbody>tr:nth-child(2)>th',
      //     download: '#one_col>table table>tbody>tr:nth-child(2)>td a[href$=".exe"]'
      //   }
      // }
    },
    FreeMAN: {
      site: {
        GitHub: 'https://github.com/matthew-matvei/freeman/releases'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    FreeMove: {
      site: {
        GitHub: 'https://github.com/imDema/FreeMove/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    Freenet: {
      site: {
        GitHub: 'https://github.com/freenet/fred/releases/latest'
      },
      versionChoice: 'freenet.jar',
      install: 'install_single',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/freenet/fred/releases'
          }
        }
      }
    },
    Freeplane: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/freeplane/files/freeplane%20stable/'
      },
      versionChoice: /Freeplane-Setup-(.*?).exe/,
      downloadChoice: /Freeplane-Setup-(.*?).exe/,
      changelog: {
        url: 'https://www.freeplane.org/info/history/history_en.txt',
        match: /^[\d.]+/,
        split: true
      },
      install: 'install_inno',
      other: {
        preview: {
          site: {
            SourceForge: 'https://sourceforge.net/projects/freeplane/files/freeplane%20preview/'
          },
          changelog: null
        }
      }
    },
    Freeter: {
      commercial: 2,
      url: 'https://freeter.io/release-notes',
      version: '.p-title',
      changelog: '.just-list',
      download: 'https://freeter.io/download/FreeterSetup.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    FreeTube: {
      site: {
        GitHub: 'https://github.com/FreeTubeApp/FreeTube/releases'
      },
      versionChoice: '.exe$',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Frescobaldi: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/frescobaldi.mirror/files/'
      },
      versionChoice: /v(.*)/,
      downloadChoice: [null, 'Frescobaldi.Setup.(.*?).exe'],
      install: 'install_inno'
    },
    Friture: {
      site: {
        GitHub: 'https://github.com/tlecomte/friture/releases/latest'
      },
      versionChoice: '.msi',
      install: ['install_msi', null, 'friture.exe']
    },
    FromScratch: {
      site: {
        GitHub: 'https://github.com/Kilian/fromscratch/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    FrostWire: {
      site: {
        GitHub: 'https://github.com/frostwire/frostwire/releases/latest'
      },
      versionChoice: [/windows.github.exe$/, /frostwire-desktop-(.*)/],
      install: 'install_nsis'
    },
    fselect: {
      site: {
        GitHub: 'https://github.com/jhspetersson/fselect/releases/latest'
      },
      versionChoice: 'x86_64-win.zip',
      install: 'install_zipped_single'
    },
    FTPGrab: {
      site: {
        GitHub: 'https://github.com/crazy-max/ftpgrab/releases/latest'
      },
      versionChoice: 'windows_x86_64.zip',
      install: 'install_zipped_single'
    },
    Fuzzit: {
      site: {
        GitHub: 'https://github.com/fuzzitdev/fuzzit/releases/latest'
      },
      versionChoice: 'fuzzit_Windows_x86_64.zip',
      install: 'install_zipped_single'
    },
    fx: {
      site: {
        GitHub: 'https://github.com/antonmedv/fx/releases/latest'
      },
      versionChoice: 'win.exe.zip',
      install: 'install_zipped_single'
    },
    fzf: {
      site: {
        GitHub: 'https://github.com/junegunn/fzf-bin/releases/latest'
      },
      versionChoice: 'amd64.zip',
      install: 'install_zipped_single'
    }
  }
};
