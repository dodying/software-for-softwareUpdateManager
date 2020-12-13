// 'use strict';

// const data = {
//   url: 'https://www.rizonesoft.com/downloads/notepad3/',
//   version: 'th:contains("Version")+td',
//   changelog: ['https://www.rizonesoft.com/downloads/notepad3/update/', '.entry-content'],
//   download: 'https://www.rizonesoft.com/software/notepad3/Notepad3_{version}.zip',
//   install: ['install_zipped', 'install', 'x64.zip']
// };
// module.exports = data;
'use strict';

module.exports = {
  site: {
    GitHub: 'https://github.com/rizonesoft/Notepad3/releases/latest'
  },
  versionChoice: ['.zip$', /RELEASE_(.*)/],
  install: 'install'
};
