'use strict';

let info;

let download;

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    Eagle: {
      commercial: 3,
      url: 'https://eagle.cool/check-for-update',
      version: (res, $) => res.json.version,
      changelog: async (res, $) => [res.json.contentCN, true],
      download: (res, $) => res.json.windows.url,
      install: 'install_nsis_cli'
    },
    EagleGet: {
      url: 'http://www.eagleget.com/download-eagleget-portable/',
      version: 'a[href^="http://dl."]',
      changelog: async (res, $, fns, choice) => [(await fns.walkLink('http://forum.eagleget.com/viewforum.php?id=3', fns, {
        selector: '[href^="viewtopic.php?id="]:contains("Portable")',
        sort: true
      }, {
        selector: '.postmsg',
        attr: 'html'
      })), true],
      download: 'a[href^="http://dl."]',
      install: 'install'
    },
    'EarTrumpet-Fork': {
      site: {
        GitHub: 'https://github.com/Nonononoki/EarTrumpet/releases/latest'
      },
      install: 'install'
    },
    EarTrumpet: {
      site: {
        chocolatey: 'https://chocolatey.org/packages/eartrumpet'
      },
      install: ['install_zipped', 'install', 'tools\\\\Release.zip']
    },
    Easy2Boot: {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/Boot-Manager-Disk/Easy2Boot.shtml'
      },
      install: 'install_inno_type'
    },
    EasyDrv: {
      url: 'https://www.itsk.com/thread-394989-1-1.html',
      version: '#thread_subject',
      changelog: {
        url: 'https://www.itsk.com/thread-373703-1-1.html',
        selector: '#postmessage_9875776',
        attr: 'text',
        match: /^\[[\d.]+\]/,
        split: true
      },
      download: {
        selector: '[href$=".iso"][href*="EasyDrv"][href*="Win10.x64"]',
        output: '.iso'
      }
    },
    EasyPub: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_110955.html'
      },
      install: 'install'
    },
    EasySysprep: {
      url: 'https://www.itsk.com/thread-396278-1-1.html',
      version: '#thread_subject',
      changelog: {
        url: 'https://www.itsk.com/thread-395036-1-1.html',
        selector: '[id^="postmessage"]',
        attr: 'text',
        match: /^v[\d.]+/,
        split: true
      },
      download: '[href$=".7z"][href*="EasySysprep"]',
      install: ['install', null, null, '-p"itsk.com"']
    },
    EasyU: {
      url: 'https://www.itsk.com/thread-396280-1-1.html',
      version: '#thread_subject',
      changelog: {
        selector: '[id^="postmessage"]',
        attr: 'text',
        match: /^v[\d.]+/,
        split: true
      },
      download: '[href$=".7z"][href*="EasyU"]',
      install: 'install'
    },
    EBWin4: {
      site: {
        Vector: 'https://www.vector.co.jp/soft/dl/winnt/writing/se501948.html'
      },
      install: ['install_zipped', 'install_msi', 'x64\\(64bit\\)\\\\EBWin4\\(x64\\).msi', null, 'EBWin4.exe']
    },
    Eclipse: {
      url: 'https://www.eclipse.org/downloads/packages/',
      version: ['.page-header', 'text', /Eclipse IDE (.*?) Packages/],
      download: (res, $, fns, choice = 'java') => 'https://mirrors.ustc.edu.cn/eclipse' + $(`.windows>[href*="-${choice}-"]`).attr('href').match(/\?file=(.*)(&|$)/)[1],
      install: 'install',
      other: {
        java: { downloadChoice: 'java' },
        jee: { downloadChoice: 'jee' },
        cpp: { downloadChoice: 'cpp' },
        committers: { downloadChoice: 'committers' },
        php: { downloadChoice: 'php' },
        dsl: { downloadChoice: 'dsl' },
        javascript: { downloadChoice: 'javascript' },
        rcp: { downloadChoice: 'rcp' },
        modeling: { downloadChoice: 'modeling' },
        parallel: { downloadChoice: 'parallel' },
        rust: { downloadChoice: 'rust' },
        testing: { downloadChoice: 'testing' },
        scout: { downloadChoice: 'scout' },
        installer: {
          download: (res, $) => 'https://mirrors.ustc.edu.cn/eclipse' + $('[href$="eclipse-inst-win64.exe"]').attr('href').match(/\?file=(.*)(&|$)/)[1],
          install: 'install_single'
        },
        platform: {
          url: 'https://download.eclipse.org/eclipse/downloads/',
          version: ['[title="Latest Release"]', 'text', /(.*)/],
          download: (res, $) => 'https://mirrors.ustc.edu.cn/eclipse' + '/eclipse/downloads/' + $('[title="Latest Release"]').attr('href') + `eclipse-platform-${$('[title="Latest Release"]').text()}-win32-x86_64.zip`
        }
      }
    },
    'eDEX-UI': {
      site: {
        GitHub: 'https://github.com/GitSquared/edex-ui/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Edgeless: {
      url: 'https://home.edgeless.top/fodi/',
      version: async (res, $, fns, choice) => {
        const uri1 = res.body.match(/SCF_GATEWAY: "(.*?)",/)[1];
        const res1 = await fns.req(uri1);
        info = res1.json.files.find(i => i.name.match(/启动盘制作工具_(.*?).7z/));
        return info.name.match(/启动盘制作工具_(.*?).7z/)[1];
      },
      download: () => info.url,
      install: 'install'
    },
    Eintopf: {
      site: {
        GitHub: 'https://github.com/mazehall/eintopf/releases/latest'
      },
      versionChoice: 'x64.exe',
      install: 'install_nsis'
    },
    ElasticHD: {
      site: {
        GitHub: 'https://github.com/360EntSecGroup-Skylar/ElasticHD/releases/latest'
      },
      versionChoice: '_windows_amd64.zip',
      install: 'install_zipped_single'
    },
    ElectronReact: {
      site: {
        GitHub: 'https://github.com/electron-react-boilerplate/electron-react-boilerplate/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Element: {
      site: {
        GitHub: 'https://github.com/vector-im/element-web/releases/latest'
      },
      versionChoice: i => !i.prerelease,
      download: 'https://packages.riot.im/desktop/install/win32/x64/Element%20Setup.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    Elevator: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/muldersoft/files/Elevator/'
      },
      versionChoice: /\.([\d-]+).zip/,
      install: 'install'
    },
    elvish: {
      url: 'https://elv.sh/get/',
      version: 'tr:has([href$="release-notes.html"])>td:nth-child(1)',
      changelog: {
        url: 'tr:has([href$="release-notes.html"])>td:nth-child(1)>a',
        selector: '.article-content'
      },
      download: 'tr:has([href$="release-notes.html"])>td:nth-child(2)>a[href*="/windows-amd64/"]',
      install: 'install_zipped_single',
      other: {
        head: {
          url: 'https://github.com/elves/elvish/blob/master/NEXT-RELEASE.md',
          version: ['relative-time', 'datetime', /(.*)/],
          changelog: '.markdown-body',
          download: 'https://dl.elv.sh/windows-amd64/elvish-HEAD.zip'
        }
      }
    },
    'eM Client': {
      site: {
        download: 'https://www.emclient.com/download'
      },
      versionChoice: 'https://www.emclient.com/dist/latest/setup.msi',
      install: ['install_msi', null, 'MailClient.exe']
    },
    Emacs: {
      url: 'https://ftp.gnu.org/gnu/emacs/windows/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        matchCheck: /emacs-\d+\//,
        sort: true
      }, {
        selector: 'a',
        match: /emacs-(.*?)-x86_64-installer.exe/
      }),
      changelog: ['https://www.gnu.org/savannah-checkouts/gnu/emacs/emacs.html', '#Releases~ul'],
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        matchCheck: /emacs-\d+\//,
        sort: true
      }, {
        selector: 'a',
        matchCheck: /emacs-(.*?)-x86_64-installer.exe/
      }),
      install: 'install_nsis_cli'
    },
    EMDB: {
      url: 'https://www.emdb.eu/whats-new.html',
      version: '.release-header',
      changelog: '.article',
      download: 'https://www.emdb.eu/bin/emdb.zip',
      install: ['install_zipped', 'install_inno']
    },
    EmEditor: {
      commercial: 3,
      url: 'https://www.emeditor.com/text-editor-features/history/',
      version: '[title^="New in Version"]',
      changelog: {
        url: '[title^="New in Version"]',
        selector: '.el_after_av_one_full'
      },
      download: 'https://support.emeditor.com/en/downloads/latest/portable/64',
      install: 'install'
    },
    'EMQ X Broker': {
      site: {
        GitHub: 'https://github.com/emqx/emqx/releases/latest'
      },
      versionChoice: 'windows-v(.*?).zip',
      install: 'install'
    },
    'eMule Morph': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/emulemorph/files/MorphXT/'
      },
      versionChoice: /MorphXT ([\d.]+)/,
      downloadChoice: [/MorphXT ([\d.]+)/, 'installer.exe'],
      install: 'install_inno_type'
    },
    'eMule Plus': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/emuleplus/files/eMulePlus/'
      },
      versionChoice: /eMulePlus-(.*)/,
      downloadChoice: [null, 'Installer.exe'],
      install: 'install_inno'
    },
    eMule: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/emule/files/eMule/'
      },
      downloadChoice: [null, '.zip'],
      install: 'install'
    },
    'Endless Sky': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/endless-sky.mirror/files/'
      },
      versionChoice: /v(.*)/,
      downloadChoice: [/v(.*)/, 'endless-sky-win64-(.*?).zip'],
      install: 'install'
    },
    EndNote: {
      fixedPath: '%ProgramFiles(x86)%\\EndNote X8\\EndNote.exe',
      site: {
        Softpedia: 'https://www.softpedia.com/get/Office-tools/Other-Office-Tools/EndNote-X.shtml'
      },
      install: ['install_cli', null, ['/passive', '/qr', '/norestart'], { wait: true }]
    },
    'Enigma Virtual Box unpacker': {
      url: 'https://lifeinhex.com/tag/enigma-virtual-box/',
      version: '.wbt-content-small'
    },
    'Enigma Virtual Box': {
      url: 'https://enigmaprotector.com/en/downloads/changelogenigmavb.html',
      version: ['a[onclick="return openclose(\'content0\');"]', 'text', /(.*)/],
      changelog: '#content0',
      download: 'https://enigmaprotector.com/assets/files/enigmavb.exe',
      install: ['install_inno', 'languages']
    },
    Enpass: {
      commercial: 2,
      url: 'https://www.enpass.io/downloads/',
      version: ['[href$=".exe"]', 'href'],
      changelog: {
        url: 'https://www.enpass.io/release-notes/windows-pc/',
        selector: '.entry-content',
        attr: 'text',
        match: /^Version [\d.]+/,
        split: true
      },
      download: '[href$=".exe"]',
      install: ['install_wix', null, 'Enpass.msi', 'Enpass.exe']
    },
    enry: {
      site: {
        GitHub: 'https://github.com/go-enry/enry/releases/latest'
      },
      versionChoice: 'windows-amd64.zip$',
      install: 'install_zipped_single'
    },
    'Environment Modules': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/modules/files/Modules/'
      },
      versionChoice: /modules-(.*)/,
      downloadChoice: [/modules-(.*)/, 'win.zip'],
      install: 'install'
    },
    'Epic Games': {
      url: 'https://www.epicgames.com/store/zh-CN/',
      version: async (res, $, fns, choice) => {
        const uri1 = $('a[href*="EpicGamesLauncherInstaller.msi"]').eq(0).attr('href');
        const res1 = await fns.reqHEAD(uri1);
        return res1.request.uri.href.match(/EpicInstaller-(.*?).msi/);
      },
      download: 'a[href*="EpicGamesLauncherInstaller.msi"]',
      install: ['install_msi', null, 'Portal/Binaries/Win32/EpicGamesLauncher.exe']
    },
    'Epic Privacy Browser': {
      url: 'https://epicbrowser.com/',
      version: async (res, $, fns, choice) => {
        const res1 = await fns.req({
          uri: 'https://updates.epicbrowser.com/service/update2',
          method: 'POST',
          body: '<?xml version="1.0" encoding="UTF-8"?><request protocol="3.0" version="1.3.27.13" ismachine="0" sessionid="{4FB7729B-9C03-4F12-BF77-CFB9D63F5273}" installsource="taggedmi" testsource="auto" requestid="{67437980-1A7B-44A8-AA91-7B767F7E10E7}"><os platform="win" version="6.2" sp="" arch="x64"/><app appid="{A3AA2AD6-C357-4BB3-9625-6550647D956D}" version="" nextversion="" lang="en" brand="" client="" installage="-1"><updatecheck/></app></request>'
        });

        const $1 = fns.cheerio.load(res1.body);
        download = $1('url[codebase]').attr('codebase') + $1('package[name]').attr('name');
        return $1('manifest[version]').attr('version');
      },
      download: (res, $) => download,
      install: ['install_zipped', 'install']
    },
    Eplee: {
      site: {
        GitHub: 'https://github.com/Janglee123/eplee/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    epr: {
      site: {
        GitHub: 'https://github.com/wustho/epr/releases/latest'
      },
      install: 'install_zipped_single'
    },
    'EPUB File Reader': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Others/E-Book/EPUB-File-Reader.shtml'
      },
      install: 'install'
    },
    EPUBCheck: {
      site: {
        GitHub: 'https://github.com/w3c/epubcheck/releases/latest'
      },
      install: 'install'
    },
    'ESET Online Scanner': {
      url: 'https://www.eset.com/int/home/online-scanner/?type=13554&tx_esetdownloads_ajax%5Bproduct%5D=51&tx_esetdownloads_ajax%5Bbeta%5D=0&tx_esetdownloads_ajax%5Bpage_id%5D=128&tx_esetdownloads_ajax%5Bplugin_id%5D=2285910&tx_esetdownloads_ajax%5Bproduct%5D=51&tx_esetdownloads_ajax%5Bbeta%5D=0&tx_esetdownloads_ajax%5Bpage_id%5D=128&tx_esetdownloads_ajax%5Bplugin_id%5D=2285910',
      version: (res) => Object.values(res.json.files.installer)[0].full_version,
      download: (res) => Object.values(res.json.files.installer)[0].url,
      install: 'install_single'
    },
    eSpeak: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/espeak/files/espeak/'
      },
      versionChoice: /espeak-(.*)/,
      downloadChoice: [/espeak-(.*)/, '.exe'],
      install: 'install_inno'
    },
    EssentialPIM: {
      commercial: 2,
      url: 'https://www.essentialpim.com/blog-and-news/version-history',
      version: '.title_blue2',
      changelog: '.itemWrap',
      download: 'http://downloads.essentialpim.com/EssentialPIMPro.exe',
      install: 'install_nsis',
      other: {
        free: {
          download: 'http://downloads.essentialpim.com/EssentialPIM.exe'
        }
      }
    },
    'Ethervane Echo': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/PORTABLE-SOFTWARE/Office/Clipboard/Portable-Ethervane-Echo.shtml'
      },
      install: 'install'
    },
    'Euler Math Toolbox': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/eumat/files/Installer/'
      },
      versionChoice: /64_(.*?).exe/,
      install: 'install_inno'
    },
    Eureka: {
      site: {
        GitHub: 'https://github.com/mimoo/eureka/releases/latest'
      },
      versionChoice: 'windows_amd64.exe',
      install: 'install_single'
    },
    Evernote: {
      url: 'https://evernote.com/intl/zh-cn/download',
      preferPath: 'Evernote.exe',
      version: ['h1+p>a', 'href'],
      download: 'h1+p>a',
      install: async info => {
        const fs = require('fs');
        const path = require('path');
        const cp = require('child_process');
        const msi = path.resolve(process.env.LOCALAPPDATA, 'Temp', 'Evernote.msi');
        if (fs.existsSync(msi)) fs.unlinkSync(msi);
        await new Promise((resolve, reject) => {
          const process = cp.spawn(info.output);
          const checker = () => {
            setTimeout(() => {
              if (fs.existsSync(msi)) {
                setTimeout(() => {
                  process.kill();
                  cp.execSync('wmic process Where "Caption Like \'msiexec.exe\'" Call Terminate');
                  resolve();
                }, 10 * 1000);
              } else {
                checker();
              }
            }, 2000);
          };
          checker();
        });
        try {
          const tmp = path.resolve(info.fns.dirname, 'unzip/Evernote.msi');
          fs.copyFileSync(msi, tmp);
          info.output = tmp;
          info.fns.install.msi(info, null, 'Evernote.exe');
          fs.unlinkSync(msi);
          return true;
        } catch (error) {
          return false;
        }
      }
    },
    EveryLang: {
      commercial: 1,
      url: 'https://everylang.net/en/history',
      version: '.acco-heading',
      changelog: '.acco-des',
      download: 'http://everylang.net/dist/EveryLang.zip',
      install: 'install_zipped_single'
    },
    Everything: {
      url: 'https://www.voidtools.com/downloads/',
      version: '#dl',
      changelog: {
        url: 'https://www.voidtools.com/Changes.txt',
        match: /Version [\d.]+$/,
        split: true
      },
      download: 'https://www.voidtools.com/Everything-{version}.x64.zip',
      install: 'install'
    },
    'Exact Audio Copy': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Multimedia/Audio/Audio-CD-Rippers-Encoders/Exact-Audio-Copy.shtml'
      },
      install: 'install_nsis'
    },
    Exaile: {
      site: {
        GitHub: 'https://github.com/exaile/exaile/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_nsis',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/exaile/exaile/releases'
          }
        }
      }
    },
    excel2json: {
      site: {
        GitHub: 'https://github.com/neil3d/excel2json/releases/latest'
      },
      install: 'install'
    },
    Executor: {
      url: 'http://www.1space.dk/executor/downloadlinks.html',
      version: ['#download > ul > li:nth-child(1)', 'text', /(\d+[\d.]+\w+)\s/],
      download: 'http://www.1space.dk/executor/Executor64bit.zip',
      install: 'install'
    },
    'Exeinfo PE': {
      url: 'http://exeinfo.orgfree.com/',
      version: '#table6 p>i',
      download: 'https://github.com/ExeinfoASL/ASL/raw/master/exeinfope.zip',
      install: 'install'
    },
    Exodus: {
      commercial: 3,
      url: 'https://www.exodus.io/releases/',
      version: '.x-releases__item-heading-date',
      changelog: '.x-releases__item-fixes',
      download: 'https://downloads.exodus.io/releases/exodus-windows-x64-{version}.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    ExpanDrive: {
      site: {
        download: 'https://www.expandrive.com/download-expandrive/'
      },
      versionChoice: ['https://updates.expandrive.com/apps/expandrive7_win64/download_latest', /ExpanDrive_Setup_([\d.]+).exe/],
      download: 'https://packages.expandrive.com/msi/{version}/ExpanDriveInstaller64.msi',
      install: ['install_msi', null, 'ExpanDrive.exe']
    },
    'Explorer++': {
      url: 'https://explorerplusplus.com/download',
      version: 'strong',
      download: '[href$="x64.zip"]',
      install: 'install_zipped_single',
      other: {
        beta: {
          site: {
            AppVeyor: 'https://ci.appveyor.com/api/projects/derceg/explorerplusplus'
          },
          downloadChoice: ['x64.zip', 'x64']
        }
      }
    },
    ExplorerMax: {
      commercial: 3,
      url: 'https://explorermax.drivethelife.com/release-history.html',
      version: '.history-ver',
      changelog: '.history-msg',
      download: async (res, $, fns, choice) => fns.walkLink('https://explorermax.drivethelife.com/thanks/download-explorermax-completed.html', fns, 'a[href$=".exe"]'),
      fixedPath: '%AppData%\\Roaming\\ExplorerMax\\ExplorerMax.exe',
      install: 'install_cli_s'
    },
    Ext2Fsd: {
      site: {
        GitHub: 'https://github.com/matt-wu/Ext3Fsd/releases/latest'
      },
      versionChoice: ['.exe', /Ext3Fsd-(.*)/],
      install: 'install_inno_cli'
    },
    Extraterm: {
      site: {
        GitHub: 'https://github.com/sedwards2009/extraterm/releases'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    ExView: {
      // url: 'https://www.exview.ml/',
      site: {
        lanzous: 'https://www.lanzous.com/b743927'
      },
      versionChoice: [/ExView_Windows/i, /release_([\d.]+).7z/i]
    },
    'Eye Saver': {
      site: {
        download: 'http://www.eye-saver.net/'
      },
      versionChoice: ['http://www.eye-saver.net/version/latest', /Eye_Saver-setup-(.*?).exe/],
      install: 'install_inno'
    },
    EyeLoveU: {
      url: 'https://www.eyeloveucare.com/download_elu.html',
      version: 'h4+p>a',
      download: 'a:contains("Windows")',
      install: ['install_zipped', 'install_inno']
    }
  }
};
