'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'API Monitor': {
      url: 'http://www.rohitab.com/apimonitor',
      version: ['#Download~a[href$="x64.zip"]', 'text', /API Monitor v(.*?) - Portable/],
      changelog: ['http://www.rohitab.com/apimonitor/changelog', '[id^="Version"]~ul'],
      download: '#Download~a[href$="x64.zip"]',
      install: 'install'
    },
    Boss: {
      url: 'http://www.rohitab.com/boss',
      version: '#Download~a[href$="msi"]',
      download: '#Download~a[href$="msi"]',
      install: 'install_msi_single'
    },
    FreeVoice: {
      url: 'http://www.rohitab.com/freevoice',
      version: ['#Download~a[href$="zip"]', 'text', /FreeVoice (.*)$/],
      download: '#Download~a[href$="zip"]',
      install: 'install'
    },
    'Password Decrypter': {
      url: 'http://www.rohitab.com/password-decrypter',
      version: '#Download~a[href$="exe"]',
      download: '#Download~a[href$="exe"]',
      install: 'install_single'
    },
    TransLingo: {
      url: 'http://www.rohitab.com/translingo',
      version: '#Download~a[href$="zip"]',
      download: '#Download~a[href$="zip"]',
      install: 'install'
    }
  }
};
