'use strict';

module.exports = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/gparted/files/gparted-live-stable/'
  },
  downloadChoice: [null, /gparted-live-(.*?)-amd64.iso/],
  changelog: ['https://gparted.org/news.php', '.newsbody'],
  other: {
    test: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/gparted/files/gparted-live-testing/'
      }
    }
  }
};
