'use strict';

let json;

module.exports = {
  type: 'software-list',
  list: {
    DeskGo: {
      site: {
        'Tencent SoftMgr': 'https://pc.qq.com/detail/5/detail_23125.html'
      }
    },
    Foxmail: {
      url: 'https://www.foxmail.com/',
      version: '.mainbanner-intro',
      changelog: '.changelog-detail',
      download: 'http://www.foxmail.com/win/download',
      install: 'install_nsis'
    },
    'PC Manager': {
      site: {
        download: 'https://www.pcmgr-global.com/'
      },
      versionChoice: ['https://www.pcmgr-global.com/download.php?do=oem', /PCMgr_Setup_(\d{2})(\d+)_(\d+)_(\d+).exe/, '$1.$2.$3.$4'],
      fixedPath: ['%ProgramFiles(x86)%\\Tencent\\QQPCMgr', /[\d.]+/, 'QQPCMgr.exe'],
      install: 'install_cli_s'
    },
    'QQ Browser': {
      site: {
        'Tencent SoftMgr': 'https://pc.qq.com/detail/11/detail_351.html'
      },
      install: 'install'
    },
    'QQ Music': {
      url: 'https://y.qq.com/download/download.js',
      version: (res, $) => {
        json = JSON.parse(res.body.replace(/^MusicJsonCallback\((.*)\)$/, '$1'));
        return json.data[0].Fversion.match(/[\d.]+/)[0];
      },
      changelog: (res, $) => json.data[0].Fdesc,
      download: (res, $) => json.data[0].Flink1
    },
    'QQ Pinyin': {
      site: {
        'Tencent SoftMgr': 'https://pc.qq.com/detail/7/detail_7.html'
      },
      install: 'install_nsis_cli'
    },
    'QQ Player': {
      site: {
        'Tencent SoftMgr': 'https://pc.qq.com/detail/8/detail_8.html'
      },
      install: 'install_nsis'
    },
    QQ: {
      site: {
        'Tencent SoftMgr': 'https://pc.qq.com/detail/2/detail_2.html'
      },
      fixedPath: '%ProgramFiles(x86)%\\Tencent\\QQ\\Bin\\QQ.exe',
      install: 'install_cli_s'
    },
    'Tencent Video': {
      site: {
        download: 'https://v.qq.com/'
      },
      versionChoice: 'https://node.video.qq.com/x/api/download_pc',
      install: 'install_nsis'
    },
    TIM: {
      url: 'https://tim.qq.com/download.html',
      fixedPath: '%ProgramFiles(x86)%\\Tencent\\TIM\\Bin\\TIM.exe',
      version: '.d-item-desc',
      download: '.down-btn>a',
      install: 'install_cli_s'
    },
    WeChat: {
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
    },
    WeGame: {
      site: {
        'Tencent SoftMgr': 'https://pc.qq.com/detail/1/detail_23761.html'
      },
      install: ['install_zipped', 'install_nsis']
    },
    微信开发者工具: {
      url: 'https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html',
      version: '#docContent h3',
      changelog: '#docContent h3+ol',
      download: '[href*="download_redirect?type=x64&from=mpwiki&download_version="]',
      install: 'install_nsis'
    }
  }
};
