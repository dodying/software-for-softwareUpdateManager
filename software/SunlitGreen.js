'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Batch Photo Resizer': {
      url: 'https://www.sunlitgreen.com/downloads.html',
      version: '.gradbox:has([href="free-batch-photo-resizer.html"]) b+p',
      download: 'https://www.sunlitgreen.com/downloads/SGPR_Portable.zip',
      install: 'install_zipped_single'
    },
    BatchBlitz: {
      url: 'https://www.sunlitgreen.com/downloads.html',
      version: '.gradbox:has([href="batchblitz.html"]) b+p',
      download: 'https://www.sunlitgreen.com/downloads/SGBB_Portable.zip',
      install: ['install_zipped_single', 'BatchBlitz.exe']
    },
    'Photo Editor': {
      url: 'https://www.sunlitgreen.com/downloads.html',
      version: '.gradbox:has([href="free-photo-editor.html"]) b+p',
      download: 'https://www.sunlitgreen.com/downloads/SGPE_Portable.zip',
      install: 'install_zipped_single'
    },
    'Photo Manager': {
      url: 'https://www.sunlitgreen.com/downloads.html',
      version: '.gradbox:has([href="photo-manager.html"]) b+p',
      download: 'https://www.sunlitgreen.com/downloads/SGPM_Portable.zip',
      install: 'install_zipped_single'
    }
  }
};
