'use strict';

const data = {
  url: 'http://mt-naka.com/hotswap/index_enu.htm',
  version: '[href$=".ZIP"][href^="file"]',
  changelog: 'div:contains("History")+p+ul',
  download: '[href$=".ZIP"][href^="file"]',
  install: ['install_zipped_single', '64bit\\\\HotSwap!.EXE']
};
module.exports = data;
