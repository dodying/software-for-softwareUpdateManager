'use strict';

module.exports = {
  url: 'https://software-informer.informer.com/',
  version: (res, $) => JSON.parse($('[type="application/ld+json"]').eq(1).html()).softwareVersion,
  download: 'https://files.informer.com/siinst.exe',
  install: 'install_inno_type'
};
