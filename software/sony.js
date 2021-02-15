'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Music Center': {
      url: 'https://musiccenter.sony.net/zh-cn/downloads/',
      version: '.pregArea_01 .ulDisc>li:nth-child(4)',
      changelog: '.updateArea',
      download: '.pregArea_01 [href$=".exe"]'
    }
  }
};
