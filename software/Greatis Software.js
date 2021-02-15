'use strict';

module.exports = {
  type: 'software-list',
  list: {
    BootRacer: {
      url: 'https://greatis.com/bootracer/news.htm',
      version: 'h2',
      changelog: 'h2+p',
      download: 'http://www.greatis.com/bootracer_free.zip',
      install: ['install_zipped', 'install_inno_type']
    },
    BootRescue: {
      commercial: 1,
      url: 'https://www.greatis.com/security/bootrescue.htm',
      version: '#block > tbody > tr > td:nth-child(2) > p:nth-child(3) > strong',
      download: 'http://www.greatis.net/bootrescue.zip',
      install: 'install_zipped_single'
    },
    'Desktop Secret Lock': {
      commercial: 3,
      url: 'https://greatis.com/desktopsecretlock/',
      version: '[href="news.htm"]',
      changelog: ['https://greatis.com/unhackme/news.htm', 'h2+ol'],
      download: 'https://www.greatissoftware.com/desktopsecretlock_premium.zip',
      install: ['install_zipped', 'install_inno_type'],
      other: {
        free: {
          download: 'https://www.greatissoftware.com/desktopsecretlockw.zip'
        }
      }
    },
    'Edge Reset Button': {
      url: 'https://www.greatis.com/security/edge-reset-button.htm',
      version: '#block > tbody > tr > td:nth-child(2) > p:nth-child(3) > strong',
      download: 'http://www.greatis.net/edge_reset_button_setup.zip',
      install: ['install_zipped', 'install_inno_type']
    },
    'RegRun Reanimator': {
      url: 'https://greatis.com/security/reanimator.html',
      version: '#block > tbody > tr > td:nth-child(2) > p:nth-child(2) > strong',
      download: 'http://www.greatissoftware.com/reanimator.zip',
      install: ['install_zipped', 'install_inno_type']
    },
    'RegRun Security Suite': {
      commercial: 3,
      url: 'https://greatis.com/security/download.htm',
      version: ['#block > tbody > tr > td:nth-child(1) > b', 'text', /\([\d.]+\)/],
      changelog: '#block > tbody > tr > td:nth-child(1) > ol',
      download: 'http://www.greatis.net/regrunplat.zip',
      install: ['install_zipped', 'install_inno_type']
    },
    StopUpdates10: {
      url: 'https://greatis.com/stopupdates10/',
      version: '.title+p',
      changelog: '.box:contains("Changelog")>ul',
      download: 'http://www.greatissoftware.com/stopupdates10.zip',
      install: ['install_zipped', 'install_inno_type']
    },
    UnHackMe: {
      commercial: 3,
      url: 'https://greatis.com/unhackme/',
      version: '[href="news.htm"]',
      changelog: ['https://greatis.com/unhackme/news.htm', 'h2+ol'],
      download: 'https://www.greatissoftware.com/unhackme.zip',
      install: ['install_zipped', 'install_inno_type']
    }
  }
};
