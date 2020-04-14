'use strict';

const data = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/passwordsafe/files/Windows/'
  },
  downloadChoice: [null, /pwsafe64-(.*?).exe\//],
  install: 'install_nsis'
};
module.exports = data;
