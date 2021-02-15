'use strict';

// 'use strict';
// const data = {
//   url: 'https://www.rizonesoft.com/downloads/notepad3/',
//   version: 'th:contains("Version")+td',
//   changelog: ['https://www.rizonesoft.com/downloads/notepad3/update/', '.entry-content'],
//   download: 'https://www.rizonesoft.com/software/notepad3/Notepad3_{version}.zip',
//   install: ['install_zipped', 'install', 'x64.zip']
// };
// module.exports = data;

module.exports = {
  type: 'software-list',
  list: {
    'Complete Internet Repair': {
      url: 'https://www.rizonesoft.com/downloads/complete-internet-repair/',
      version: 'th:contains("Version")+td',
      changelog: 'h1:contains("Changes")+ul',
      download: 'th:contains("Portable")+td>.download-link',
      install: 'install'
    },
    'DVD Drive Repair': {
      url: 'https://www.rizonesoft.com/downloads/dvd-drive-repair/',
      version: 'th:contains("Version")+td',
      changelog: 'h1:contains("Changes")+ul',
      download: 'th:contains("Portable")+td>.download-link',
      install: 'install'
    },
    Firemin: {
      url: 'https://www.rizonesoft.com/downloads/firemin/',
      version: 'th:contains("Version")+td',
      changelog: 'h1:contains("Changes")+ul',
      download: 'th:contains("Portable")+td>.download-link',
      install: 'install'
    },
    Notepad3: {
      site: {
        GitHub: 'https://github.com/rizonesoft/Notepad3/releases/latest'
      },
      versionChoice: ['.zip$', /RELEASE_(.*)/],
      install: 'install'
    },
    'Windows 10 Update Switch': {
      url: 'https://www.rizonesoft.com/downloads/windows-10-update-switch/',
      version: 'th:contains("Version")+td',
      download: 'th:contains("Portable")+td>.download-link',
      install: 'install'
    },
    'Winsock Repair': {
      url: 'https://www.rizonesoft.com/downloads/winsock-repair/',
      version: 'th:contains("Version")+td',
      download: 'th:contains("Download")+td>.download-link',
      install: 'install'
    }
  }
};
