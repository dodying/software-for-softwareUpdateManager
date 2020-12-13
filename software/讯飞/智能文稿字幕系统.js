'use strict';

const data = {
  url: 'https://zimu.iflyrec.com/HiseelsBasicService/hiseeLS/api/client/resourceInfo',
  version: (res) => res.json.content.winVersion,
  download: 'https://www.iflyrec.com/download/HiseeLS/64',
  installType: 'inno'
};
module.exports = data;
