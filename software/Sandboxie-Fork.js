'use strict';

const data = {
  site: {
    GitHub: 'https://github.com/sandboxie-plus/Sandboxie/releases/latest'
  },
  downloadChoice: '[href*="SandboxieInstall64"][href$=".exe"]',
  install: ['install_cli', null, ['/lang=2052', '/install', '/S', '/D={dir}'], { wait: true, shell: true }]
};
module.exports = data;
