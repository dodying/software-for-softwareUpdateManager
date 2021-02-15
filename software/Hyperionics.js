'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'FileBox eXtender': {
      url: 'http://www.hyperionics.com/files/index.asp',
      version: '[href="downloads.asp"]',
      changelog: ['https://www.hyperionics.com/files/changelog.asp', 'ul'],
      download: 'http://www.hyperionics.com/downloads/Fbx64Setup.exe',
      fixedPath: '%ProgramFiles%\\FileBX\\FileBX.exe',
      install: 'install_cli_s'
    },
    HyperCam: {
      commercial: 3,
      url: 'http://www.hyperionics.com/hc2/index.asp',
      version: 'a[href$=".exe"]',
      changelog: ['https://www.hyperionics.com/hc2/changelog.asp', 'ul'],
      download: 'a[href$=".exe"]',
      install: 'install'
    },
    HyperSnap: {
      commercial: 3,
      url: 'http://www.hyperionics.com/hsdx/index.asp',
      version: '.auto-style2',
      changelog: ['https://www.hyperionics.com/hsdx/changelog.asp', 'ul'],
      download: 'http://www.hyperionics.com/downloads/HS8Setup.exe',
      install: 'install'
    }
  }
};
