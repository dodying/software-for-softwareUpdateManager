'use strict';

const data = {
  url: 'https://pro.25pp.com/',
  version: async (res, $, fns, choice) => {
    const uri1 = $('.banner-download').eq(0).attr('href');
    const res1 = await fns.reqHEAD(uri1);
    return res1.request.uri.href.match(/pphelper_(.*?)_25pp/)[1];
  },
  download: '.banner-download',
  install: 'install_nsis'
};
module.exports = data;
