'use strict';

module.exports = {
  type: 'software-list',
  list: {
    IronScanner: {
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
    },
    OpenPaperWork: {
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
    }
  }
};
