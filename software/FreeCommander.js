'use strict';

const data = {
  commercial: 2,
  url: 'https://freecommander.com/en/downloads/',
  version: ['#post-29 span', 'text', /FreeCommander XE (\d+) Build (\d+\w?) 32-bit public/, '$1.$2'],
  download: 'https://freecommander.com/downloads/FreeCommanderXE-32-public_portable.zip',
  install: 'install'
};
module.exports = data;
