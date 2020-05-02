'use strict';

const data = {
  url: 'https://installbuilder.com/changelog.html',
  version: '#changelog>h4',
  changelog: '#changelog>h4+ul',
  download: 'https://installbuilder.com/installbuilder-enterprise-{version}-windows-x64-installer.exe',
  other: {
    qt: {
      download: 'https://installbuilder.com/installbuilder-qt-enterprise-{version}-windows-x64-installer.exe'
    }
  }
};
module.exports = data;
