'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/neovim/neovim/releases/latest'
  },
  downloadChoice: 'nvim-win64.zip',
  install: 'install',
  other: {
    nightly: {
      site: {
        GitHub: 'https://github.com/neovim/neovim/releases'
      },
      versionChoice: ['nvim-win64.zip', /NVIM ([\d.]+.*)/, null, 'name']
    }
  }
};
module.exports = data;
