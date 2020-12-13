'use strict';

module.exports = {
  commercial: 3,
  url: 'https://h-steam.com/',
  version: ['.downloadBox>a', 'href', /%20([\d.]+).exe/],
  download: '.downloadBox>a'
};
