'use strict';

module.exports = {
  site: {
    GitHub: 'https://github.com/sandboxie-plus/Sandboxie/releases/latest'
  },
  versionChoice: ['SandboxieInstall64-v(.*).exe', /\/ ([\d.]+)/, false, 'name'],
  install: ['install_cli', null, ['/lang=2052', '/install', '/S', '/D={dir}'], { wait: true, shell: true }],
  other: {
    plus: {
      versionChoice: 'Sandboxie-Plus-x64-v(.*?).exe',
      install: null
    }
  }
};
