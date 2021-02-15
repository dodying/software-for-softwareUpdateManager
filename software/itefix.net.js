'use strict';

module.exports = {
  type: 'software-list',
  list: {
    ciXwin: {
      url: 'https://itefix.net/cixwin',
      version: '.views-field-field-download-target>a[href$="x64_Installer.zip"]',
      download: '.views-field-field-download-target>a[href$="x64_Installer.zip"]',
      install: 'install_nsis'
    },
    CowAxess: {
      url: 'https://itefix.net/cowaxess',
      version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.views-field-field-download-target>a',
        sort: true,
        match: /cowaxess_(.*?)_x64_installer.zip/
      }),
      download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
        selector: '.views-field-field-download-target>a',
        sort: true,
        matchCheck: /cowaxess_(.*?)_x64_installer.zip/
      }),
      install: 'install_nsis'
    },
    cwRsync: {
      url: 'https://itefix.net/cwrsync',
      version: '.views-field-field-download-target>a[href$="x64_free.zip"]',
      download: '.views-field-field-download-target>a[href$="x64_free.zip"]',
      install: ['install', null, 'bin']
    },
    Logwot8: {
      url: 'https://itefix.net/logwot8',
      version: '.views-field-field-download-target>a[href$="x64_installer.zip"]',
      download: '.views-field-field-download-target>a[href$="x64_installer.zip"]',
      install: 'install_nsis'
    }
  }
};
