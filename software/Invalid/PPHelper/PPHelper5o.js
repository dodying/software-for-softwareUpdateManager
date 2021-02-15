'use strict';

const data = {
  url: 'https://pro.25pp.com/ppad_zj/',
  version: async (res, $, fns, choice) => {
    const uri1 = $('.btn-down').eq(0).attr('href');
    const res1 = await fns.reqHEAD(uri1);
    return res1.request.uri.href.match(/pphelper_offline_(.*?)_25pp/)[1];
  },
  download: '.btn-down',
  install: 'install_nsis'
};
module.exports = data;
