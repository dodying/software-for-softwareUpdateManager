'use strict';

module.exports = {
  type: 'software-list',
  noDirectory: true,
  list: {
    '163MusicLyrics': {
      site: {
        GitHub: 'https://github.com/jitwxs/163MusicLyrics/releases/latest'
      },
      install: 'install'
    },
    '1Clipboard': {
      url: 'http://1clipboard.io/update',
      version: '.dotted+p>strong',
      changelog: '.dotted+p+ul',
      download: 'http://1clipboard.io/download/windows/1ClipboardSetup.exe',
      install: ['install_zipped', 'install', 'full.nupkg', null, 'lib\\net*']
    },
    '1Password': {
      url: 'https://app-updates.agilebits.com/product_history/OPW6',
      version: ['article[id]:not(.beta)>h3 a[href^="#"]', 'title', /(.*) - build/],
      changelog: 'article[id]:not(.beta)',
      download: 'article[id]:not(.beta)>h3 a[href$=".exe"]',
      install: 'install_single',
      other: {
        beta: {
          version: ['article[id]>h3 a[href^="#"]', 'title', /(.*) - build/],
          changelog: 'article[id]',
          download: 'article[id]>h3 a[href$=".exe"]'
        },
        4: {
          url: 'https://app-updates.agilebits.com/product_history/OPW4'
        },
        1: {
          url: 'https://app-updates.agilebits.com/product_history/OPW3'
        }
      }
    },
    '33台词': {
      url: 'https://33-app.agilestudio.cn/',
      version: ['.download-btn', 'href', /%20([\d.]+).exe/],
      download: '.download-btn',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    '3proxy': {
      site: {
        GitHub: 'https://github.com/z3APA3A/3proxy/releases/latest'
      },
      versionChoice: '-x64.zip',
      install: 'install',
      other: {
        lite: {
          versionChoice: '-lite.zip'
        }
      }
    },
    '3RVX': {
      url: 'https://3rvx.com/',
      version: 'a[href$=".zip"]',
      download: 'a[href$=".zip"]',
      install: 'install'
    },
    '4t Tray Minimizer': {
      commercial: 2,
      url: 'http://www.4t-niagara.com/tray.html',
      version: '.download_link>ul>li',
      changelog: ['http://www.4t-niagara.com/tray_history.html', '#content'],
      download: 'http://www.4t-niagara.com/files/4t-min.exe',
      install: 'install_inno'
    },
    '7 Sticky Notes': {
      url: 'http://www.7stickynotes.com/download.php',
      version: '#download_details',
      changelog: '#release_notes',
      download: '#downloadbt>a',
      install: 'install_inno'
    },
    '7-Zip': {
      url: 'https://www.7-zip.org/download.html',
      version: 'h1+p',
      changelog: {
        url: 'https://www.7-zip.org/history.txt',
        split: true
      },
      download: '.Item>a[href$="x64.exe"]',
      install: 'install',
      other: {
        cli: {
          install: ['install', null, '7z.exe 7z.dll']
        },
        1505: {
          version: () => '15.05',
          download: 'https://sourceforge.net/projects/sevenzip/files/7-Zip/15.05/7z1505-x64.exe/download'
        }
      }
    },
    '86Box': {
      site: {
        GitHub: 'https://github.com/86Box/86Box/releases/latest'
      },
      versionChoice: '86Box-32-.*?.zip',
      install: 'install'
    }
  }
};
