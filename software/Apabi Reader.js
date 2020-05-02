'use strict';

const data = {
  url: 'http://www.apabi.cn/download/',
  version: ['[href$=".exe"]', 'href', /PRCReaderSetup-(.*?).exe/],
  download: '[href$=".exe"]'
};
module.exports = data;
