'use strict';

const data = {
  useProxy: true,
  url: 'https://tunsafe.com/download',
  version: ['.btn-success[href$=".exe"]>b', 'text', /Download TunSafe (.*?) Installer/],
  changelog: {
    url: 'https://tunsafe.com/downloads/ChangeLog.txt',
    match: /^[\d\s-]+TunSafe v/,
    split: true
  },
  download: '.btn-success[href$=".exe"]',
  install: 'install_nsis_cli',
  other: {
    beta: {
      version: ['.btn-outline-success[href$=".exe"]>b', 'text', /Download TunSafe (.*?) Installer/],
      download: '.btn-outline-success[href$=".exe"]'
    }
  }
};
module.exports = data;
