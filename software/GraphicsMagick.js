'use strict';

module.exports = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/graphicsmagick/files/graphicsmagick-binaries/'
  },
  versionChoice: /(.*)/,
  downloadChoice: [null, 'GraphicsMagick-(.*)-Q16-win64-dll.exe'],
  install: 'install_inno'
};
