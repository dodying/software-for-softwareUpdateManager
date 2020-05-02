'use strict';

const data = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/freeplane/files/freeplane%20stable/'
  },
  versionChoice: /Freeplane-Setup-(.*?).exe/,
  downloadChoice: /Freeplane-Setup-(.*?).exe/,
  changelog: {
    url: 'https://www.freeplane.org/info/history/history_en.txt',
    match: /^[\d.]+/,
    split: true
  },
  install: 'install_inno',
  other: {
    preview: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/freeplane/files/freeplane%20preview/'
      },
      changelog: null
    }
  }
};
module.exports = data;
