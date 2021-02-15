'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Batch Inpaint': {
      commercial: 3,
      url: 'https://www.theinpaint.com/download.html',
      version: 'h3:has([name="batch-inpaint-changelog"])+p',
      changelog: 'h3:has([name="batch-inpaint-changelog"])+p+ul',
      download: 'https://www.theinpaint.com/download/BatchInpaintSetup.exe',
      install: 'install_inno_single'
    },
    FolderIco: {
      commercial: 3,
      url: 'https://www.folderico.com/download.html',
      version: 'h3:contains("Changelog")+p',
      changelog: 'h3:contains("Changelog")+p+ul',
      download: 'https://www.folderico.com/download/FolderIcoSetup.exe',
      install: 'install_inno_type'
    },
    Inpaint: {
      commercial: 3,
      url: 'https://www.theinpaint.com/download.html',
      version: 'h3:contains("Changelog")+p',
      changelog: 'h3:contains("Changelog")+p+ul',
      download: 'https://www.theinpaint.com/download/InpaintSetup.exe',
      install: 'install_inno_single'
    },
    iResizer: {
      commercial: 3,
      url: 'https://www.iresizer.com/download.html',
      version: 'h3:contains("Changelog")+p',
      changelog: 'h3:contains("Changelog")+p+ul',
      download: 'https://www.iresizer.com/download/iResizerSetup.exe',
      install: 'install_inno_single'
    },
    'MultiView-Inpaint': {
      commercial: 3,
      url: 'https://www.theinpaint.com/download.html',
      version: 'h3:has([name="multi-view-inpaint-changelog"])+p',
      changelog: 'h3:has([name="multi-view-inpaint-changelog"])+p+ul',
      download: 'https://www.theinpaint.com/download/MultiViewInpaintSetup.exe',
      install: 'install_inno_single'
    },
    PhotoScissors: {
      commercial: 3,
      url: 'https://www.photoscissors.com/download.html',
      version: 'h3:contains("Changelog")+p',
      changelog: 'h3:contains("Changelog")+p+ul',
      download: 'https://www.photoscissors.com/download/PhotoScissorsSetup.exe',
      install: 'install_inno_single'
    },
    PhotoStitcher: {
      commercial: 3,
      url: 'https://www.photostitcher.com/download.html',
      version: 'h3:contains("Changelog")+p',
      changelog: 'h3:contains("Changelog")+p+ul',
      download: 'https://www.photostitcher.com/download/PhotoStitcherSetup.exe',
      install: 'install_inno_single'
    }
  }
};
