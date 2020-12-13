'use strict';

const data = {
  url: 'https://download.openpaper.work/windows/amd64/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '[href^="paperwork-master"][href$=".zip"]',
    sort: true,
    match: /paperwork-master-([\d.]+).zip/
  }),
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '[href^="paperwork-master"][href$=".zip"]',
    sort: true,
    matchCheck: /paperwork-master-([\d.]+).zip/
  }),
  install: 'install'
};
module.exports = data;
