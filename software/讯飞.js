'use strict';

module.exports = {
  type: 'software-list',
  list: {
    听见助手: {
      site: {
        Pc6: 'http://www.pc6.com/softview/SoftView_710203.html'
      },
      download: 'https://www.iflyrec.com/download/tjzs/win',
      install: 'install_inno_type'
    },
    智能文稿字幕系统: {
      url: 'https://zimu.iflyrec.com/HiseelsBasicService/hiseeLS/api/client/resourceInfo',
      version: (res) => res.json.content.winVersion,
      download: 'https://www.iflyrec.com/download/HiseeLS/64',
      installType: 'inno'
    },
    讯飞语记: {
      site: {
        download: 'http://www.iyuji.cn/iyuji/home'
      },
      versionChoice: ['https://yj.openspeech.cn/download/voicenote_pc_win', /voicenote-(.*).exe/],
      install: ['install_zipped', 'install', 'app-32.7z']
    }
  }
};
