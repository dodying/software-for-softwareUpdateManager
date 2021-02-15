'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Class Scheduler': {
      commercial: 3,
      url: 'https://www.cybermatrix.com/csdownloads.html',
      version: '.togglecontent>p',
      download: 'http://www.cybermatrix.com/download/cssetup.exe',
      install: 'install_inno'
    },
    'Clipboard Magic': {
      url: 'https://www.cybermatrix.com/cmdownloads.html',
      version: '.togglecontent>p',
      download: 'http://www.cybermatrix.com/download/cmagic.exe',
      install: 'install_inno'
    },
    'Employee Project Clock': {
      commercial: 3,
      url: 'https://www.cybermatrix.com/epcdownloads.html',
      version: '.togglecontent>p',
      download: 'http://www.cybermatrix.com/download/epsetup.exe',
      install: 'install_inno'
    },
    'Employee Scheduler': {
      commercial: 3,
      url: 'https://www.cybermatrix.com/esdownloads.html',
      version: '.togglecontent>p',
      download: 'http://www.cybermatrix.com/download/essetup.exe',
      install: 'install_inno'
    },
    'Event Manager': {
      commercial: 3,
      url: 'https://www.cybermatrix.com/emdownloads.html',
      version: '.accordioncontent>p',
      download: 'http://www.cybermatrix.com/download/emsetup.exe',
      install: 'install_inno'
    },
    'In Out Scheduler': {
      commercial: 3,
      url: 'https://www.cybermatrix.com/iodownloads.html',
      version: '.togglecontent>p',
      download: 'http://www.cybermatrix.com/download/iosetup.exe',
      install: 'install_inno'
    },
    'Meeting Manager': {
      commercial: 3,
      url: 'https://www.cybermatrix.com/mmdownloads.html',
      version: '.togglecontent>p',
      download: 'http://www.cybermatrix.com/download/mmssetup.exe',
      install: 'install_inno',
      other: {
        client: {
          download: 'http://www.cybermatrix.com/download/mmcsetup.exe'
        },
        enterprise: {
          download: 'http://www.cybermatrix.com/download/mmcsetup.exe'
        }
      }
    },
    'Phone Lister': {
      commercial: 3,
      url: 'https://www.cyber-matrix.com/pldownloads.html',
      version: 'body > p > table:nth-child(2) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(1) > td > table > tbody > tr > td > div > p:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(1)',
      download: 'http://www.cybermatrix.com/download/plsetup.exe',
      install: 'install_inno'
    },
    'Point of Sale': {
      commercial: 3,
      url: 'https://www.cybermatrix.com/cpdownloads.html',
      version: '.togglecontent>p',
      download: 'http://www.cybermatrix.com/download/possetup.exe',
      install: 'install_inno',
      other: {
        server: {
          download: 'http://www.cybermatrix.com/download/posssetup.exe'
        }
      }
    },
    'Pro Schedule': {
      commercial: 3,
      url: 'https://www.cybermatrix.com/psdownloads.html',
      version: '.togglecontent>p',
      download: 'http://www.cybermatrix.com/download/pssetup.exe',
      install: 'install_inno'
    },
    'Project Clock': {
      commercial: 3,
      url: 'https://www.cybermatrix.com/pcdownloads.html',
      version: '.togglecontent>p',
      download: 'http://www.cybermatrix.com/download/pcssetup.exe',
      install: 'install_inno',
      other: {
        pro: {
          download: 'http://www.cybermatrix.com/download/pcpsetup.exe'
        },
        client: {
          download: 'http://www.cybermatrix.com/download/pccsetup.exe'
        },
        enterprise: {
          download: 'http://www.cybermatrix.com/download/pcesetup.exe'
        }
      }
    },
    Reminder: {
      url: 'https://www.cybermatrix.com/crdownloads.html',
      version: '.togglecontent>p',
      download: 'http://www.cybermatrix.com/download/crsetup.exe',
      install: 'install_inno'
    },
    Text2Html: {
      url: 'https://www.cyber-matrix.com/t2downloads.html',
      version: 'body > table:nth-child(2) > tbody > tr:nth-child(1) > td:nth-child(2) > table > tbody > tr:nth-child(1) > td > table > tbody > tr > td > div > table > tbody > tr:nth-child(3) > td:nth-child(1) > p',
      download: 'http://www.cybermatrix.com/download/txt2html.zip',
      install: 'install_inno'
    },
    Timesheets: {
      commercial: 3,
      url: 'https://www.cybermatrix.com/tsdownloads.html',
      version: '.togglecontent>p',
      download: 'http://www.cybermatrix.com/download/tssetup.exe',
      install: 'install_inno'
    }
  }
};
