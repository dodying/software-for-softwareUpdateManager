'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Analyzer2Go: {
      commercial: 2,
      url: 'https://sysprogs.com/analyzer2go/download/',
      version: ['.download_button', 'href', /Analyzer2Go-(.*?)-trial.msi/i],
      download: '.download_button',
      install: ['install_msi', null, 'LogicViewer.exe']
    },
    SmarTTY: {
      url: 'https://sysprogs.com/SmarTTY/download/',
      version: ['.download_button', 'href', /SmarTTY-(.*?).msi/],
      download: '.download_button',
      install: ['install_msi', null, 'SmarTTY.exe']
    },
    SrvMan: {
      url: 'https://sysprogs.com/legacy/tools/srvman/',
      version: ['[href*="getfile"]', 'href', /srvman-(.*?).7z/],
      download: '[href*="getfile"]',
      install: ['install_zipped_single', 'x64\\\\srvman.exe']
    },
    VirtualKD: {
      url: 'https://sysprogs.com/legacy/virtualkd/download/',
      version: ['.download_button', 'href', /VirtualKD-(.*?).exe/],
      download: '.download_button',
      install: 'install'
    },
    VisualDDK: {
      url: 'https://sysprogs.com/legacy/visualddk/download/',
      version: ['.download_button', 'href', /VisualDDK-(.*?).exe/],
      download: '.download_button'
    },
    VisualGDB: {
      commercial: 2,
      url: 'https://visualgdb.com/download/',
      version: ['.download_button', 'href', /VisualGDB-(.*?)-trial.msi/],
      download: '.download_button',
      install: ['install_msi', null, 'VisualGDB.exe'],
      other: {
        beta: {
          version: ['.download_button.btn_glossy_orange', 'href', /VisualGDB-(.*?).msi/],
          download: '.download_button.btn_glossy_orange'
        }
      }
    },
    VisualHDL: {
      url: 'https://sysprogs.com/legacy/visualhdl/download/',
      version: ['.download_button', 'href', /VisualHDL-(.*?).exe/],
      download: '.download_button'
    },
    VisualKernel: {
      commercial: 2,
      url: 'https://sysprogs.com/VisualKernel/download/',
      version: ['.download_button', 'href', /VisualKernel-(.*?)-trial.msi/],
      download: '.download_button',
      install: ['install_msi', null, 'VisualKernel.exe']
    },
    WinCDEmu: {
      site: {
        GitHub: 'https://github.com/sysprogs/WinCDEmu/releases/latest'
      },
      versionChoice: '^WinCDEmu-.*.exe',
      other: {
        portable: {
          versionChoice: '^PortableWinCDEmu-.*.exe',
          install: 'install_single'
        }
      }
    },
    WinFlashTool: {
      url: 'https://sysprogs.com/winflashtool/download/',
      version: ['.download_button', 'href', /WinFLASHTool-(.*?).exe/],
      download: '.download_button',
      install: 'install_single'
    }
  }
};
