'use strict';

module.exports = {
  url: 'https://www.mdict.cn/wp/?page_id=5227',
  version: ['.et_pb_text_inner>ul>li:contains("Windows"):has([href$="MDictPC.7z"])', 'text', /\((.*?)\)/],
  download: 'https://www.mdict.cn/download/MDictPC2.7z',
  install: 'install',
  other: {
    1: {
      version: ['.et_pb_text_inner>ul>li:contains("Windows"):has([href$="MDictPC.zip"])', 'text', /\((.*?)\)/],
      download: 'https://www.mdict.cn/download/MDictPC.zip'
    }
  }
};
