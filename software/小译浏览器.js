'use strict';

const data = {
  url: 'https://fanyi.caiyunapp.com/static/js/app.77ab540fab1fed3b6169.js',
  version: (res, $) => res.body.match(/staticClass:"green-button",attrs:\{target:"_blank",href:"(http:\/\/cdn.caiyunapp.com.*?\.exe)"/)[1].match(/-([\d.]+)\.exe/)[1],
  download: (res, $) => res.body.match(/staticClass:"green-button",attrs:\{target:"_blank",href:"(http:\/\/cdn.caiyunapp.com.*?\.exe)"/)[1],
  install: 'install'
};
module.exports = data;
