'use strict';

module.exports = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/frescobaldi.mirror/files/'
  },
  versionChoice: /v(.*)/,
  downloadChoice: [null, 'Frescobaldi.Setup.(.*?).exe'],
  install: 'install_inno'
};
