'use strict';

module.exports = {
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
};
