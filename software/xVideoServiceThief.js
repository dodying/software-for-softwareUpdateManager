'use strict';

module.exports = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/xviservicethief/files/Windows%20Binaries/'
  },
  versionChoice: /(.*) bin/,
  downloadChoice: [/(.*) bin/, 'windows-static.zip'],
  install: 'install'
};
