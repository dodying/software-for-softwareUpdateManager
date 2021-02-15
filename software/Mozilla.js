'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Firefox: {
      url: 'https://www.mozilla.org/en-US/firefox/latest/releasenotes/',
      version: ['.c-release-version', 'text', /(.*)/],
      changelog: '.c-release-notes',
      download: 'https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=zh-CN',
      install: ['install', null, 'core'],
      other: {
        developer: {
          url: 'https://www.mozilla.org/en-US/firefox/developer/notes/',
          download: 'https://download.mozilla.org/?product=firefox-devedition-latest-ssl&os=win64&lang=zh-CN'
        },
        nightly: {
          url: 'https://www.mozilla.org/en-US/firefox/nightly/notes/',
          download: 'https://download.mozilla.org/?product=firefox-nightly-latest-ssl&os=win64&lang=zh-CN'
        }
      }
    },
    Rhino: {
      site: {
        GitHub: 'https://github.com/mozilla/rhino/releases/latest'
      },
      versionChoice: ['.jar', /Rhino ([\d.]+)/, false, 'name'],
      install: 'install_single'
    },
    SeaMonkey: {
      url: 'https://www.seamonkey-project.org/releases/',
      version: 'h2>a',
      changelog: {
        url: '.release-date+div a',
        selector: '#new+.section'
      },
      download: 'https://archive.mozilla.org/pub/seamonkey/releases/{version}/win64/zh-CN/seamonkey-{version}.zh-CN.win64.installer.exe',
      install: ['install', null, 'core'],
      other: {
        beta: {
          version: ['h2:has(a[name]:contains("Beta"))+p+div strong>a', 'href', /(.*)/],
          changelog: null
        }
      }
    },
    Thunderbird: {
      url: 'https://www.thunderbird.net/notes/',
      version: ['h1+p', 'text', /Version (.*?),/],
      changelog: 'main>section>aside:has(h3[id])',
      download: 'https://download-installer.cdn.mozilla.net/pub/thunderbird/releases/{version}/win64/zh-CN/Thunderbird%20Setup%20{version}.exe',
      install: ['install', null, 'core'],
      other: {
        beta: {
          url: 'https://www.thunderbird.net/',
          version: ['.download-button-beta .download-link[href*="-SSL&os=win64"]', 'href', /thunderbird-(.*?)-SSL/],
          changelog: {
            url: '.download-button-beta [href*="releasenotes"]',
            selector: 'main>section>aside:has(h3[id])'
          }
        },
        nightly: {
          url: 'https://www.thunderbird.net/',
          version: ['.download-button-nightly .download-link[href*="win64"]', 'href', /thunderbird-(.*?)\.en-US/],
          changelog: null,
          download: '.download-button-nightly .download-link[href*="win64"]'
        }
      }
    }
  }
};
