'use strict';

'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Absolute Uninstaller': {
      url: 'https://www.glarysoft.com/absolute-uninstaller/download/',
      version: '[class$="download_ver"]',
      changelog: ['https://www.glarysoft.com/update/release-notes/?p=7&v={version}', '#content_002_wenzi_nb ul'],
      download: 'https://download.glarysoft.com/ausetup.exe',
      install: 'install_nsis'
    },
    'Disk Cleaner': {
      url: 'https://www.glarysoft.com/disk-cleaner/download/',
      version: '[class$="download_ver"]',
      changelog: ['https://www.glarysoft.com/update/release-notes/?p=4&v={version}', '#content_002_wenzi_nb ul'],
      download: 'https://download.glarysoft.com/mhsetup.exe',
      install: 'install_nsis'
    },
    'Disk Explorer': {
      url: 'https://www.glarysoft.com/disk-explorer/download/',
      version: '[class$="download_ver"]',
      changelog: ['https://www.glarysoft.com/update/release-notes/?p=11&v={version}', '#content_002_wenzi_nb ul'],
      download: 'https://download.glarysoft.com/desetup.exe',
      install: 'install_nsis'
    },
    'Disk SpeedUp': {
      url: 'https://www.glarysoft.com/disk-speedup/download/',
      version: '[class$="download_ver"]',
      changelog: ['https://www.glarysoft.com/update/release-notes/?p=5&v={version}', '#content_002_wenzi_nb ul'],
      download: 'https://download.glarysoft.com/dssetup.exe',
      install: 'install_nsis'
    },
    'Duplicate Cleaner': {
      url: 'https://www.glarysoft.com/duplicate-cleaner/download/',
      version: '[class$="download_ver"]',
      changelog: ['https://www.glarysoft.com/update/release-notes/?p=8&v={version}', '#content_002_wenzi_nb ul'],
      download: 'https://download.glarysoft.com/ducsetup.exe',
      install: 'install_nsis'
    },
    'Glary Utilities': {
      url: 'https://www.glarysoft.com/glary-utilities/download/',
      version: '.gu_ver_all',
      changelog: ['https://www.glarysoft.com/update/release-notes/?p=1&v={version}', '#content_002_wenzi_nb ul'],
      download: 'https://download.glarysoft.com/gu5setup.exe',
      install: 'install_nsis',
      other: {
        pro: {
          commercial: 3,
          url: 'https://www.glarysoft.com/glary-utilities-pro/download/',
          changelog: ['https://www.glarysoft.com/update/release-notes/?p=2&v={version}', '#content_002_wenzi_nb ul'],
          download: 'https://download.glarysoft.com/gup5setup.exe'
        }
      }
    },
    'Malware Hunter': {
      commercial: 3,
      url: 'https://www.glarysoft.com/malware-hunter/download/',
      version: '[class$="download_ver"]',
      changelog: ['https://www.glarysoft.com/update/release-notes/?p=15&v={version}', '#content_002_wenzi_nb ul'],
      download: 'http://download.glarysoft.com/mhsetup.exe',
      install: 'install_nsis'
    },
    'Quick Search': {
      url: 'https://www.glarysoft.com/quick-search/download/',
      version: '[class$="download_ver"]',
      changelog: ['https://www.glarysoft.com/update/release-notes/?p=13&v={version}', '#content_002_wenzi_nb ul'],
      download: 'https://download.glarysoft.com/qsearchsetup.exe',
      install: 'install_nsis'
    },
    'Quick Startup': {
      url: 'https://www.glarysoft.com/quick-startup/download/',
      version: '[class$="download_ver"]',
      changelog: ['https://www.glarysoft.com/update/release-notes/?p=10&v={version}', '#content_002_wenzi_nb ul'],
      download: 'https://download.glarysoft.com/qssetup.exe',
      install: 'install_nsis'
    },
    'Registry Repair': {
      url: 'https://www.glarysoft.com/registry-repair/download/',
      version: '[class$="download_ver"]',
      changelog: ['https://www.glarysoft.com/update/release-notes/?p=3&v={version}', '#content_002_wenzi_nb ul'],
      download: 'https://download.glarysoft.com/rrsetup.exe',
      install: 'install_nsis'
    },
    'Software Update': {
      url: 'https://www.glarysoft.com/software-update/download/',
      version: '[class$="download_ver"]',
      changelog: ['https://www.glarysoft.com/update/release-notes/?p=12&v={version}', '#content_002_wenzi_nb ul'],
      download: 'http://download.glarysoft.com/susetup.exe',
      install: 'install_nsis',
      other: {
        pro: {
          commercial: 3,
          url: 'https://www.glarysoft.com/software-update/download/',
          version: '[class$="download_ver"]',
          changelog: ['https://www.glarysoft.com/update/release-notes/?p=14&v={version}', '#content_002_wenzi_nb ul'],
          download: 'https://download.glarysoft.com/susetupPro.exe',
          install: 'install_nsis'
        }
      }
    },
    'Tracks Eraser': {
      url: 'https://www.glarysoft.com/tracks-eraser/download/',
      version: '[class$="download_ver"]',
      changelog: ['https://www.glarysoft.com/update/release-notes/?p=9&v={version}', '#content_002_wenzi_nb ul'],
      download: 'https://download.glarysoft.com/tesetup.exe',
      install: 'install_nsis'
    },
    Undelete: {
      url: 'https://www.glarysoft.com/glary-undelete/download/',
      version: '[class$="download_ver"]',
      changelog: ['https://www.glarysoft.com/update/release-notes/?p=6&v={version}', '#content_002_wenzi_nb ul'],
      download: 'https://download.glarysoft.com/gunsetup.exe',
      install: 'install_nsis'
    }
  }
};
