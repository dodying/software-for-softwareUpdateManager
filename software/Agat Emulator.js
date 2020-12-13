'use strict';

module.exports = {
  site: {
    SourceForge: 'https://sourceforge.net/projects/agatemulator/files/agatemulator/'
  },
  versionChoice: /(.*)/,
  downloadChoice: [null, /agatemulator-(.*?).exe/],
  install: 'install_inno'
};
