'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/oneclick/rubyinstaller2/releases/latest'
  },
  versionChoice: ['devkit(.*)x64.exe', /RubyInstaller-(.*)/],
  install: 'install_inno',
  other: {
    nodevkit: {
      versionChoice: ['x64.7z', /RubyInstaller-(.*)/],
      install: 'install'
    }
  }
};
module.exports = data;
