'use strict';

const data = {
  site: {
    Softpedia: 'https://www.softpedia.com/get/Office-tools/Clipboard/ClipX.shtml'
  },
  downloadChoice: 'Stable',
  install: ['install_zipped_single', 'clipx.exe'],
  other: {
    beta: {
      versionChoice: /(.*Beta.*)/,
      downloadChoice: 'x64 Beta'
    }
  }
};
module.exports = data;
