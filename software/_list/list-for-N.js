'use strict';

// 'use strict'
// let data = {
//   url: 'https://notepad-plus-plus.org/download/',
//   version: 'h2>a',
//   changelog: async (res, $, fns, choice) => [(await fns.walkLink(res, fns, 'h2>a', {
//     selector: 'ol',
//     attr: 'html'
//   })), true],
//   download: async (res, $, fns, choice) => fns.walkLink(res, fns, 'h2>a', '[href$="bin.x64.7z"]'),
//   install: 'install'
// }
// module.exports = data
let url;

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    Nagisa: {
      site: {
        GitHub: 'https://github.com/Project-Nagisa/Nagisa-ClassicUWP/releases/latest'
      },
      install: 'install'
    },
    NaiveProxy: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/klzgrad/naiveproxy/releases/latest'
      },
      versionChoice: 'win-x64.zip',
      install: 'install'
    },
    NaiveSharp: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/KevinZonda/NaiveSharp/releases/latest'
      },
      install: 'install'
    },
    nanDECK: {
      url: 'http://www.nand.it/nandeck/',
      version: '.tit1',
      changelog: '[width="78%"]',
      download: '.tit1>a',
      install: 'install_zipped_single'
    },
    nano: {
      url: 'https://www.nano-editor.org/dist/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'table>tbody>tr:not(:nth-child(1))>td:nth-child(2)>a',
        matchCheck: /v[\d.]+/,
        sort: true
      }, {
        selector: 'table>tbody>tr:not(:nth-child(1))>td:nth-child(2)>a',
        matchCheck: 'NT/'
      }, {
        selector: 'table>tbody>tr:not(:nth-child(1))>td:nth-child(2)>a',
        match: /nano-([\d.]+).zip/,
        sort: true
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'table>tbody>tr:not(:nth-child(1))>td:nth-child(2)>a',
        matchCheck: /v[\d.]+/,
        sort: true
      }, {
        selector: 'table>tbody>tr:not(:nth-child(1))>td:nth-child(2)>a',
        matchCheck: 'NT/'
      }, {
        selector: 'table>tbody>tr:not(:nth-child(1))>td:nth-child(2)>a',
        matchCheck: /nano-([\d.]+).zip/,
        sort: true
      }),
      install: 'install',
      other: {
        git: {
          url: 'https://www.nano-editor.org/dist/win32-support/',
          version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
            selector: 'table>tbody>tr:not(:nth-child(1))>td:nth-child(2)>a',
            sort: true,
            match: /nano-git-(.*?).exe/
          }),
          download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
            selector: 'table>tbody>tr:not(:nth-child(1))>td:nth-child(2)>a',
            sort: true,
            matchCheck: /nano-git-(.*?).exe/
          }),
          install: 'install_single'
        }
      }
    },
    Naotu: {
      site: {
        GitHub: 'https://github.com/NaoTu/DesktopNaotu/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    ndm: {
      site: {
        GitHub: 'https://github.com/720kb/ndm/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-32.7z']
    },
    Neard: {
      site: {
        GitHub: 'https://github.com/neard/neard/releases/latest'
      },
      versionChoice: '.7z',
      install: 'install'
    },
    NeatDownloadManager: {
      url: 'https://www.neatdownloadmanager.com/index.php/en/',
      version: '#dima_2_2>.custom>p:contains("ver")',
      download: 'https://www.neatdownloadmanager.com/file/NeatDM_setup.exe',
      install: 'install_inno_single'
    },
    NeatReader: {
      commercial: 2,
      url: 'https://www.neat-reader.cn/downloads/windows',
      version: ['[href$=".exe"]', 'href', /Setup%20(.*?).exe/],
      download: '[href$=".exe"]',
      install: ['install_zipped', 'install', 'app-32.7z']
    },
    NeoVim: {
      site: {
        GitHub: 'https://github.com/neovim/neovim/releases/latest'
      },
      downloadChoice: 'nvim-win64.zip',
      install: 'install',
      other: {
        nightly: {
          site: {
            GitHub: 'https://github.com/neovim/neovim/releases'
          },
          versionChoice: ['nvim-win64.zip', /NVIM ([\d.]+.*)/, null, 'name']
        }
      }
    },
    'Net Transport': {
      commercial: 3,
      url: 'http://xi-soft.com/download.htm',
      version: ['[href="downloads/NXSetup_x64.zip"]', 'text', /Net Transport v(.*)/],
      changelog: 'p+ol',
      download: 'http://xi-soft.com/downloads/NXSetup_x64.zip',
      install: ['install_zipped', 'install_inno_type']
    },
    NetBalancer: {
      commercial: 3,
      url: 'https://netbalancer.com/download',
      version: '#Download',
      changelog: async (res, $, fns, choice) => [(await fns.walkLink('https://netbalancer.com/news', fns, '[href^="https://netbalancer.com/news/article/"]', {
        selector: '.news-content',
        attr: 'html'
      })), true],
      download: 'https://netbalancer.com/downloads/NetBalancerSetup.exe',
      install: 'install_inno_cli'
    },
    NetBeans: {
      url: 'https://netbeans.apache.org/download/index.html',
      version: 'h1',
      download: async (res, $, fns) => {
        const res1 = await fns.req('https://netbeans.apache.org/download/nb100/nb100.html');
        const $1 = fns.cheerio.load(res1.body);
        return $1('a[href$="bin.zip"]').eq(0).attr('href').replace('https://www.apache.org/dyn/closer.cgi/', 'https://mirrors.ustc.edu.cn/apache/');
      },
      install: 'install'
    },
    Netch: {
      site: {
        GitHub: 'https://github.com/NetchX/Netch/releases/latest'
      },
      install: 'install',
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/NetchX/Netch/releases'
          }
        }
      }
    },
    NetDict: {
      url: 'https://www.asm-l.cn/update.json',
      version: (res, $) => res.body.match(/file:"(.*?)"/)[1].match(/(\d+[\d.]+\d+)/)[1],
      changelog: async (res, $) => res.body.match(/log:"(.*?)"/)[1].replace(/\\r\\n/g, '\n'),
      download: (res, $) => res.body.match(/file:"(.*?)"/)[1],
      install: 'install'
    },
    'Neter Compiler': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/neter-compiler/files/'
      },
      versionChoice: /Neter-Compiler-(.*?)-Portable.exe/,
      install: 'install_single'
    },
    NetLimiter: {
      commercial: 3,
      url: 'https://www.netlimiter.com/',
      version: ['[href$=".exe"]', 'href'],
      changelog: async (res, $, fns, choice) => [(await fns.walkLink('https://www.netlimiter.com/releases', fns, '[href^="/releases/"]', {
        selector: '.jumbotron+.container',
        attr: 'html'
      })), true],
      download: '[href$=".exe"]',
      install: 'install_ai_cli'
    },
    Netron: {
      site: {
        GitHub: 'https://github.com/lutzroeder/netron/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    NetSetMan: {
      url: 'https://www.netsetman.com/en/txt/history',
      version: 'strong',
      changelog: {
        selector: 'body',
        attr: 'text',
        split: true
      },
      download: 'http://www.netsetman.com/netsetman.exe',
      install: ['install_inno_type', null, '1']
    },
    NetSpeedMonitor: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Network-Tools/Bandwidth-Tools/NetSpeedMonitor.shtml'
      },
      install: ['install_msi', null, 'nsmc.exe']
    },
    NetTraffic: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Network-Tools/Network-Monitoring/NetTraffic-Venea.shtml'
      },
      install: ['install_zipped', 'install_nsis']
    },
    NETworkManager: {
      site: {
        GitHub: 'https://github.com/BornToBeRoot/NETworkManager/releases/latest'
      },
      versionChoice: 'Portable.zip',
      install: 'install'
    },
    nexrender: {
      site: {
        GitHub: 'https://github.com/inlife/nexrender/releases/latest'
      },
      versionChoice: 'cli-win64.exe',
      install: 'install_single'
    },
    Nextcloud: {
      url: 'https://github.com/nextcloud/desktop/releases/latest',
      version: ['.muted-link.css-truncate', 'text', /^v(.*)$/],
      changelog: '.release-header+.markdown-body',
      download: '.markdown-body [href$=".exe"]',
      install: 'install_nsis',
      other: {
        beta: {
          url: 'https://github.com/nextcloud/desktop/releases'
        }
      }
    },
    'NFO Viewer': {
      site: {
        GitHub: 'https://github.com/otsaloma/nfoview/releases/latest'
      },
      versionChoice: 'win32.exe',
      install: 'install_inno'
    },
    ngrev: {
      site: {
        GitHub: 'https://github.com/ng-ast/ngrev/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Niffler: {
      site: {
        GitHub: 'https://github.com/grinfans/Niffler/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/grinfans/Niffler/releases'
          }
        }
      }
    },
    NitroShare: {
      url: 'https://nitroshare.net/',
      version: ['[href$="x86_64.exe"]', 'href', /nitroshare-(.*?)-windows-x86_64.exe/],
      download: '[href$="x86_64.exe"]',
      install: 'install_inno'
    },
    NIYT: {
      site: {
        GitHub: 'https://github.com/howie6879/NIYT/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    Nocturn: {
      site: {
        GitHub: 'https://github.com/k0kubun/Nocturn/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    Nodejs: {
      url: 'https://nodejs.org/en/download/current/',
      version: '.color-lightgray>strong',
      download: (res, $) => $('.download-matrix a[href$="x64.zip"]').eq(0).attr('href').replace(/\.zip$/, '.7z'),
      install: 'install',
      other: {
        LTS: {
          url: 'https://nodejs.org/en/download/'
        }
      }
    },
    nodist: {
      site: {
        GitHub: 'https://github.com/nullivex/nodist/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_nsis'
    },
    'Nomad.NET': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/File-Management/Nomad-NET.shtml'
      },
      install: 'install'
    },
    noMeiryoUI: {
      site: {
        GitHub: 'https://github.com/Tatsu-syo/noMeiryoUI/releases/latest'
      },
      versionChoice: ['.zip$', /TAG-(.*)/],
      install: 'install_zipped_single'
    },
    NorthReader: {
      url: 'https://buildserver.futureglobe.de/NorthReader/northreader_version.json',
      version: (res, $) => res.json.version,
      download: 'https://buildserver.futureglobe.de/NorthReader/NorthReaderSetup.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Nosub: {
      site: {
        GitHub: 'https://github.com/patui/Nosub/releases/latest'
      },
      versionChoice: 'win_x64.7z',
      install: 'install'
    },
    Notable: {
      site: {
        GitHub: 'https://github.com/notable/notable/releases/latest'
      },
      versionChoice: 'win.zip',
      install: 'install'
    },
    NoteExpress: {
      commercial: 3,
      url: 'http://www.inoteexpress.com/aegean/index.php/home/ne/index.html',
      version: '.banner-3',
      download: 'http://www.inoteexpress.com/support/cgi-bin/download_chs.cgi',
      install: 'install_nsis'
    },
    'notepad++': {
      site: {
        GitHub: 'https://github.com/notepad-plus-plus/notepad-plus-plus/releases/latest'
      },
      downloadChoice: 'portable.x64.7z',
      install: 'install'
    },
    'notepad2-mod': {
      site: {
        GitHub: 'https://github.com/XhmikosR/notepad2-mod/releases/latest'
      },
      versionChoice: 'x64.zip',
      install: ['install', '.txt']
    },
    notepad2: {
      site: {
        GitHub: 'https://github.com/zufuliu/notepad2/releases/latest'
      },
      versionChoice: 'x64(.*).zip',
      install: 'install',
      other: {
        chs: {
          site: {
            GitHub: 'https://github.com/yfdyh000/notepad2/releases/latest'
          }
        }
      }
    },
    Notepads: {
      site: {
        GitHub: 'https://github.com/JasonStein/Notepads/releases/latest'
      },
      versionChoice: '.msixbundle',
      install: (info) => {
        return info.fns.install.cli(info, 'powershell', ['-Command', `Add-AppXPackage "${info.output}"`]);
      }
    },
    Notes: {
      site: {
        GitHub: 'https://github.com/nuttyartist/notes/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno_type'
    },
    Notion: {
      commercial: 2,
      url: 'https://www.notion.so/desktop',
      version: async (res, $, fns) => {
        const res1 = await fns.req({
          method: 'POST',
          uri: 'https://www.notion.so/api/v3/getDesktopDownloadUrl',
          headers: {
            'Content-Type': 'application/json'
          },
          body: '{"platform":"windows"}'
        });
        url = res1.json.url;
        return url.match(/%20(\d+[\d.]+\d+).exe/)[1];
      },
      download: (res, $) => url,
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Noty: {
      site: {
        GitHub: 'https://github.com/fabiospampinato/noty/releases/latest'
      },
      versionChoice: 'win.zip',
      install: 'install'
    },
    NovelHarvester: {
      site: {
        GitHub: 'https://github.com/unclezs/NovelHarvester/releases/latest'
      },
      versionChoice: '.rar',
      install: 'install'
    },
    Novelty: {
      url: 'https://www.visualnovelty.com/download.html',
      version: '[href$=".zip"]',
      changelog: {
        url: 'https://www.visualnovelty.com/docs/changes.html',
        selector: '.content',
        attr: 'text',
        match: /^Version [\d.]+/,
        split: true
      },
      download: '[href$=".zip"]',
      install: 'install'
    },
    'Now Desktop': {
      site: {
        GitHub: 'https://github.com/vercel/now-desktop/releases/latest'
      },
      versionChoice: 'full.nupkg',
      install: ['install', null, 'lib\\net*']
    },
    NoxPlayer: {
      url: 'https://www.yeshen.com/',
      version: '.download-btn .sub-title',
      changelog: {
        url: 'https://www.yeshen.com/blog/version/',
        selector: '.entry-content',
        attr: 'text',
        match: /模拟器版本：V[\d.]+/,
        split: true
      },
      download: 'https://www.yeshen.com/cn/download/fullPackage',
      install: 'install'
    },
    Npackd: {
      site: {
        GitHub: 'https://github.com/tim-lebedkov/npackd-cpp/releases/latest'
      },
      versionChoice: ['Npackd64-(.*).zip', /version_(.*)/],
      install: 'install',
      other: {
        cli: {
          versionChoice: ['NpackdCL64-(.*).zip', /version_(.*)/]
        },
        beta: {
          site: {
            GitHub: 'https://github.com/tim-lebedkov/npackd-cpp/releases'
          }
        },
        'cli-beta': {
          site: {
            GitHub: 'https://github.com/tim-lebedkov/npackd-cpp/releases'
          },
          versionChoice: ['NpackdCL64-(.*).zip', /version_(.*)/]
        }
      }
    },
    Npcap: {
      url: 'https://nmap.org/npcap/dist/',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a[href$=".exe"]',
        sort: true,
        match: /npcap-(.*?).exe/
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a[href$=".exe"]',
        sort: true
      }),
      // https://nmap.org/npcap/guide/npcap-users-guide.html#npcap-installation
      install: ['install_nsis_cli', ['/winpcap_mode=no'], { nosilent: true }]
    },
    NPowerTray: {
      site: {
        GitHub: 'https://github.com/gigaherz/NPowerTray/releases/latest'
      },
      install: 'install'
    },
    nps: {
      site: {
        GitHub: 'https://github.com/ehang-io/nps/releases/latest'
      },
      versionChoice: 'win_amd64_client(.*).tar.gz',
      install: ['install_zipped', 'install']
    },
    NSIS: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/nsis/files/NSIS%203/'
      },
      downloadChoice: [null, 'setup.exe'],
      install: 'install_nsis'
    },
    NSSM: {
      url: 'https://nssm.cc/download',
      version: ['.noIndent>a[href$=".zip"]', 'text', /nssm (.*)/],
      download: '.noIndent>a[href$=".zip"]',
      install: 'install',
      other: {
        'pre-release': {
          version: ['h4:contains("pre-release")+.noIndent>a[href$=".zip"]', 'text', /nssm (.*)/],
          download: 'h4:contains("pre-release")+.noIndent>a[href$=".zip"]'
        }
      }
    },
    NSudo: {
      site: {
        GitHub: 'https://github.com/M2Team/NSudo/releases/latest'
      },
      install: ['install', null, '"*\\NSudo Launcher\\x64"']
    },
    NTLite: {
      withoutHeader: true,
      useProxy: true,
      commercial: 2,
      url: 'https://www.ntlite.com/download/',
      version: '.hb-main-content >div:nth-child(2)>.vc_column_container h4',
      changelog: ['https://www.ntlite.com/changelog/', '.hb-main-content>div:nth-child(2) .hb-box-cont-body'],
      download: 'http://downloads.ntlite.com/files/NTLite_setup_x64.exe',
      install: 'install_inno',
      other: {
        beta: {
          version: '.hb-main-content >div:nth-child(2)>.vc_column_container:nth-child(2) h4',
          changelog: {
            url: '.hb-main-content >div:nth-child(2)>.vc_column_container:nth-child(2) h4>[title="Changelog"]',
            selector: '.hb-main-content>div:nth-child(2) .hb-box-cont-body'
          },
          download: 'http://downloads.ntlite.com/files/NTLite_setup_x64_beta.exe'
        }
      }
    },
    nTrun: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_169324.html'
      },
      install: ['install', null, 'nTrun*']
    },
    Nuclear: {
      site: {
        GitHub: 'https://github.com/nukeop/nuclear/releases'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Nucleus: {
      site: {
        GitHub: 'https://github.com/AlexAltea/nucleus/releases/latest'
      },
      versionChoice: 'win64.zip',
      install: 'install'
    },
    Numculator: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/PORTABLE-SOFTWARE/Education/Portable-Numculator.shtml'
      },
      install: 'install'
    },
    nushell: {
      site: {
        GitHub: 'https://github.com/nushell/nushell/releases/latest'
      },
      versionChoice: 'windows.msi',
      install: ['install_msi', null, 'nu.exe']
    },
    Nutstore: {
      url: 'http://help.jianguoyun.com/?p=1415',
      version: ['[dir="ltr"]>strong', 'text', /（WPF\s*([\d.]+)）/],
      changelog: '[dir="ltr"]+ol',
      download: 'https://www.jianguoyun.com/static/exe/installer/NutstoreWindowsInstaller.exe',
      fixedPath: '%ProgramFiles%\\Nutstore\\Nutstore.exe',
      install: 'install_ai_cli'
    },
    NVCleanstall: {
      site: {
        TechPowerUp: 'https://www.techpowerup.com/download/techpowerup-nvcleanstall/'
      },
      install: 'install_single'
    },
    nvm: {
      site: {
        GitHub: 'https://github.com/coreybutler/nvm-windows/releases/latest'
      },
      versionChoice: 'noinstall.zip',
      install: 'install'
    },
    NVSlimmer: {
      site: {
        MajorGeeks: 'http://www.majorgeeks.com/mg/getmirror/nvslimmer,1.html'
      },
      install: 'install'
    },
    'NZXT CAM': {
      url: 'http://nzxt-app.nzxt.com/latest.yml',
      version: (res, $) => res.body.match(/version: (.*)/)[1],
      download: (res, $) => 'http://nzxt-app.nzxt.com/' + res.body.match(/- url: (.*)/)[1],
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    'N_m3u8DL-CLI': {
      site: {
        GitHub: 'https://github.com/nilaoda/N_m3u8DL-CLI/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single',
      other: {
        gui: {
          versionChoice: '.zip',
          install: 'install'
        }
      }
    }
  }
};
