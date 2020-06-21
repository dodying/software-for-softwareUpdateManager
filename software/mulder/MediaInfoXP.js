'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/lordmulder/mediainfo-gui/releases/latest'
  },
  versionChoice: 'MediaInfo-GUI(.*).zip',
  install: 'install_zipped_single',
  other: {
    cli: {
      versionChoice: 'MediaInfo-CLI(.*).zip'
    }
  }
};
module.exports = data;
