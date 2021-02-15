'use strict';

let lastChoice;

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    B0Pass: {
      site: {
        GitHub: 'https://github.com/bitepeng/b0pass/releases/latest'
      },
      versionChoice: 'b0pass_win32.exe',
      install: 'install_single'
    },
    'Baidu NetDisk': {
      url: 'https://pan.baidu.com/disk/cmsdata?platform=guanjia',
      version: (res, $) => res.json.list[0].version.match(/百度网盘PC版V(.*)/),
      changelog: (res, $) => res.json.list[0].detail[0].more.join('\n'),
      download: (res, $) => res.json.list[0].url,
      install: 'install_nsis_cli'
    },
    'baidu-netdisk-downloaderx': {
      site: {
        GitHub: 'https://github.com/88250/baidu-netdisk-downloaderx/releases/latest'
      },
      versionChoice: 'windows.zip',
      install: 'install'
    },
    BaiduCDP: {
      site: {
        GitHub: 'https://github.com/cool2528/baiduCDP/releases/latest'
      },
      install: 'install'
    },
    Balabolka: {
      url: 'http://balabolka.site/changelog.txt',
      version: (res, $) => res.body.match(/[\d-]+\s+v([\d.]+)/)[1],
      changelog: {
        match: /^[\d-]+\s+v[\d.]+$/,
        split: true
      },
      download: 'http://balabolka.site/balabolka.zip'
    },
    balenaEtcher: {
      site: {
        GitHub: 'https://github.com/balena-io/etcher/releases/latest'
      },
      versionChoice: '-Portable-(.*).exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    BandcampDownloader: {
      site: {
        GitHub: 'https://github.com/Otiel/BandcampDownloader/releases/latest'
      },
      install: 'install_zipped_single'
    },
    BasicCAT: {
      site: {
        GitHub: 'https://github.com/xulihang/BasicCAT/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno'
    },
    Basilisk: {
      url: 'https://basilisk-browser.org/releasenotes.shtml',
      version: '.rn-header',
      changelog: '.additional-content>section',
      download: 'http://us.basilisk-browser.org/release/basilisk-latest.win64.installer.exe',
      install: ['install', null, 'core']
    },
    bat: {
      site: {
        GitHub: 'https://github.com/sharkdp/bat/releases/latest'
      },
      versionChoice: 'windows-msvc.zip',
      install: 'install_zipped_single'
    },
    Baton: {
      site: {
        GitHub: 'https://github.com/americanexpress/baton/releases/latest'
      },
      versionChoice: 'windows_amd64.tar.gz',
      install: ['install_zipped', 'install_zipped_single']
    },
    BatteryBar: {
      commercial: 3,
      url: 'https://batterybarpro.com/basic.php',
      version: ['[href$=".exe"]', 'href', /BatteryBarSetup-([\d.]+).exe/],
      download: '[href$=".exe"]',
      install: 'install_nsis'
    },
    Bdash: {
      site: {
        GitHub: 'https://github.com/bdash-app/bdash/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Beaker: {
      site: {
        GitHub: 'https://github.com/beakerbrowser/beaker/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z'],
      other: {
        beta: {
          site: {
            GitHub: 'https://github.com/beakerbrowser/beaker/releases'
          }
        }
      }
    },
    BearyChat: {
      url: 'https://bearychat.com/releases/client/changelog.json',
      version: (res, $) => res.json.body.releases[0].version,
      changelog: async (res, $) => [].concat(res.json.body.releases[0].added, res.json.body.releases[0].fixed).filter(i => i).join('\n'),
      download: 'https://static.bearychat.com/v2/BearyChat-x64.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    BedrockConnect: {
      site: {
        GitHub: 'https://github.com/Pugmatt/BedrockConnect/releases/latest'
      },
      versionChoice: '.jar',
      install: 'install_single'
    },
    BeeBEEP: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/beebeep/files/Windows/'
      },
      versionChoice: /beebeep-([\d.]+).zip/,
      install: 'install'
    },
    Beeftext: {
      site: {
        GitHub: 'https://github.com/xmichelo/Beeftext/releases/latest'
      },
      install: 'install'
    },
    Berrycast: {
      commercial: 2,
      site: {
        download: 'https://www.berrycast.com/'
      },
      versionChoice: 'https://api.berrycast.app/desktop/versions/last/download/windows',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    BestSync: {
      commercial: 2,
      url: 'http://www.risefly.com/fselog.htm',
      version: '[name^="Ver"]',
      changelog: 'h3+ul',
      download: 'http://www.risefly.com/2019/BestSyncFilesX64.zip',
      install: ['install', null, 'BestSync']
    },
    BetterExplorer: {
      site: {
        GitHub: 'https://github.com/Gainedge/BetterExplorer/releases'
      }
    },
    Betwixt: {
      site: {
        GitHub: 'https://github.com/kdzwinel/betwixt/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    'Beyond Compare': {
      commercial: 3,
      url: 'https://scootersoftware.com/download.php?zz=v4changelog',
      version: '.changelog>h2',
      changelog: {
        selector: '.changelog',
        attr: 'text',
        match: /^[\d.]+/,
        split: true
      },
      download: async (res, $, fns, choice) => fns.walkLink('https://scootersoftware.com/download.php', fns, '#content a[href*="zh"]'),
      install: 'install_inno_type'
    },
    BiglyBT: {
      site: {
        GitHub: 'https://github.com/BiglySoftware/BiglyBT/releases/latest'
      },
      versionChoice: '.jar',
      install: 'install_single'
    },
    BigType: {
      url: 'http://euromatic.online.fr/bigtype/download.html',
      version: 'body > p.auto-style13 > a',
      download: 'http://euromatic.online.fr/bigtype/bigtype.zip',
      install: 'install_zipped_single'
    },
    'BILIBILI-HELPER': {
      site: {
        GitHub: 'https://github.com/JunzhouLiu/BILIBILI-HELPER/releases/latest'
      },
      install: ['install_zipped_single', '.jar']
    },
    BiliBiliHelper: {
      site: {
        GitHub: 'https://github.com/TheWanderingCoel/BiliBiliHelper/releases/latest'
      },
      versionChoice: 'windows.zip',
      install: 'install'
    },
    BililiveRecorder: {
      site: {
        GitHub: 'https://github.com/Bililive/BililiveRecorder/releases/latest'
      },
      versionChoice: 'Setup.exe',
      download: 'https://soft.danmuji.org/BililiveRecorder/Setup.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    BiLiRoku: {
      site: {
        GitHub: 'https://github.com/zyzsdy/biliroku/releases/latest'
      },
      install: 'install'
    },
    BinCAT: {
      site: {
        GitHub: 'https://github.com/airbus-seclab/bincat/releases/latest'
      },
      versionChoice: '-win64-',
      install: 'install'
    },
    'Bitcoin Payment Protocol Interface': {
      site: {
        GitHub: 'https://github.com/achow101/payment-proto-interface/releases/latest'
      },
      versionChoice: 'win64.exe',
      install: 'install_single'
    },
    BitComet: {
      useProxy: true,
      commercial: 1,
      url: 'https://www.bitcomet.com/en/downloads',
      version: '#version',
      changelog: async (res, $) => {
        const lineArr = $('.bc_downloads_changelog dl').eq(0).html().split(/<d[dt]>(.*)<\/d[dt]>/).map(i => i.trim()).filter(i => i);
        const split = lineArr.filter(line => line.match(/^v[\d.]+/));
        const start = lineArr.indexOf(split[0]);
        const end = lineArr.indexOf(split[1]);
        return lineArr.slice(start, end).join('\n');
      },
      download: 'https://download.bitcomet.com/achive/BitComet_{version}.zip',
      install: 'install'
    },
    BitDock: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_606941.html'
      },
      install: 'install_inno_type'
    },
    BitTorrent: {
      url: 'https://download-new.utorrent.com/client-versions.json',
      version: (res, $, fns, choice = {}) => { lastChoice = choice; return res.json[choice.edition || 'bittorrent'].find(i => i.track === (choice.track || 'stable')).target; },
      changelog: ['https://blog.bittorrent.com/releases/windows/', 'div>h3'],
      download: (res, $, fns, choice) => { choice = choice || lastChoice; return `https://download-new.utorrent.com/uuid/${res.json[choice.edition || 'bittorrent'].find(i => i.track === (choice.track || 'stable')).uuid}`; }, // download-lb.utorrent.com
      install: ['install_zipped_single', 'Carrier.EXE'],
      afterInstall: info => {
        const path = require('path');
        const fs = require('fs');
        const setting = path.resolve(info.parentPath, 'settings.dat');
        if (!fs.existsSync(setting)) fs.writeFileSync(setting, '');
      },
      other: {
        beta: {
          changelog: null,
          versionChoice: { track: 'beta' },
          install: null
        },
        web: {
          changelog: ['https://blog.bittorrent.com/releases/windows-web/', '.entry-content'],
          versionChoice: { edition: 'utweb', track: 'stable' },
          install: 'install'
        },
        'web-beta': {
          changelog: null,
          versionChoice: { edition: 'utweb', track: 'beta' },
          install: 'install_nsis'
        },
        sync: {
          changelog: null,
          versionChoice: { edition: 'btsync', track: 'stable' },
          install: null
        },
        '3rdparty': {
          changelog: null,
          versionChoice: { edition: 'bittorrent-3rdparty', track: 'stable' },
          install: null
        },
        '3rdparty-beta': {
          changelog: null,
          versionChoice: { edition: 'bittorrent-3rdparty', track: 'beta' },
          install: null
        },
        hydra: {
          changelog: null,
          versionChoice: { edition: 'hydra-bt', track: 'stable' },
          install: 'install'
        }
      }
    },
    Bitwarden: {
      site: {
        GitHub: 'https://github.com/bitwarden/desktop/releases/latest'
      },
      versionChoice: '-Portable-(.*).exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    Blackbird: {
      url: 'https://www.getblackbird.net/download/',
      version: '[color="#ffffff"]',
      changelog: ['https://www.getblackbird.net/documentation/changelog/', '.wpmd'],
      download: 'a[href$="x64.zip"]',
      install: 'install_zipped_single'
    },
    BleachBit: {
      url: 'https://www.bleachbit.org/download/windows',
      version: '.field-item>p',
      download: async (res, $, fns, choice) => {
        const uri1 = $('[href$="portable.zip"]').eq(0).attr('href');
        const res1 = await fns.reqHEAD(uri1);
        return res1.request.uri.href;
      },
      install: 'install',
      other: {
        nightly: {
          site: {
            AppVeyor: 'https://ci.appveyor.com/api/projects/az0/bleachbit'
          },
          downloadChoice: 'portable.zip'
        }
      }
    },
    Blender: {
      url: 'https://www.blender.org/download/',
      version: '#windows>a',
      changelog: ['https://wiki.blender.org/wiki/Reference/Release_Notes/{version}', '#mw-content-text'],
      download: (res, $) => $('.dl-header-cta-button').attr('href').replace('download', 'release').replace('www', 'download').replace(/\/$/, ''),
      install: ['install_msi', null, 'blender.exe']
    },
    Blocky: {
      site: {
        GitHub: 'https://github.com/0xERR0R/blocky/releases/latest'
      },
      versionChoice: 'amd64.exe',
      install: 'install_single'
    },
    'Blue Iris': {
      commercial: 3,
      url: 'https://blueirissoftware.com/updates/',
      version: '.vc_empty_space+div',
      changelog: '[id^="tab"]',
      download: 'https://blueirissoftware.com/blueiris.exe',
      install: ['install_ai_msi', null, 'Blue Iris.x64.msi', 'BlueIris.exe']
    },
    BlueStacks: {
      site: {
        download: 'https://support.bluestacks.com/hc/en-us/articles/360021469391'
      },
      versionChoice: ['https://cloud.bluestacks.com/get_offline_download?os_arch=x64', /BlueStacks-Installer_([\d.]+)_/],
      changelog: '.article-body>.wysiwyg-indent1+.wysiwyg-indent1'
    },
    Bochs: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/bochs/files/bochs/'
      },
      downloadChoice: [null, 'win64.zip'],
      install: 'install'
    },
    bomi: {
      site: {
        GitHub: 'https://github.com/xylosper/bomi/releases/latest'
      },
      versionChoice: i => !i.prerelease,
      download: 'https://sourceforge.net/projects/bomi/files/windows/latest/bomi-64bit.7z/download',
      install: 'install'
    },
    Bookmarks: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Bookmark-Managers/Portable-Bookmarks.shtml'
      },
      install: 'install_zipped_single'
    },
    BoostNote: {
      site: {
        GitHub: 'https://github.com/BoostIO/boost-releases/releases/latest'
      },
      versionChoice: 'full.nupkg',
      install: ['install', null, 'lib\\net*'],
      other: {
        next: {
          site: {
            GitHub: 'https://github.com/BoostIO/BoostNote.next/releases/latest'
          },
          versionChoice: 'win.exe',
          install: ['install_zipped', 'install', 'app-64.7z']
        }
      }
    },
    Bootice: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/Boot-Manager-Disk/Bootice.shtml'
      },
      install: ['install_zipped_single', /x64.*\.exe$/]
    },
    BorderlessGaming: {
      site: {
        GitHub: 'https://github.com/Codeusa/Borderless-Gaming/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_inno'
    },
    borg: {
      site: {
        GitHub: 'https://github.com/ok-borg/borg/releases/latest'
      },
      versionChoice: 'windows_amd64.exe',
      install: 'install_single'
    },
    'BotFramework-Emulator': {
      site: {
        GitHub: 'https://github.com/Microsoft/BotFramework-Emulator/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-32.7z']
    },
    bottom: {
      site: {
        GitHub: 'https://github.com/ClementTsang/bottom/releases/latest'
      },
      versionChoice: 'x86_64-pc-windows-msvc.zip',
      install: 'install_zipped_single'
    },
    BottomMost: {
      site: {
        GitHub: 'https://github.com/WGGSH/BottomMost/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    BowPad: {
      site: {
        GitHub: 'https://github.com/stefankueng/BowPad/releases/latest'
      },
      versionChoice: 'BowPad64-(.*)-portable.zip',
      install: 'install_zipped_single'
    },
    'BoxedApp Packer': {
      commercial: 3,
      url: 'https://www.boxedapp.com/boxedapppacker/changelog.html',
      version: ['h2>a[name]', 'name'],
      changelog: '.cbp_tmlabel>div',
      download: 'https://www.boxedapp.com/download/boxedapppacker__demo',
      install: 'install_inno'
    },
    Brackets: {
      site: {
        GitHub: 'https://github.com/adobe/brackets/releases/latest'
      },
      versionChoice: ['.msi', /release-(.*)/],
      install: ['install_msi', null, 'Brackets.exe']
    },
    Brave: {
      site: {
        GitHub: 'https://github.com/brave/brave-browser/releases'
      },
      versionChoice: i => i.name.match(/Release Channel/) && i.assets.some(j => j.name.match(/win32-x64.zip$/)),
      downloadChoice: /win32-x64.zip$/,
      install: 'install',
      other: {
        beta: {
          versionChoice: i => i.name.match(/Beta Channel/) && i.assets.some(j => j.name.match(/win32-x64.zip$/)),
          downloadChoice: /win32-x64.zip$/
        },
        dev: {
          versionChoice: i => i.name.match(/Dev Channel/) && i.assets.some(j => j.name.match(/win32-x64.zip$/)),
          downloadChoice: /win32-x64.zip$/
        },
        nightly: {
          versionChoice: i => i.name.match(/Nightly Channel/) && i.assets.some(j => j.name.match(/win32-x64.zip$/)),
          downloadChoice: /win32-x64.zip$/
        }
      }
    },
    Brook: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/txthinking/brook/releases/latest'
      },
      versionChoice: 'amd64.exe',
      install: 'install_single'
    },
    Broot: {
      site: {
        GitHub: 'https://github.com/Canop/broot/releases/latest'
      },
      download: 'https://dystroy.org/broot/download/x86_64-pc-windows-gnu/broot.exe',
      install: 'install_single'
    },
    Brosix: {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/Chat/Instant-Messaging/Brosix.shtml'
      },
      download: 'https://www.brosix.com/downloads/builds/official/Brosix.zip',
      install: 'install'
    },
    browsh: {
      site: {
        GitHub: 'https://github.com/browsh-org/browsh/releases/latest'
      },
      versionChoice: 'windows_amd64.exe',
      install: 'install_single'
    },
    'Build Checker App': {
      site: {
        GitHub: 'https://github.com/willmendesneto/build-checker-app/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    'Bulk Crap Uninstaller': {
      site: {
        GitHub: 'https://github.com/Klocman/Bulk-Crap-Uninstaller/releases/latest'
      },
      versionChoice: 'portable.zip',
      install: 'install'
    },
    'Bulk Rename Utility': {
      url: 'https://www.bulkrenameutility.co.uk/Download.php',
      version: '.h5>span',
      download: 'https://www.bulkrenameutility.co.uk/Downloads/BRU_setup.exe',
      install: 'install_inno_type'
    },
    BurnAware: {
      commercial: 3,
      url: 'http://www.burnaware.com/download.html',
      version: 'h4:contains("BurnAware Professional")+h5+p',
      download: 'a[href$=".exe"][href*="_pro_"]',
      install: 'install_inno'
    },
    Buttercup: {
      site: {
        GitHub: 'https://github.com/buttercup/buttercup-desktop/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    'Bvckup 2': {
      commercial: 3,
      site: {
        download: 'https://www.bvckup2.com/'
      },
      versionChoice: ['https://www.bvckup2.com/get', /bvckup2-setup-(.*?).exe/]
    },
    'Bytecode Viewer': {
      site: {
        GitHub: 'https://github.com/Konloch/bytecode-viewer/releases/latest'
      },
      versionChoice: '.jar',
      install: 'install_single'
    },
    B站录播机: {
      url: 'http://live.weibo333.com/',
      version: ['[href$=".zip"][href*="B站直播录制机64位"]', 'href', /64位-v(.*?).zip/],
      download: '[href$=".zip"][href*="B站直播录制机64位"]',
      install: ['install', null, 'live-recorder-win32-x64\\']
    }
  }
};
