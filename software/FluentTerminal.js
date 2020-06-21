'use strict';

module.exports = {
  site: {
    chocolatey: 'https://chocolatey.org/packages/fluent-terminal'
  },
  install: ['install_zipped', 'install_zipped', 'tools\\\\FluentTerminal_.*.zip', (info) => info.fns.install.cli(info, 'powershell', ['-File', info.output]), 'Install.ps1']
};
