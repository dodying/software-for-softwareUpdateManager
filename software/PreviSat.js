'use strict';

module.exports = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/previsat/files/previsat/'
  },
  versionChoice: [null, null, 'previsat-(.*?)-exe-win32-64.zip'],
  install: ['install_zipped', 'install_inno']
};
