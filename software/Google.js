'use strict';

// https://api.pzhacm.org/iivb/cu.json
let channel, appid, download;
const getVersion = async (res, $, fns, choice) => {
  const res1 = await fns.req({
    uri: 'https://update.googleapis.com/service/update2',
    method: 'POST',
    headers: {
      // 'Cache-Control': 'no-cache',
      // 'Connection': 'Keep-Alive',
      // 'Pragma': 'no-cache',
      // 'User-Agent': 'Google Update/1.3.34.11;winhttp;cup-ecdsa',
      // 'X-Old-UID': 'age=-1; cnt=1',
      'X-Goog-Update-AppId': appid
      // 'X-Goog-Update-Updater': 'Omaha-1.3.34.11',
      // 'X-Goog-Update-Interactivity': 'fg',
      // 'X-Last-HR': '0x0',
      // 'X-Last-HTTP-Status-Code': '0',
      // 'X-Retry-Count': '0',
      // 'X-HTTP-Attempts': '1'
    },
    body: `<?xml version="1.0" encoding="UTF-8"?><request protocol="3.0" updater="Omaha" updaterversion="1.3.34.11" shell_version="1.3.34.11" ismachine="0" sessionid="{98004AE1-A134-445C-88CC-38D73A708DF9}" installsource="taggedmi" requestid="{FCE97847-CDB0-49A6-A829-453ADDAE824C}" dedup="cr" domainjoined="0"><hw physmemory="8" sse="1" sse2="1" sse3="1" ssse3="1" sse41="1" sse42="1" avx="1"/><os platform="win" version="10.0.17763.1" sp="" arch="x64"/><app appid="${appid}" version="" nextversion="" ap="x64-${channel}-statsdef_1" lang="zh-CN" brand="" client="" installage="-1" installdate="-1" iid="{4C539C69-EB94-04BD-D6D6-849FA977EAFD}"><updatecheck/><data name="install" index="empty"/></app></request>`
  });
  const $1 = fns.cheerio.load(res1.body);
  download = $1('url[codebase^="http://dl.google.com"]').attr('codebase') + $1('package[name]').attr('name');
  return $1('manifest[version]').attr('version');
};

module.exports = {
  type: 'software-list',
  list: {
    ACME: {
      site: {
        GitHub: 'https://github.com/google/acme/releases/latest'
      },
      versionChoice: 'acme-windows-amd64.exe',
      install: 'install_single'
    },
    'Android GPU Inspector': {
      site: {
        GitHub: 'https://github.com/google/agi/releases/latest'
      },
      versionChoice: 'windows.zip',
      install: 'install',
      other: {
        dev: {
          site: {
            GitHub: 'https://github.com/google/agi-dev-releases/releases/LATEST'
          }
        }
      }
    },
    'Android Platform Tools': {
      url: 'https://developer.android.com/studio/releases/platform-tools',
      version: 'h4[id]',
      download: 'https://dl.google.com/android/repository/platform-tools-latest-windows.zip',
      install: 'install'
    },
    'Android Studio SDK Tools': {
      url: 'https://developer.android.com/studio/index.html',
      version: '[data-modal-dialog-id="sdk_win_download"]',
      download: '[data-category="sdk_win_download"]',
      install: 'install'
    },
    'Android Studio': {
      url: 'https://developer.android.com/studio/index.html',
      version: '[data-modal-dialog-id="studio_win_bundle_download"]',
      download: '[data-category="studio_win_bundle_download"]',
      install: 'install'
    },
    Chrome: {
      url: 'https://www.google.cn/chrome/',
      version: async (res, $, fns, choice) => { channel = 'stable'; appid = '{8A69D345-D564-463C-AFF1-A69D9E530F96}'; return getVersion(res, $, fns, choice); },
      download: (res, $) => download,
      install: ['install_zipped', 'install'],
      other: {
        beta: {
          version: {
            func: async (res, $, fns, choice) => { channel = 'beta'; appid = '{8237E44A-0054-442C-B6B6-EA0509993955}'; return getVersion(res, $, fns, choice); }
          }
        },
        dev: {
          version: {
            func: async (res, $, fns, choice) => { channel = 'dev'; appid = '{401C381F-E0DE-4B85-8BD8-3F3F14FBDA57}'; return getVersion(res, $, fns, choice); }
          }
        },
        canary: {
          version: {
            func: async (res, $, fns, choice) => { channel = 'canary'; appid = '{4EA16AC7-FD5A-47C3-875B-DBF4A2008C20}'; return getVersion(res, $, fns, choice); }
          }
        }
      }
    },
    Dep: {
      site: {
        GitHub: 'https://github.com/golang/dep/releases/latest'
      },
      versionChoice: 'dep-windows-amd64.exe',
      install: 'install_single'
    },
    Drive: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Internet/File-Sharing/Google-Drive.shtml'
      },
      download: 'http://dl.google.com/drive/{version}/gsync.msi',
      install: ['install_msi', null, 'googledrivesync.exe']
    },
    'Earth Pro': {
      url: 'https://support.google.com/earth/answer/168344',
      fixedPath: '%ProgramFiles%\\Google\\Google Earth Pro\\client\\googleearth.exe',
      version: ['a[href$="-x64.exe"]', 'href'],
      changelog: ['https://support.google.com/earth/answer/40901?hl=zh-Hans', '.zippy-wrapper'],
      download: 'a[href$="-x64.exe"]',
      install: ['install_cli', null, ['OMAHA=1'], { wait: true }]
    },
    golang: {
      url: 'https://golang.google.cn/dl/',
      version: '.toggleButton',
      download: '.download[href$="amd64.msi"]',
      install: 'install_msi_cli'
    },
    libwebp: {
      url: 'http://downloads.webmproject.org/releases/webp/index.html',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        sort: true,
        match: /libwebp-(\d+[\d.]+\d+)-windows-x64.zip$/
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: 'a',
        sort: true,
        matchCheck: /libwebp-(\d+[\d.]+\d+)-windows-x64.zip$/
      }),
      install: ['install', null, '*/bin']
    },
    mock: {
      site: {
        GitHub: 'https://github.com/golang/mock/releases/latest'
      },
      versionChoice: 'windows_amd64.tar.gz',
      install: ['install_zipped', 'install_zipped_single']
    },
    Picasa: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Multimedia/Graphic/Graphic-Viewers/Picasa.shtml'
      },
      install: 'install_nsis'
    }
  }
};
