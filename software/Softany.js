'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'CHM to DOC converter': {
      commercial: 3,
      url: 'http://www.softany.com/chm-to-doc/download.htm',
      version: 'h1+table >tbody>tr:nth-child(2)>td:nth-child(2)',
      changelog: 'h2:contains("History")+p',
      download: 'http://download.softany.com/Softany-CHM-to-DOC-converter.exe',
      install: ['install_inno_single', '.exe']
    },
    'CHM to PDF converter': {
      commercial: 3,
      url: 'http://www.softany.com/chm-to-pdf/download.htm',
      version: 'h1+table >tbody>tr:nth-child(2)>td:nth-child(2)',
      changelog: 'h2:contains("History")+p',
      download: 'http://download.softany.com/Softany-CHM-to-PDF-converter.exe',
      install: ['install_inno_single', '.exe']
    },
    Txt2Htm2Chm: {
      commercial: 3,
      url: 'http://www.softany.com/txt2htm2chm/',
      version: '#content>h1',
      download: 'http://download.softany.com/Softany_Txt2Htm2Chm_Trial.exe',
      install: 'install_inno_type'
    },
    'WinCHM Pro': {
      commercial: 3,
      url: 'http://www.softany.com/winchm/download.htm',
      version: 'h1+table >tbody>tr:nth-child(2)>td:nth-child(2)',
      changelog: {
        selector: '#contentfull',
        attr: 'text',
        match: /^Version [\d.]+/,
        split: true
      },
      download: 'http://download.softany.com/WinCHM_setup.exe',
      install: 'install_inno'
    },
    WordToHelp: {
      commercial: 3,
      url: 'http://www.softany.com/wordtohelp/download.htm',
      version: 'h1+table >tbody>tr:nth-child(2)>td:nth-child(2)',
      changelog: 'h2:contains("History")+p',
      download: 'http://download.softany.com/Softany-WordToHelp-Setup.exe',
      install: 'install_inno'
    }
  }
};
