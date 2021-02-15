'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Efficcess: {
      url: 'http://www.efficientsoftware.net/download.htm',
      version: '#download1_con tr:contains("Efficcess") .productMoreInfo',
      download: '#download1_con tr:contains("Efficcess") [href$=".exe"]',
      install: 'install_inno'
    },
    'Efficient Address Book': {
      url: 'http://www.efficientsoftware.net/download.htm',
      version: '#download1_con tr:contains("Efficient Address Book") .productMoreInfo',
      download: '#download1_con tr:contains("Efficient Address Book") [href$=".exe"]',
      install: 'install_inno'
    },
    'Efficient Calendar': {
      url: 'http://www.efficientsoftware.net/download.htm',
      version: '#download1_con tr:contains("Efficient Calendar") .productMoreInfo',
      download: '#download1_con tr:contains("Efficient Calendar") [href$=".exe"]',
      install: 'install_inno'
    },
    'Efficient Diary Pro': {
      url: 'http://www.efficientsoftware.net/download.htm',
      version: '#download1_con tr:contains("Efficient Diary Pro") .productMoreInfo',
      download: '#download1_con tr:contains("Efficient Diary Pro") [href$=".exe"]',
      install: 'install_inno'
    },
    'Efficient Notes': {
      url: 'http://www.efficientsoftware.net/download.htm',
      version: '#download1_con tr:contains("Efficient Notes") .productMoreInfo',
      download: '#download1_con tr:contains("Efficient Notes") [href$=".exe"]',
      install: 'install_inno'
    },
    'Efficient Password Manager Pro': {
      url: 'http://www.efficientsoftware.net/download.htm',
      version: '#download1_con tr:contains("Efficient Password Manager Pro") .productMoreInfo',
      download: '#download1_con tr:contains("Efficient Password Manager Pro") [href$=".exe"]',
      install: 'install_inno'
    },
    'Efficient Reminder': {
      url: 'http://www.efficientsoftware.net/download.htm',
      version: '#download1_con tr:contains("Efficient Reminder") .productMoreInfo',
      download: '#download1_con tr:contains("Efficient Reminder") [href$=".exe"]',
      install: 'install_inno'
    },
    'Efficient Sticky Notes Pro': {
      url: 'http://www.efficientsoftware.net/download.htm',
      version: '#download1_con tr:contains("Efficient Sticky Notes Pro") .productMoreInfo',
      download: '#download1_con tr:contains("Efficient Sticky Notes Pro") [href$=".exe"]',
      install: 'install_inno'
    },
    'Efficient To-Do List': {
      url: 'http://www.efficientsoftware.net/download.htm',
      version: '#download1_con tr:contains("Efficient To-Do List") .productMoreInfo',
      download: '#download1_con tr:contains("Efficient To-Do List") [href$=".exe"]',
      install: 'install_inno'
    }
  }
};
