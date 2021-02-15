'use strict';

let downloadUrl;

const data = {
  url: 'https://www.wandoujia.com/',
  version: async (res, $, fns, choice) => {
    const uri1 = $('[data-track="home/download/exe"]').eq(0).attr('href');
    const res1 = await fns.reqHEAD(uri1);
    downloadUrl = res1.request.uri.href;
    return downloadUrl.match(/wandoujia_([\d.]+)_25pp/)[1];
  },
  download: () => downloadUrl,
  install: 'install_nsis'
};
module.exports = data;
