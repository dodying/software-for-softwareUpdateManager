'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Scintilla: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/scintilla/files/scintilla/'
      },
      versionChoice: /(.*)/,
      downloadChoice: [null, 'scintilla.*.zip'],
      install: 'install'
    },
    SciTE: {
      site: {
        SourceForge: 'https://sourceforge.net/projects/scintilla/files/SciTE/'
      },
      versionChoice: /(.*)/,
      downloadChoice: [null, 'wscite.*.zip'],
      install: 'install'
    }
  }
};
