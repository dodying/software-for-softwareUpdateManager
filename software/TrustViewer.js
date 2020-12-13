'use strict';

module.exports = {
  url: 'http://trustviewer.com/en',
  version: '.fa-download',
  download: 'http://trustviewer.com/src/client/TrustViewer.exe',
  install: 'install_single',
  other: {
    server: {
      download: 'http://trustviewer.com/file/TrustServer.exe.7z',
      install: 'install_zipped_single'
    }
  }
};
