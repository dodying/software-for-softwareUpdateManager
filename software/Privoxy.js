'use strict';

const data = {
  tags: ['proxy'],
  site: {
    SourceForge: 'https://sourceforge.net/projects/ijbswa/files/Win32/'
  },
  downloadChoice: [null, '.zip/download'],
  install: ['install', ['config.txt', 'trust.txt', /\.(filter|action)/]]
};
module.exports = data;
