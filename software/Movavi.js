'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'PDF Editor': {
      commercial: 3,
      url: 'https://pdf.movavi.com/',
      version: '.tech-specs__item:contains("Version")+div',
      download: 'https://files.movavi.com/dl/MovaviPDFEditorSetupC.exe',
      install: 'install_nsis'
    },
    'Photo DeNoise': {
      commercial: 3,
      url: 'https://www.movavi.com/noise-reduction-software/',
      version: '.tech-specs__item:contains("Version")+div',
      download: 'https://files.movavi.com/dl/MovaviPhotoDenoiseSetupC.exe',
      install: 'install_nsis'
    },
    'Photo Editor': {
      commercial: 3,
      url: 'https://www.movavi.com/photo-editor/',
      version: '.tech-specs__item:contains("Version")+div',
      download: 'https://files.movavi.com/dl/MovaviPhotoEditorSetupC.exe',
      install: 'install'
    },
    'Photo Focus': {
      commercial: 3,
      url: 'https://www.movavi.com/blur-image/whats-new.html',
      version: '.last_versions>.date+p',
      changelog: '.last_versions>ul',
      download: 'https://files.movavi.com/dl/MovaviPhotoFocusSetupC.exe',
      install: 'install_nsis'
    },
    'Photo Organizer': {
      commercial: 3,
      url: 'https://www.movavi.com/photo-organizer/',
      version: '.tech-specs__item:contains("Version")+div',
      download: 'https://files.movavi.com/dl/MovaviPhotoManagerSetupC_x64.exe',
      install: 'install'
    },
    'PPT Converter': {
      commercial: 3,
      url: 'https://www.movavi.com/powerpoint-to-video-converter/',
      version: '#section_tech_specs h4+div .row>div.col-md-6:nth-child(2)',
      download: 'https://files.movavi.com/dl/MovaviPPTToVideoConverterSetup.exe',
      install: 'install_nsis'
    },
    'Screen Recorder Studio': {
      commercial: 3,
      url: 'https://www.movavi.com/screen-recorder/',
      version: '.tech-specs__item:contains("Version")+div',
      download: 'https://files.movavi.com/dl/MovaviScreenCaptureSetupC.exe',
      install: 'install'
    },
    'Screen Recorder': {
      commercial: 3,
      url: 'https://www.movavi.com/screen-recorder-personal.html',
      version: '.tech-specs__item:contains("Version")+div',
      download: 'https://files.movavi.com/dl/MovaviScreenRecorderSetupC.exe',
      install: 'install'
    },
    'Slideshow Maker': {
      commercial: 3,
      url: 'https://www.movavi.com/photo-to-dvd-slideshow/',
      version: '.tech-specs__item:contains("Version")+div',
      download: 'https://files.movavi.com/dl/MovaviSlideshowMakerDistribSetupC.exe',
      install: 'install'
    },
    'Video Converter': {
      commercial: 3,
      url: 'https://www.movavi.com/videoconverter/',
      version: '.tech-specs__item:contains("Version")+div',
      download: 'https://files.movavi.com/dl/MovaviVideoConverterSetupC.exe',
      install: 'install'
    },
    'Video Editor 360': {
      commercial: 3,
      url: 'https://www.movavi.com/360-video-editor/',
      version: '.tech-specs__item:contains("Version")+div',
      download: 'https://files.movavi.com/dl/Movavi360VideoEditorSetupC.exe',
      install: 'install_nsis'
    },
    'Video Editor Business': {
      commercial: 3,
      url: 'https://www.movavi.com/video-editor-business/',
      version: '#tech-specs .row>div:nth-child(2)',
      download: 'https://files.movavi.com/dl/MovaviVideoEditorBizSetupC.exe',
      install: 'install'
    },
    'Video Editor Plus': {
      commercial: 3,
      url: 'https://www.movavi.com/video-editor-plus/',
      version: '#tech-specs .row>div:nth-child(2)',
      download: 'https://files.movavi.com/dl/MovaviVideoEditorPlusSetupC.exe',
      install: 'install'
    },
    'Video Suite': {
      commercial: 3,
      url: 'https://www.movavi.com/suite/',
      version: '.tech-specs__item:contains("Version")+div',
      download: 'https://files.movavi.com/dl/MovaviVideoSuiteSetupC.exe',
      install: 'install'
    }
  }
};
