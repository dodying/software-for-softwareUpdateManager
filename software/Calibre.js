'use strict';

const data = {
  site: {
    download: 'https://calibre-ebook.com/changelog.rss'
  },
  versionChoice: ['https://calibre-ebook.com/dist/win64', /calibre-64bit-(.*?).msi/],
  changelog: async (res, $, fns, choice) => [$('item>description').eq(0).text(), true],
  install: ['install_msi', null, 'calibre.exe'],
  other: {
    portable: {
      versionChoice: ['https://calibre-ebook.com/dist/portable', /calibre-portable-installer-(.*?).exe/],
      install: info => info.fns.install.cli(info, null, [require('path').resolve(info.parentPath, '../')])
    }
  }
};
module.exports = data;
