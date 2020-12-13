'use strict';

module.exports = {
  url: 'https://www.cocos.com/creator',
  version: ['.btn-download[href*="CocosDashboard"]', 'href', /CocosDashboard\/v([\d.]+)\//],
  download: '.btn-download[href*="CocosDashboard"]',
  install: ['install_ai_msi', null, 'CocosDashboard_setup.msi', 'CocosDashboard.exe']
};
