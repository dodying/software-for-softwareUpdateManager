'use strict';

module.exports = {
  type: 'software-list',
  list: {
    ImmediateAccess: {
      site: {
        GitHub: 'https://github.com/belowaverage-org/ImmediateAccess/releases/latest'
      },
      versionChoice: 'ImmediateAccessX64.msi',
      install: ['install_msi', null, 'ImmediateAccess.exe']
    },
    SuperADD: {
      site: {
        GitHub: 'https://github.com/belowaverage-org/SuperADD/releases/latest'
      },
      install: ['install_zipped_single', 'Release64\\SuperADD.exe']
    },
    SuperBGInfo: {
      site: {
        GitHub: 'https://github.com/belowaverage-org/SuperBGInfo/releases'
      },
      versionChoice: 'SuperBGInfo.exe',
      install: 'install_single'
    },
    SuperCAL: {
      site: {
        GitHub: 'https://github.com/belowaverage-org/SuperCAL/releases/latest'
      },
      versionChoice: 'SuperCAL.exe',
      install: 'install_single'
    },
    SuperCAL_CE: {
      site: {
        GitHub: 'https://github.com/belowaverage-org/SuperCAL_CE/releases/latest'
      },
      versionChoice: 'SuperCAL_CE.exe',
      install: 'install_single'
    },
    SuperGrate: {
      site: {
        GitHub: 'https://github.com/belowaverage-org/SuperGrate/releases/latest'
      },
      versionChoice: 'SuperGrateInstaller.exe',
      install: 'install_zipped_single'
    },
    SuperLauncher: {
      site: {
        GitHub: 'https://github.com/belowaverage-org/SuperLauncher/releases/latest'
      },
      versionChoice: 'SuperLauncherInstaller.msi',
      install: ['install_msi', null, 'SuperLauncher.exe']
    },
    SuperLTI: {
      site: {
        GitHub: 'https://github.com/belowaverage-org/SuperLTI/releases/latest'
      },
      versionChoice: 'SuperLTI.exe',
      install: 'install_single'
    },
    SuperStart: {
      site: {
        GitHub: 'https://github.com/belowaverage-org/SuperStart/releases/latest'
      },
      install: ['install_zipped_single', 'Release_64\\SuperStart.exe']
    }
  }
};
