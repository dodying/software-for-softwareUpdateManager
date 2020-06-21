'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/ivoprogram/overwrite/releases/latest'
  },
  versionChoice: {
    filter: i => !i.prerelease,
    match: /ver([\d.]+)/
  },
  download: 'https://raw.githubusercontent.com/ivoprogram/overwrite/master/release/overwrite-windows-x86-64.exe',
  install: 'install_single'
};
module.exports = data;
