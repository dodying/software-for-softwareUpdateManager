'use strict';

module.exports = {
  type: 'software-list',
  list: {
    AutoShutdown: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/System/Launchers-Shutdown-Tools/PC-Auto-Shutdown.shtml'
      },
      download: 'http://www.drivermagician.com/AutoShutdown.exe',
      install: 'install_inno'
    },
    'Driver Magician': {
      url: 'http://www.drivermagician.com/download.htm',
      version: 'body > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1)',
      changelog: {
        url: 'https://www.drivermagician.com/index.htm',
        selector: '[bgcolor="#f7f7f7"]',
        attr: 'text',
        match: /Version [\d.]+/,
        split: true
      },
      download: 'http://www.drivermagician.com/DriverMagician.exe',
      install: 'install_inno'
    },
    'Easy Macro Recorder': {
      url: 'http://www.flashplayerpro.com/MacroRecorder/downloadMacroRecorder.htm',
      version: 'body > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(3) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > font:nth-child(1)',
      changelog: {
        url: 'https://www.flashplayerpro.com/MacroRecorder/index.htm',
        selector: 'body > div > table > tbody > tr:nth-child(16)',
        attr: 'text',
        match: /Version [\d.]+/,
        split: true
      },
      download: 'http://www.flashplayerpro.com/EasyMacroRecorder.exe',
      install: 'install_inno'
    }
  }
};
