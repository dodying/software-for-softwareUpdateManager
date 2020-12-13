'use strict';

let download;

const data = {
  url: 'https://fanyi.caiyunapp.com',
  version: async (res, $, fns, choice) => {
    const uri1 = $('script[src^="/static/js/app."][src$=".js"]').attr('src');
    const res1 = await fns.req(uri1);
    download = res1.body.match(/staticClass:"green-button",attrs:\{target:"_blank",href:"(http:\/\/cdn.caiyunapp.com.*?\.exe)"/)[1];
    return download.match(/-([\d.]+)\.exe/)[1];
  },
  download: (res, $) => download,
  install: 'install'
};
module.exports = data;
