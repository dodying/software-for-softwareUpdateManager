'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Copiaris: {
      commercial: 2,
      url: 'http://www.moonsoftware.com/downloads',
      version: '.bodytext>b:contains("Copiaris")',
      download: 'http://www.moonsoftware.com/download?copiaris'
    },
    'Font Xplorer': {
      url: 'http://www.moonsoftware.com/log_fxplorer.asp',
      version: '.bodytext>h3',
      download: 'http://www.moonsoftware.com/download?fxfull'
    },
    'Password Agent': {
      commercial: 2,
      url: 'http://www.moonsoftware.com/downloads',
      version: '.bodytext>b:contains("Password Agent")',
      download: '.bodytext>a[href*="Password_Agent"][href$=".zip"]',
      install: 'install'
    },
    ShellTools: {
      url: 'http://www.moonsoftware.com/downloads',
      version: '.bodytext>b:contains("ShellTools")',
      download: 'http://www.moonsoftware.com/download?shelltools'
    }
  }
};
