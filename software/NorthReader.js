'use strict';

module.exports = {
  url: 'https://buildserver.futureglobe.de/NorthReader/northreader_version.json',
  version: (res, $) => res.json.version,
  download: 'https://buildserver.futureglobe.de/NorthReader/NorthReaderSetup.exe',
  install: ['install_zipped', 'install', 'app-64.7z']
};
