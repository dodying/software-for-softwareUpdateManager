'use strict';

module.exports = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/endless-sky.mirror/files/'
  },
  versionChoice: /v(.*)/,
  downloadChoice: [/v(.*)/, 'endless-sky-win64-(.*?).zip'],
  install: 'install'
};
