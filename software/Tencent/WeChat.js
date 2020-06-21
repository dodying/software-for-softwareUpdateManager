'use strict';

const data = {
  url: 'https://weixin.qq.com/cgi-bin/readtemplate?t=weixin_faq_list', // https://pc.weixin.qq.com/?t=win_weixin
  version: 'h2:contains("Windows平台")+ul>li>a',
  changelog: {
    url: 'h2:contains("Windows平台")+ul>li>a',
    selector: '#page_center'
  },
  download: 'https://dldir1.qq.com/weixin/Windows/WeChatSetup.exe',
  install: 'install_nsis',
  other: {
    企业版: {
      url: 'https://work.weixin.qq.com/',
      version: '.index_log_section_title',
      changelog: '.index_log_section_list',
      download: 'https://work.weixin.qq.com/wework_admin/commdownload?platform=win'
    }
  }
};
module.exports = data;
