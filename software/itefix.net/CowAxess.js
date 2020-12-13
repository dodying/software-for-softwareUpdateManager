'use strict';

module.exports = {
  url: 'https://itefix.net/cowaxess',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '.views-field-field-download-target>a',
    sort: true,
    match: /cowaxess_(.*?)_x64_installer.zip/
  }),
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '.views-field-field-download-target>a',
    sort: true,
    matchCheck: /cowaxess_(.*?)_x64_installer.zip/
  }),
  install: 'install_nsis'
};
