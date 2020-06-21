'use strict';

module.exports = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/wampserver/files/WampServer%203/'
  },
  versionChoice: [[null, null, 'WampServer', null, 'href'], 'wampserver(.*?)_x64.exe'],
  downloadChoice: ['WampServer', 'wampserver(.*?)_x64.exe'],
  install: 'install_inno_cli',
  other: {
    portable: {
      versionChoice: [[null, null, 'Wampee', null, 'href'], 'Wampee-(.*?).7z'],
      downloadChoice: ['Wampee', 'Wampee-(.*?).7z'],
      install: 'install'
    }
  }
};
