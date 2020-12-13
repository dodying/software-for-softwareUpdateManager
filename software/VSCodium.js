'use strict';

module.exports = {
  site: {
    GitHub: 'https://github.com/VSCodium/vscodium/releases/latest'
  },
  versionChoice: 'VSCodiumUserSetup-x64-(.*?).exe',
  install: ['install_inno', null, { '{code_GetDestDir}': '{dir}' }]
};
