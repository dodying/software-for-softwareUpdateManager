'use strict';

module.exports = {
  url: 'https://protectionid.net/',
  version: ['[href$=".rar"]', 'text', /(\d+)/], // Wayback Machine
  download: async (res, $, fns, choice) => {
    const uri1 = $('[href$=".rar"]').attr('href');
    const res1 = await fns.req(uri1);
    const $1 = fns.cheerio.load(res1.body);
    return $1('#playback').attr('src');
  },
  install: 'install_zipped_single'
};
