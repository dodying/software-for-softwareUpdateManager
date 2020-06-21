'use strict';

const data = {
  url: 'https://www.waterfox.net/download/',
  version: ['[href*="Waterfox%20Current"][href$=".exe"]', 'href', /Waterfox%20Current%20(.*?)%20Setup.exe/],
  changelog: async (res, $, fns, choice) => {
    const version = $('[href*="Waterfox%20Current"][href$=".exe"]').eq(0).attr('href').match(/Waterfox%20Current%20(.*?)%20Setup.exe/)[1];
    const uri1 = 'https://www.waterfox.net/blog/';
    const res1 = await fns.req(uri1);
    const $1 = fns.cheerio.load(res1.body);

    const uri2 = $1(`.container-xs>div>ul>li a:contains("${version}")`).eq(0).attr('href');
    const res2 = await fns.req(uri2);
    const $2 = fns.cheerio.load(res2.body);
    return [$2('[id^="-whats-new"]~ul').eq(0).html(), true];
  },
  download: '[href*="Waterfox%20Current"][href$=".exe"]',
  install: ['install', null, 'core'],
  other: {
    classic: {
      version: ['[href*="Waterfox%20Classic"][href$=".exe"]', 'href', /Waterfox%20Classic%20(.*?)%20Setup.exe/],
      changelog: null,
      download: '[href*="Waterfox%20Classic"][href$=".exe"]'
    }
  }
};
module.exports = data;
