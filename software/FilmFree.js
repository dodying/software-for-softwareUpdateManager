'use strict';

module.exports = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/filmfree/files/'
  },
  versionChoice: /FilmFree (.*?) Installer.zip/,
  install: ['install_zipped', 'install_msi', '.msi', null, 'FilmFree.exe']
};
