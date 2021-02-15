'use strict';

// 'use strict';
// // Referrer: https://www.portablefreeware.com/index.php?id=483
// // To disable advertisements: http://www.freewaregenius.com/how-to-turn-ads-off-in-utorrent/
let lastChoice;

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    U2TrackerUpdater: {
      site: {
        GitHub: 'https://github.com/LoidVC/U2TrackerUpdater/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    'Uber Apk Signer': {
      site: {
        GitHub: 'https://github.com/patrickfav/uber-apk-signer/releases/latest'
      },
      versionChoice: '.jar',
      install: 'install_single'
    },
    'Ubisoft Uplay': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Others/Fun/Uplay.shtml'
      },
      download: 'http://static3.cdn.ubi.com/orbit/launcher_installer/UplayInstaller.exe',
      install: 'install_nsis'
    },
    Ubooquity: {
      url: 'https://vaemendis.net/ubooquity/categorie2/release',
      version: 'h1>a',
      changelog: '[id^="post"]',
      download: 'http://vaemendis.net/ubooquity/service/download.php',
      install: 'install_zipped_single'
    },
    Udeler: {
      site: {
        GitHub: 'https://github.com/FaisalUmair/udemy-downloader-gui/releases/latest'
      },
      versionChoice: 'x64.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    ueli: {
      site: {
        GitHub: 'https://github.com/oliverschwendener/ueli/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    uGet: {
      withoutHeader: true,
      url: 'https://ugetdm.com/downloads/windows/',
      version: '[data-content-shortcode="vcache type=\\"uget\\" mode=\\"versions\\" key=\\"stable\\" label=\\"uGet: \\""]',
      download: 'https://ugetdm.com/go/windows-download',
      install: 'install'
    },
    ugrep: {
      site: {
        GitHub: 'https://github.com/Genivia/ugrep/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    'UHARC GUI': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/muldersoft/files/UHARC%20GUI/'
      },
      versionChoice: /\.([\d-]+).zip/,
      install: 'install_zipped_single'
    },
    UltraCopier: {
      commercial: 2,
      url: 'https://ultracopier.first-world.info/download.html',
      version: ['.piwik_download[href*="x86_64"]', 'href', /ultracopier-windows-x86_64-(.*?)-setup.exe/],
      download: '.piwik_download[href*="x86_64"]',
      install: 'install_nsis'
    },
    UltraDefrag: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/ultradefrag/files/stable-release/'
      },
      downloadChoice: [null, 'bin.amd64.zip'],
      install: 'install'
    },
    UltraExplorer: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/File-managers/UltraExplorer.shtml'
      },
      install: 'install_inno'
    },
    UltraISO: {
      url: 'https://www.ultraiso.com/download.html',
      version: '#main > table > tbody > tr:nth-child(7) > td:nth-child(2) > div > table > tbody > tr:nth-child(2) > td:nth-child(1)',
      changelog: ['https://www.ultraiso.com/history.html', '#main > table > tbody > tr:nth-child(6)'],
      download: 'a[href$=".exe"]',
      install: 'install_inno'
    },
    ultraSurf: {
      tags: ['proxy'],
      useProxy: true,
      // url: 'http://wujieliulan.com/',
      // version: '#sidebar-right>div:has(a[href="http://wujieliulan.com/download/u.exe"])',
      // download: 'http://wujieliulan.com/download/u.exe',
      site: {
        FileCroco: 'https://www.filecroco.com/download-ultrasurf/download/'
      },
      download: 'https://ultrasurf.us/download/ultrasurf.exe',
      install: 'install_single'
    },
    UltraUXThemePatcher: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/OS-Enhancements/UltraUXThemePatcher.shtml'
      },
      install: 'install_single'
    },
    UltraViewer: {
      url: 'https://ultraviewer.net/en/download.html',
      version: ['[href$=".exe"]', 'href', /UltraViewer_setup_([\d.]+)_en.exe/],
      download: '[href$=".exe"]',
      install: 'install_inno_cli'
    },
    UltWin: {
      url: 'https://www.ultwin.com/download.html',
      version: '.classTableLT+td',
      download: 'https://www.ultwin.com/dls/UltWinSetup.exe'
    },
    Unciv: {
      site: {
        GitHub: 'https://github.com/yairm210/Unciv/releases/latest'
      },
      versionChoice: 'Windows64.zip',
      install: 'install'
    },
    Uncolored: {
      site: {
        GitHub: 'https://github.com/n457/Uncolored/releases/latest'
      },
      versionChoice: ['setup.exe', /v\.(.*)/],
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    UNetbootin: {
      site: {
        GitHub: 'https://github.com/unetbootin/unetbootin/releases/latest'
      },
      versionChoice: 'windows(.*).exe',
      install: 'install_single'
    },
    ungit: {
      site: {
        GitHub: 'https://github.com/FredrikNoren/ungit/releases/latest'
      },
      versionChoice: 'win32-x64.zip',
      install: 'install'
    },
    'Ungoogled Chromium': {
      site: {
        GitHub: 'https://github.com/tangalbert919/ungoogled-chromium-binaries/releases/latest'
      },
      install: 'install'
    },
    'Unicode Audio Tools': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/muldersoft/files/Unicode%20Audio%20Tools/'
      },
      versionChoice: /\.([\d-]+).rar/,
      install: 'install'
    },
    'Unified Remote': {
      site: {
        download: 'https://www.unifiedremote.com/download/other'
      },
      versionChoice: ['https://www.unifiedremote.com/download/windows-portable', 'Server-(.*?).zip'],
      install: 'install',
      other: {
        v2: {
          versionChoice: ['https://www.unifiedremote.com/download/windows-v2-portable', 'Server-(.*?).zip']
        }
      }
    },
    'Unity Assets Bundle Extractor': {
      site: {
        GitHub: 'https://github.com/DerPopo/UABE/releases/latest'
      },
      versionChoice: '64bit.zip',
      install: 'install'
    },
    'Universal Extractor 2': {
      site: {
        GitHub: 'https://github.com/Bioruebe/UniExtract2/releases'
      },
      install: 'install'
    },
    'Universal Extractor mod by koros aka ya158': {
      url: 'http://forum.oszone.net/thread-295084.html',
      version: (res, $) => $('.fieldset>div>b:nth-child(3)').eq(0).text().split('-').reverse().join('-')
    },
    'Universal Proxy Software': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/universal-proxy-software/files/'
      },
      versionChoice: 'Universal Proxy Tool (.*?).zip',
      downloadChoice: 'Universal Proxy Tool (.*?).zip',
      install: 'install'
    },
    UniversalMediaServer: {
      site: {
        GitHub: 'https://github.com/UniversalMediaServer/UniversalMediaServer/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install'
    },
    'Unofficial-Realtek-UAD-generic': {
      site: {
        GitHub: 'https://github.com/pal1000/Realtek-UAD-generic/releases/latest'
      },
      install: 'install'
    },
    'Unreal Commander': {
      commercial: 2,
      url: 'https://x-diesel.com/?download',
      version: '#style1',
      changelog: ['https://x-diesel.com/?whatsnew', 'body > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td > ul'],
      download: 'a[href$=".exe?64"]',
      install: 'install_inno'
    },
    Untrunc: {
      site: {
        GitHub: 'https://github.com/anthwlock/untrunc/releases'
      },
      versionChoice: '_x64.zip',
      install: 'install'
    },
    UpdateStar: {
      commercial: 2,
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/System-Miscellaneous/UpdateStar.shtml'
      },
      download: 'http://static.updatestar.net/dl/updatestar/updatestar/UpdateStar_ENU.msi',
      install: ['install_msi', null, 'UpdateStar.exe']
    },
    upupoo: {
      url: 'http://www.upupoo.com/',
      version: '.editionTip',
      download: (res) => res.body.match(/window.open\('(.*?)'/)[1],
      install: info => {
        const fse = require('fs-extra');
        const path = require('path');
        const cp = require('child_process');

        const name = Math.random().toString().substr(2);

        cp.execSync(`plugins\\7z.exe x -sccUTF-8 -y -o"unzip\\${name}\\" "${info.output}"`);
        const fromNew = `unzip\\${name}`;
        const list = fse.readdirSync(fromNew);

        if (!fse.existsSync(info.parentPath)) fse.mkdirsSync(info.parentPath);
        let tempPath = 'unzip\\upupoo';
        tempPath = path.resolve(info.fns.dirname, tempPath);
        fse.mkdirSync(tempPath);

        let myDocuments = cp.execSync('reg query "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\User Shell Folders" /v Personal').toString();
        myDocuments = myDocuments.match(/REG_EXPAND_SZ\s+(.*)\s/)[1];
        const myDocumentsDir = path.resolve(myDocuments, 'Upupoo');
        if (!fse.existsSync(myDocumentsDir)) fse.mkdirsSync(myDocumentsDir);

        list.filter(i => path.extname(i) === '.zip').forEach(i => {
          const _thisFullPath = path.resolve(info.fns.dirname, fromNew, i);
          let outputDir;
          if (i === 'bizhi.zip') {
            outputDir = path.resolve(path.parse(info.path).root, 'UpupooResource');
          } else if (i === 'resource.zip') {
            outputDir = myDocumentsDir;
          } else {
            outputDir = tempPath;
          }
          cp.execSync(`plugins\\7z.exe x -sccUTF-8 -y -o"${outputDir}\\" "${_thisFullPath}"`);
        });

        list.filter(i => path.extname(i) === '.upup').forEach(i => {
          const _thisFullPath = path.resolve(info.fns.dirname, fromNew, i);
          const _thisFullPathNew = path.resolve(myDocumentsDir, i);
          fse.copySync(_thisFullPath, _thisFullPathNew);
        });

        fse.copySync(tempPath, info.parentPath);
        return true;
      }
    },
    upx: {
      site: {
        GitHub: 'https://github.com/upx/upx/releases/latest'
      },
      versionChoice: 'win64(.*).zip',
      install: ['install_zipped_single', 'upx.exe']
    },
    'USB Oblivion': {
      site: {
        SourceForge: 'https://sourceforge.net/projects/usboblivion/files/'
      },
      versionChoice: [null, /usboblivion-([\d.]+).zip/],
      install: 'install'
    },
    USBCopyer: {
      site: {
        GitHub: 'https://github.com/kenvix/USBCopyer/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    'UsbEAm Hosts Editor': {
      url: 'https://www.dogfight360.com/Usbeam/Patch.php',
      version: '.entry-title',
      changelog: {
        selector: 'figure+blockquote',
        attr: 'text',
        match: /^V[\d.]+/,
        split: true
      },
      download: 'a[href$=".zip"]:contains("下载")',
      install: 'install'
    },
    uTools: {
      url: 'https://resource.u-tools.cn/version/latest.yml',
      version: (res, $) => res.body.match(/uTools-(.*?).exe/)[1],
      download: (res, $) => 'https://resource.u-tools.cn/version/' + res.body.match(/path: (.*)/)[1],
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    uTorrent: {
      url: 'https://download-new.utorrent.com/client-versions.json',
      version: (res, $, fns, choice = {}) => { lastChoice = choice; return res.json[choice.edition || 'utorrent'].find(i => i.track === (choice.track || 'stable')).target; },
      changelog: ['https://blog.utorrent.com/releases/windows/', '.entry-content'],
      download: (res, $, fns, choice) => { choice = choice || lastChoice; return `https://download-new.utorrent.com/uuid/${res.json[choice.edition || 'utorrent'].find(i => i.track === (choice.track || 'stable')).uuid}`; }, // download-lb.utorrent.com
      install: ['install_zipped_single', 'Carrier.EXE'],
      afterInstall: info => {
        const path = require('path');
        const fs = require('fs');
        const setting = path.resolve(info.parentPath, 'settings.dat');
        if (!fs.existsSync(setting)) fs.writeFileSync(setting, '');
      },
      other: {
        beta: {
          changelog: ['https://utclient.utorrent.com/offers/beta_release_notes/release_notes.html', '.content>.post'],
          versionChoice: { track: 'beta' },
          install: null
        },
        web: {
          changelog: ['https://blog.utorrent.com/releases/windows-web/', '.entry-content'],
          versionChoice: { edition: 'utweb', track: 'stable' },
          install: 'install'
        },
        'web-beta': {
          changelog: null,
          versionChoice: { edition: 'utweb', track: 'beta' },
          install: 'install_nsis'
        },
        '3rdparty': {
          changelog: null,
          versionChoice: { edition: 'utorrent-3rdparty', track: 'stable' },
          install: null
        },
        browser: {
          changelog: null,
          versionChoice: { edition: 'ut-browser', track: 'beta' },
          install: ['install_zipped', 'install']
        },
        hydra: {
          changelog: null,
          versionChoice: { edition: 'hydra-ut', track: 'stable' },
          install: 'install'
        },
        'hydra-beta': {
          changelog: null,
          versionChoice: { edition: 'hydra-ut', track: 'beta' },
          install: 'install'
        }
      }
    }
  }
};
