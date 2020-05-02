'use strict';

const data = {
  url: 'https://www.adobe.com/solutions/ebook/digital-editions/download.html',
  version: '.text-light',
  changelog: {
    url: 'https://www.adobe.com/solutions/ebook/digital-editions/release-notes.html',
    selector: '.grid-cols-12',
    attr: 'text',
    match: /^Changes in ADE [\d.]+/,
    split: true
  },
  download: '[href*="adobe/digitaledition"][href$="Installer.exe"]',
  install: 'install_nsis'
};
module.exports = data;
