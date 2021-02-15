'use strict';

module.exports = {
  type: 'software-list',
  list: {
    PrivaZer: {
      url: 'https://privazer.com/download.php',
      version: 'h1',
      changelog: {
        url: 'https://privazer.com/changelog.php',
        selector: '.text1',
        attr: 'text',
        match: /^v[\d.]+/,
        split: true
      },
      download: 'https://privazer.com/PrivaZer.exe',
      install: 'install_single'
    },
    'Shellbag Analyzer & Cleaner': {
      url: 'https://privazer.com/download-shellbag-analyzer-shellbag-cleaner.php',
      version: 'h1',
      changelog: {
        selector: '#settings>.text1',
        attr: 'text',
        match: /^v[\d.]+/,
        split: true
      },
      download: 'https://privazer.com/shellbag_analyzer_cleaner.exe',
      install: 'install_single'
    }
  }
};
