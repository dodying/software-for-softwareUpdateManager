'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/x64dbg/x64dbg/releases/latest'
  },
  versionChoice: ['.zip$', /(\d+[\d-_]+)/, false, 'name'],
  install: ['install', null, 'release\\']
};
module.exports = data;
