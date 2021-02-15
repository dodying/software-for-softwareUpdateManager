'use strict';

module.exports = {
  type: 'software-list',
  list: {
    小葫芦弹幕助手: {
      url: 'https://new.xiaohulu.com/plug/2017/06/26748.shtml',
      version: '.top_theme>ul>li:nth-child(2)>dl>dd:nth-child(5)',
      download: ['.downloadmode', 'value']
    },
    小葫芦直播助手: {
      site: {
        download: 'https://www.xiaohulu.com/zhibozhushou'
      },
      versionChoice: 'http://down.obsapp.com/down.php',
      install: 'install'
    },
    小葫芦直播录制助手: {
      url: 'https://www.xiaohulu.com/luzhizhushou/',
      version: '.tips',
      download: '.download',
      install: 'install_nsis'
    }
  }
};
