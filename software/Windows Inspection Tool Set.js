'use strict';

module.exports = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/windowstoolset/files/Windows%20Inspection%20Tool%20Set/'
  },
  versionChoice: /(.*?) \(Release\)/,
  changelog: ['https://wits.magicsplat.com/versionhistory.html', '.content>ul'],
  downloadChoice: [/(.*?) \(Release\)/, /setup-wits-.*?\(64 bit\).exe/],
  install: ['install_zipped', 'install_msi', '.msi', null, 'wits.exe'],
  other: {
    beta: {
      versionChoice: /(.*?) \((Beta|Release)\)/,
      changelog: null,
      downloadChoice: [/(.*?) \((Beta|Release)\)/, /setup-wits-.*?\(64 bit\).exe/]
    }
  }
};
