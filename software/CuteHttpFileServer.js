'use strict';

module.exports = {
  url: 'http://iscute.cn/chfs',
  version: '[href*="chfs-windows-x64"][href$=".zip"]',
  changelog: {
    url: 'http://iscute.cn/tar/chfs/2.0/chfs-changelog.txt',
    selector: 'body',
    attr: 'text',
    match: /^版本：v[\d.]+/,
    split: true
  },
  download: '[href*="chfs-windows-x64"][href$=".zip"]',
  install: 'install_zipped_single',
  other: {
    gui: {
      download: '[href*="gui-chfs-windows"][href$=".zip"]'
    }
  }
};
