'use strict';

const data = {
  commercial: 3,
  url: 'http://www.chevolume.com/Download.aspx',
  version: '#dlpagedllink',
  changelog: {
    url: 'http://www.chevolume.com/ChangeLog.aspx',
    selector: '.new',
    attr: 'text',
    match: /^[\d-]+/,
    split: true
  },
  download: '#dlpagedllink',
  install: ['install_msi', null, 'CheVolume.exe']
};
module.exports = data;
