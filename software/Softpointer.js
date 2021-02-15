'use strict';

module.exports = {
  type: 'software-list',
  list: {
    AudioShell: {
      url: 'https://softpointer.com/AudioShell.htm',
      version: '.header>h2:has(sup)',
      changelog: '.content+.content:contains("version")>ul',
      download: '.download_url',
      install: 'install_inno'
    },
    TagRename: {
      commercial: 3,
      url: 'https://softpointer.com/tr.htm',
      version: '.header>h2:has(sup)',
      changelog: '.content+.content:contains("version")>ul',
      download: '.download_url',
      install: 'install_inno'
    }
  }
};
