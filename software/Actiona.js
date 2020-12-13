'use strict';

const data = {
  url: 'https://wiki.actiona.tools/doku.php?id=:en:start',
  version: 'p:has([href="/doku.php?id=en:changelog"])',
  changelog: {
    url: 'https://wiki.actiona.tools/doku.php?id=en:changelog',
    selector: '.page',
    attr: 'text',
    match: /^v[\d.]+/,
    split: true
  },
  download: 'a[href$="windows-64bit.7z"]',
  install: 'install'
};
module.exports = data;
