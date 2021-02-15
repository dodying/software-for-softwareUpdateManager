'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Dealseeker: {
      commercial: 3,
      url: 'https://dealseeker.app/download/',
      version: '#main > div > div > div > div > div > div > div > p:nth-child(7)',
      download: '[href$=".exe"]',
      install: ['install_zipped', 'install', 'app-64.7z']
    },
    'Easy Button & Menu Maker': {
      commercial: 3,
      url: 'https://www.easymenumaker.com/download.php',
      version: '.light>span',
      download: '[href$=".exe"]',
      install: 'install_inno_type'
    },
    'Easy CSS Menu': {
      commercial: 3,
      url: 'https://www.easycssmenu.com/download.php',
      version: '.light>span',
      download: '[href$=".exe"]',
      install: 'install_inno_type'
    },
    'Easy GIF Animator': {
      commercial: 3,
      url: 'https://www.easygifanimator.net/download.php',
      version: '.light>span',
      download: '[href$=".exe"]',
      install: 'install_inno_type'
    },
    HTMLPad: {
      commercial: 3,
      url: 'https://www.htmlpad.net/download.php',
      version: '.light>span',
      download: '[href$=".exe"]',
      install: 'install_inno_type'
    },
    'Program Protector': {
      commercial: 3,
      url: 'https://www.blumentals.net/protector/download.php',
      version: '.light>span',
      download: '[href$=".exe"]',
      install: 'install_inno_type'
    },
    'Rapid CSS Editor': {
      commercial: 3,
      url: 'https://www.rapidcsseditor.com/download.php',
      version: '.light>span',
      download: '[href$=".exe"]',
      install: 'install_inno_type'
    },
    'Rapid PHP Editor': {
      commercial: 3,
      url: 'https://www.rapidphpeditor.com/download.php',
      version: '.light>span',
      download: '[href$=".exe"]',
      install: 'install_inno_type'
    },
    'Rapid SEO Tool': {
      commercial: 3,
      url: 'https://www.rapidseotool.com/download.php',
      version: '.light>span',
      download: '[href$=".exe"]',
      install: 'install_inno_type'
    },
    'Screensaver Factory': {
      commercial: 3,
      url: 'https://www.blumentals.net/scrfactory/download.php',
      version: '.light>span',
      download: '[href$=".exe"]',
      install: 'install_inno_type'
    },
    'Screensaver Wonder': {
      commercial: 3,
      url: 'https://www.blumentals.net/scrwonder/download.php',
      version: '.light>span',
      download: '[href$=".exe"]',
      install: 'install_inno_type'
    },
    Surfblocker: {
      commercial: 3,
      url: 'https://www.surfblocker.com/download.php',
      version: '.light>span',
      download: '[href$=".exe"]',
      install: 'install_inno_type'
    },
    WeBuilder: {
      commercial: 3,
      url: 'https://www.webuilderapp.com/download.php',
      version: '.light>span',
      download: '[href$=".exe"]',
      install: 'install_inno_type'
    }
  }
};
