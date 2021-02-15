'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Download Accelerator Plus': {
      commercial: 2,
      url: 'http://www.speedbit.com/dap/',
      version: '.version>.i',
      download: 'http://download.speedbit.com/dap10_full.exe',
      fixedPath: '%ProgramFiles(x86)%\\DAP\\DAP.exe',
      install: 'install_cli_s'
    },
    'Video Accelerator': {
      commercial: 2,
      url: 'http://www.videoaccelerator.com/download/',
      version: '.dwl_details>span',
      download: '[href$=".exe"]',
      fixedPath: '%ProgramFiles(x86)%\\SpeedBit Video Accelerator\\VideoAccelerator.exe',
      install: 'install_cli_s',
      other: {
        beta: {
          url: 'http://www.videoaccelerator.com/beta/'
        }
      }
    }
  }
};
