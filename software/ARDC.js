'use strict';

module.exports = {
  url: 'https://www.cnblogs.com/we-hjb/p/10989928.html',
  version: ['#cnblogs_post_body', 'text', /安卓投屏助手\((.*?)\)/],
  changelog: {
    selector: '#cnblogs_post_body',
    attr: 'text',
    match: /^安卓投屏助手\((.*?)\)/,
    split: true
  },
  download: '#cnblogs_post_body a[href$=".7z"]',
  install: 'install'
};
