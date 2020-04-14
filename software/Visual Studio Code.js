'use strict';

const data = {
  site: {
    download: 'https://code.visualstudio.com/updates/'
  },
  versionChoice: ['https://update.code.visualstudio.com/latest/win32-x64/stable', /VSCodeSetup-x64-(.*).exe/],
  changelog: '.body>ul',
  install: ['install_inno', null, { '{code_GetDestDir}': '{dir}' }]
};
module.exports = data;
