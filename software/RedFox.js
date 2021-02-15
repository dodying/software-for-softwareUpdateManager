'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Elby CloneBD': {
      commercial: 3,
      url: 'https://www.redfox.bz/en/download.html',
      version: '[href="/download/changes_clonebd.txt"]',
      changelog: {
        url: 'https://www.redfox.bz/download/changes_clonebd.txt',
        split: true
      },
      download: 'https://www.redfox.bz/download/SetupCloneBD.exe',
      install: 'install_nsis'
    },
    'Elby CloneDVD': {
      commercial: 3,
      url: 'https://www.redfox.bz/en/download.html',
      version: '[href="/download/changes_clonedvd.txt"]',
      changelog: {
        url: 'https://www.redfox.bz/download/changes_clonedvd.txt',
        match: /^Version [\d.]+/,
        split: true
      },
      download: 'https://www.redfox.bz/download/SetupCloneDVD.exe',
      install: 'install_nsis_cli'
    },
    ReClock: {
      url: 'https://www.redfox.bz/en/download.html',
      version: '[href="/download/changes_reclock.txt"]',
      changelog: {
        url: 'https://www.redfox.bz/download/changes_reclock.txt',
        split: true
      },
      download: 'https://www.redfox.bz/download/SetupReClock.exe',
      install: 'install_nsis_cli'
    },
    'RedFox AnyDVD': {
      commercial: 3,
      url: 'https://www.redfox.bz/en/download.html',
      version: '[href="/download/changes_anydvd.txt"]',
      changelog: {
        url: 'https://www.redfox.bz/download/changes_anydvd.txt',
        split: true
      },
      download: 'https://www.redfox.bz/download/SetupAnyDVD.exe',
      install: 'install_nsis'
    },
    'RedFox CloneCD': {
      commercial: 3,
      url: 'https://www.redfox.bz/en/download.html',
      version: '[href="/download/changes_clonecd.txt"]',
      changelog: {
        url: 'https://www.redfox.bz/download/changes_clonecd.txt',
        match: /^CloneCD [\d.]+/,
        split: true
      },
      download: 'https://www.redfox.bz/download/SetupCloneCD.exe',
      install: 'install_nsis_cli'
    },
    'RedFox CloneDVD mobile': {
      commercial: 3,
      url: 'https://www.redfox.bz/en/download.html',
      version: '[href="/download/changes_clonedvdmobile.txt"]',
      changelog: {
        url: 'https://www.redfox.bz/download/changes_clonedvdmobile.txt',
        match: /^Version [\d.]+/,
        split: true
      },
      download: 'https://www.redfox.bz/download/SetupCloneDVDmobile.exe',
      install: 'install_nsis_cli'
    },
    'Virtual CloneDrive': {
      url: 'https://www.redfox.bz/en/download.html',
      version: '[href="/download/changes_vcd.txt"]',
      changelog: {
        url: 'https://www.redfox.bz/download/changes_vcd.txt',
        match: /^Virtual CloneDrive [\d.]+/,
        split: true
      },
      download: 'https://www.redfox.bz/download/SetupVirtualCloneDrive.exe',
      install: 'install_nsis_cli'
    }
  }
};
