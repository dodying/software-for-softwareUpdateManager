'use strict';

module.exports = {
  type: 'software-list',
  list: {
    CCleaner: {
      commercial: 2,
      url: 'https://www.ccleaner.com/ccleaner/download',
      version: '.icon_square:contains("Release notes")+div strong',
      changelog: '.icon_square:contains("Release notes")+div',
      download: async (res, $, fns) => {
        const res1 = await fns.req('https://www.ccleaner.com/ccleaner/download/standard');
        const $1 = fns.cheerio.load(res1.body);
        return $1('[data-download-url]').attr('data-download-url');
      },
      install: 'install_nsis'
    },
    Defraggler: {
      commercial: 1,
      url: 'https://www.ccleaner.com/defraggler/download',
      version: '.icon_square:contains("Release notes")+div strong',
      changelog: '.icon_square:contains("Release notes")+div',
      download: async (res, $, fns) => {
        const res1 = await fns.req('https://www.ccleaner.com/defraggler/download/standard');
        const $1 = fns.cheerio.load(res1.body);
        return $1('[data-download-url]').attr('data-download-url');
      },
      install: 'install_nsis'
    },
    Recuva: {
      commercial: 2,
      url: 'https://www.ccleaner.com/recuva/download',
      version: '.icon_square:contains("Release notes")+div strong',
      changelog: '.icon_square:contains("Release notes")+div',
      download: async (res, $, fns) => {
        const res1 = await fns.req('https://www.ccleaner.com/recuva/download/standard');
        const $1 = fns.cheerio.load(res1.body);
        return $1('[data-download-url]').attr('data-download-url');
      },
      install: 'install_nsis'
    },
    Speccy: {
      commercial: 2,
      url: 'https://www.ccleaner.com/speccy/download',
      version: '.icon_square:contains("Release notes")+div strong',
      changelog: '.icon_square:contains("Release notes")+div',
      download: async (res, $, fns) => {
        const res1 = await fns.req('https://www.ccleaner.com/speccy/download/standard');
        const $1 = fns.cheerio.load(res1.body);
        return $1('[data-download-url]').attr('data-download-url');
      },
      install: 'install_nsis'
    }
  }
};
