'use strict';
let download;

const data = {
  url: 'https://www.shencut.com/download.html',
  version: async (res, $, fns, choice) => {
    const uri1 = $('.download_pc_url').eq(0).attr('href');
    const res1 = await fns.reqHEAD(uri1);
    download = res1.request.uri.href;
    return download.match(/filmora_setup_full(.*?).exe/);
  },
  download: () => download,
  install: 'install_inno'
};
module.exports = data;
