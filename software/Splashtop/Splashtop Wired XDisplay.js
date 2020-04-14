'use strict';

const data = {
  commercial: 3,
  url: 'https://www.splashtop.com/wiredxdisplay',
  version: ['[href$=".exe"]', 'href', /v([\d.]+).exe/],
  download: '[href$=".exe"]'
};
module.exports = data;
