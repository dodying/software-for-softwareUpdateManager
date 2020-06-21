'use strict';

module.exports = {
  site: {
    download: 'http://zodcode.com/clipcube/download'
  },
  versionChoice: ['http://zodcode.com/clipcube/download/stable', 'ClipCube-(.*?).zip'],
  install: 'install_zipped_single',
  other: {
    dev: {
      versionChoice: ['http://zodcode.com/clipcube/download/dev', 'ClipCube-(.*?).zip']
    }
  }
};
