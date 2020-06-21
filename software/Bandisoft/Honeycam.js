'use strict';

const data = {
  commercial: 2,
  url: 'https://www.bandisoft.com/honeycam/history/',
  version: '.content>h2',
  changelog: '.content>ul',
  download: 'https://dl.bandisoft.com/honeycam/HONEYCAM-SETUP-ALL.EXE',
  install: 'install',
  other: {
    old: {
      url: 'https://www.bandisoft.com/honeycam/',
      version: '[href*="/old/"]',
      changelog: null,
      download: 'https://www.bandisoft.com/honeycam/dl.php?old'
    }
  }
};
module.exports = data;
