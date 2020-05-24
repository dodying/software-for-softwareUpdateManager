'use strict';

const data = {
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
};
module.exports = data;
