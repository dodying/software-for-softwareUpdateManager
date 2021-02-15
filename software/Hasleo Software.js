'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'BitLocker Anywhere For Windows': {
      commercial: 3,
      url: 'https://www.easyuefi.com/bitlocker-anywhere/bitlocker-anywhere-home.html',
      version: '.span_title_w',
      download: 'https://www.easyuefi.com/bitlocker-anywhere/downloads/BitLockerAnywhere_Trial.exe',
      install: 'install_inno_type'
    },
    'Data Recovery': {
      url: 'https://www.easyuefi.com/data-recovery/free-data-recovery.html',
      version: '.span_title_w',
      download: 'https://www.easyuefi.com/data-recovery/downloads/hdr_free.exe',
      install: 'install_inno_type'
    },
    EasyUEFI: {
      commercial: 3,
      url: 'https://www.easyuefi.com/index-us.html',
      version: '.span_title_w',
      changelog: ['https://www.easyuefi.com/change-logs.html', '.reviews_center>ul>li'],
      download: 'https://www.easyuefi.com/downloads/EasyUEFI_Trial.exe',
      install: 'install_inno_type'
    },
    WinToHDD: {
      url: 'https://www.easyuefi.com/wintohdd/index.html',
      version: '.span_title_w',
      changelog: ['https://www.easyuefi.com/wintohdd/change-logs.html', '.reviews_center>ul>li'],
      download: 'http://www.easyuefi.com/wintohdd/downloads/WinToHDD_Free.exe',
      install: 'install_inno_type'
    },
    WinToUSB: {
      url: 'https://www.easyuefi.com/wintousb/',
      version: '.span_title_w',
      changelog: ['https://www.easyuefi.com/wintousb/change-logs.html', '.reviews_center>ul>li'],
      download: 'https://www.easyuefi.com/wintousb/downloads/WinToUSB_Free.exe',
      install: 'install_inno_type'
    }
  }
};
