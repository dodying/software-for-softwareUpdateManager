'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Coin Balance Tracker': {
      commercial: 3,
      url: 'https://www.pcclean.io/coin-balance-tracker/',
      version: 'a[href$=".exe"]',
      download: 'https://www.pcclean.io/product-coin-balance-tracker/balance_tracker.exe',
      install: 'install_inno'
    },
    'Dr.Folder': {
      commercial: 3,
      url: 'http://www.pcclean.io/dr-folder/download/',
      version: 'a[href$=".exe"]',
      download: 'http://www.pcclean.io/product-drfolder/dfinstall.exe',
      install: 'install_inno'
    },
    'Email Excavator': {
      commercial: 3,
      url: 'http://www.pcclean.io/email-excavator/download/',
      version: 'a[href$=".exe"]',
      download: 'http://www.pcclean.io/product-emailexcavator/emailexcavator.exe',
      install: 'install_inno'
    },
    imDesktop: {
      commercial: 3,
      url: 'http://www.pcclean.io/imdesktop-download/',
      version: '.panel-widget-style-for-5641-0-1-0 > div:nth-child(1) > div:nth-child(2) > p:nth-child(3) > span:nth-child(1) > strong:nth-child(1)',
      download: 'http://www.pcclean.io/product-imdesktop/imDesktop.zip',
      install: 'install_inno'
    },
    'My Faster Game': {
      commercial: 3,
      url: 'http://www.pcclean.io/my-faster-game/download/',
      version: 'a[href$=".exe"]',
      download: 'http://www.pcclean.io/product-myfastgame/mfginstall.exe',
      install: 'install_inno'
    },
    'Perfect Hotkey': {
      commercial: 3,
      url: 'http://www.pcclean.io/perfect-hotkey/download/',
      version: 'a[href$=".exe"]',
      download: 'http://www.pcclean.io/product-perfecthotkey/phinstall.exe',
      install: 'install_inno'
    },
    'Process Checker': {
      commercial: 3,
      url: 'https://www.pcclean.io/process-checker/',
      version: () => '1',
      download: 'https://www.pcclean.io/product-processchecker/process_checker.exe',
      install: 'install_inno'
    },
    ScanMyReg: {
      commercial: 3,
      url: 'http://www.pcclean.io/scanmyreg/download/',
      version: 'a[href$=".exe"]',
      download: 'http://www.pcclean.io/product-scanmyreg/smrinstall2019.exe',
      install: 'install_inno'
    },
    'WinUtilities Pro': {
      commercial: 3,
      url: 'http://www.pcclean.io/winutilities-pro/download/',
      version: 'a[href$=".exe"]',
      download: 'http://www.pcclean.io/product-winutilities-pro/wuinstall.exe',
      install: 'install_inno'
    },
    WinUtilities: {
      url: 'http://www.pcclean.io/winutilities-free/download/',
      version: 'a[href$=".exe"]',
      download: 'http://www.pcclean.io/product-winutilities-free/wufinstall.exe',
      install: 'install_inno'
    }
  }
};
