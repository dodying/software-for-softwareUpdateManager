'use strict';

module.exports = {
  url: 'http://www.itsamples.com/software.html',
  version: () => '1',
  download: 'http://www.itsamples.com/downloads/asterisk-master.zip',
  install: ['install_zipped', 'install_inno_cli', '.exe']
};
