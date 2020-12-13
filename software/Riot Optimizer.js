'use strict';

const data = {
  url: 'https://riot-optimizer.com/',
  version: 'h1',
  changelog: ['https://riot-optimizer.com/changelog/', '.post-entry>p:nth-child(3)'],
  download: async (res, $, fns, choice) => {
    const res1 = await fns.req('https://riot-optimizer.com/riot/thank-you-for-downloading-riot/');
    const $1 = fns.cheerio.load(res1.body);
    return [$1('#direct-link').eq(0).attr('href'), '.exe'];
  },
  install: 'install_nsis'
};
module.exports = data;
