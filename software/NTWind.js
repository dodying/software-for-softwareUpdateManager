'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Alt-Tab Terminator': {
      url: 'https://www.ntwind.com/software/alttabter.html',
      version: '.btn_download',
      changelog: ['https://www.ntwind.com/software/alttabter/what-is-new.html', '#content>ul'],
      download: '.btn_download',
      install: 'install_nsis'
    },
    'Bad Application': {
      url: 'https://www.ntwind.com/software/utilities/badapp.html',
      version: () => '1.0',
      download: '.btn_download',
      install: 'install'
    },
    'Close All': {
      url: 'https://www.ntwind.com/software/utilities/close-all.html',
      version: '.btn_download',
      download: '.btn_download',
      install: ['install_zipped_single', 'CloseAll.exe']
    },
    'Hidden Start': {
      commercial: 3,
      url: 'https://www.ntwind.com/software/hstart.html',
      version: '.btn_download',
      changelog: ['https://www.ntwind.com/software/hstart/what-is-new.html', '#content>ul'],
      download: '.btn_download',
      install: 'install_nsis'
    },
    'Sticky Previews': {
      commercial: 3,
      url: 'https://www.ntwind.com/software/sticky-previews.html',
      version: '.btn_download',
      changelog: ['https://www.ntwind.com/software/sticky-previews/what-is-new.html', '#content>ul'],
      download: '.btn_download',
      install: 'install_nsis'
    },
    'Visual Subst': {
      url: 'https://www.ntwind.com/software/utilities/visual-subst.html',
      version: '.btn_download',
      download: '.btn_download',
      install: ['install_zipped_single', 'VSubst.exe']
    },
    WinCam: {
      commercial: 3,
      url: 'https://www.ntwind.com/software/wincam.html',
      version: '.btn_download',
      changelog: ['https://www.ntwind.com/software/wincam/what-is-new.html', '#content>ul'],
      download: '.btn_download',
      install: 'install_nsis'
    },
    WindowSpace: {
      commercial: 3,
      url: 'https://www.ntwind.com/software/windowspace.html',
      version: '.btn_download',
      changelog: ['https://www.ntwind.com/software/windowspace/what-is-new.html', '#content>ul'],
      download: '.btn_download',
      install: 'install_nsis'
    },
    WinSnap: {
      commercial: 3,
      url: 'https://www.ntwind.com/software/winsnap.html',
      version: '.btn_download',
      changelog: ['https://www.ntwind.com/software/winsnap/what-is-new.html', '#content>ul'],
      download: '.btn_download',
      install: 'install_nsis'
    }
  }
};
