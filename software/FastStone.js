'use strict';

module.exports = {
  type: 'software-list',
  list: {
    Capture: {
      commercial: 3,
      url: 'http://www.faststone.org/FSCapturerDownload.htm',
      version: 'b>font[size="2"]',
      download: 'a[href$=".zip"]:not([href*="Setup"])',
      install: 'install'
    },
    'Image Viewer': {
      commercial: 1,
      url: 'http://www.faststone.org/FSViewerDownload.htm',
      version: 'b>font[size="2"]',
      download: 'a[href$=".zip"]:not([href*="Setup"])',
      install: 'install'
    },
    MaxView: {
      commercial: 3,
      url: 'http://www.faststone.org/FSMaxViewDownload.htm',
      version: 'b>font[size="2"]',
      download: 'a[href$=".zip"]:not([href*="Setup"])',
      install: 'install'
    },
    'Photo Resizer': {
      commercial: 1,
      url: 'http://www.faststone.org/FSResizerDownload.htm',
      version: 'b>font[size="2"]',
      download: 'a[href$=".zip"]:not([href*="Setup"])',
      install: 'install'
    }
  }
};
