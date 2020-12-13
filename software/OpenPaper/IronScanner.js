'use strict';

const data = {
  url: 'https://download.openpaper.work/windows/amd64/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '[href^="ironscanner-master"][href$=".exe"]',
    sort: true,
    match: /ironscanner-master-([\d.]+).exe/
  }),
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '[href^="ironscanner-master"][href$=".exe"]',
    sort: true,
    matchCheck: /ironscanner-master-([\d.]+).exe/
  }),
  install: 'install_single'
};
module.exports = data;
