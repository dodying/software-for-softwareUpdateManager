'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Cocos2d-x': {
      url: 'http://cocos2d-x.org/download',
      version: '#content > div.download > div:nth-child(2) > div.text > a:nth-child(2)',
      download: async (res, $, fns, choice) => {
        const url = $('#content > div.download > div:nth-child(2) > div.text > a:nth-child(2)').eq(0).attr('href');
        const res1 = await fns.req(url);
        return res1.body.match(/\$\("#direct-link"\).attr\("href","(.*)"\)/)[1];
      },
      install: 'install'
    },
    CocosCreator: {
      url: 'https://creator-api.cocos.com/api/cocoshub/editor_version_list',
      version: (res, $) => res.json.data['2d'][0].version,
      download: (res, $) => res.json.data['2d'][0].win32,
      install: 'install',
      other: {
        '3d': {
          version: (res, $) => res.json.data['3d'][0].version,
          download: (res, $) => res.json.data['3d'][0].win32
        }
      }
    },
    CocosDashboard: {
      url: 'https://www.cocos.com/creator',
      version: ['.btn-download[href*="CocosDashboard"]', 'href', /CocosDashboard\/v([\d.]+)\//],
      download: '.btn-download[href*="CocosDashboard"]',
      install: ['install_ai_msi', null, 'CocosDashboard_setup.msi', 'CocosDashboard.exe']
    }
  }
};
