'use strict';

module.exports = {
  type: 'software-list',
  list: {
    ApHeMo: {
      commercial: 3,
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=9',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://kcsoftwares.com/files/aphemo.exe',
      install: 'install_inno'
    },
    Audiograil: {
      commercial: 3,
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=1',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://kcsoftwares.com/files/audiograil_lite.exe',
      install: 'install_inno'
    },
    AVIToolbox: {
      commercial: 3,
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=3',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://kcsoftwares.com/files/avitoolbox_lite.exe',
      install: 'install_inno'
    },
    BATExpert: {
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=18',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://www.kcsoftwares.com/files/batexpert.zip',
      install: 'install'
    },
    dot11Expert: {
      commercial: 3,
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=22',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://www.kcsoftwares.com/files/dot11expert.zip',
      install: 'install'
    },
    DUMo: {
      commercial: 3,
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=19',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://www.kcsoftwares.com/files/dumo.zip',
      install: 'install'
    },
    HDDExpert: {
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=16',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://www.kcsoftwares.com/files/hdde.zip',
      install: 'install'
    },
    IDPhotoStudio: {
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=6',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://www.kcsoftwares.com/files/IDPS.zip',
      install: 'install'
    },
    Ignition: {
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=7',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://kcsoftwares.com/files/ignition_lite.exe',
      install: 'install_inno'
    },
    'K-ML': {
      commercial: 3,
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=5',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://kcsoftwares.com/files/kml.exe',
      install: 'install_inno'
    },
    KCleaner: {
      commercial: 2,
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=12',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://www.kcsoftwares.com/files/kcleaner.zip',
      install: 'install'
    },
    KFK: {
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=8',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://www.kcsoftwares.com/files/kfk.zip',
      install: 'install'
    },
    MassCert: {
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=21',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://www.kcsoftwares.com/files/masscert.zip',
      install: 'install'
    },
    PhotoToFilm: {
      commercial: 3,
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=4',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://kcsoftwares.com/files/phototofilm_lite.exe',
      install: 'install_inno'
    },
    PortExpert: {
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=20',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://www.kcsoftwares.com/files/portexpert.zip',
      install: 'install'
    },
    RAMExpert: {
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=17',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://www.kcsoftwares.com/files/ramexpert.zip',
      install: 'install'
    },
    'Startup Sentinel': {
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=15',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://www.kcsoftwares.com/files/sus.zip',
      install: 'install'
    },
    SUMo: {
      commercial: 2,
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=11',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://www.kcsoftwares.com/files/sumo.zip',
      install: 'install'
    },
    Vampix: {
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=13',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://www.kcsoftwares.com/files/vampix.zip',
      install: 'install'
    },
    VideoInspector: {
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=2',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://www.kcsoftwares.com/files/videoinspector.zip',
      install: 'install'
    },
    Zer0: {
      url: 'https://www.kcsoftwares.com/bugs/changelog_page.php?project_id=14',
      version: '[id^="changelog"]:not(:contains("Under Dev")) .widget-title>a[href^="changelog_page.php?version_id="]',
      changelog: '[id^="changelog"]:not(:contains("Under Dev")) .widget-main',
      download: 'https://www.kcsoftwares.com/files/zero.zip',
      install: 'install'
    }
  }
};
