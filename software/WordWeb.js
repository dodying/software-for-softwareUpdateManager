'use strict';

const data = {
  commercial: 3,
  url: 'https://wordweb.info/',
  version: ['h2', 'text', /Latest Version ([\d.]+)/],
  changelog: ['https://wordweb.info/WhatsNew.html', '#require>div'],
  download: 'https://wordweb.info/cgi-bin/geoip/wordweb.exe',
  install: 'install'
};
module.exports = data;
