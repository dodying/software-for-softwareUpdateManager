'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Android Data Recovery': {
      commercial: 2,
      url: 'http://www.eassos.com/download.php',
      version: 'tr:contains("Android Data Recovery") .download-ver',
      changelog: 'tr:contains("Android Data Recovery") .download-update',
      download: 'tr:contains("Android Data Recovery") a[href$=".exe"]',
      install: 'install_inno_type'
    },
    DiskGenius: {
      commercial: 2,
      url: 'http://www.eassos.com/download.php',
      version: 'tr:contains("DiskGenius") .download-ver',
      changelog: 'tr:contains("DiskGenius") .download-update',
      download: 'tr:contains("DiskGenius Pro") a[href$=".exe"]',
      install: 'install_inno_type',
      other: {
        free: {
          commercial: 0,
          version: 'tr:contains("DiskGenius Free") .download-ver',
          changelog: 'tr:contains("DiskGenius Free") .download-update',
          download: 'tr:contains("DiskGenius Free") a[href$=".exe"]'
        }
      }
    },
    'iPhone Data Recovery': {
      commercial: 2,
      url: 'http://www.eassos.com/download.php',
      version: 'tr:contains("iPhone Data Recovery") .download-ver',
      changelog: 'tr:contains("iPhone Data Recovery") .download-update',
      download: 'tr:contains("iPhone Data Recovery") a[href$=".exe"]',
      install: 'install_inno_type'
    },
    'Photo Recovery': {
      commercial: 2,
      url: 'http://www.eassos.com/download.php',
      version: 'tr:contains("Photo Recovery") .download-ver',
      changelog: 'tr:contains("Photo Recovery") .download-update',
      download: 'tr:contains("Photo Recovery") a[href$=".exe"]',
      install: 'install_inno_type'
    },
    Recovery: {
      commercial: 2,
      url: 'http://www.eassos.com/download.php',
      version: 'tr:contains("Eassos Recovery") .download-ver',
      changelog: 'tr:contains("Eassos Recovery") .download-update',
      download: 'tr:contains("Eassos Recovery") a[href$=".exe"][href*="ERSetup"]',
      install: 'install_inno_type',
      other: {
        free: {
          commercial: 0,
          version: 'tr:contains("Eassos Recovery Free") .download-ver',
          changelog: 'tr:contains("Eassos Recovery Free") .download-update',
          download: 'tr:contains("Eassos Recovery Free") a[href$=".exe"]'
        }
      }
    },
    'System Restore': {
      commercial: 2,
      url: 'http://www.eassos.com/download.php',
      version: 'tr:contains("System Restore") .download-ver',
      changelog: 'tr:contains("System Restore") .download-update',
      download: 'tr:contains("System Restore") a[href$=".exe"]',
      install: 'install_inno_type'
    }
  }
};
