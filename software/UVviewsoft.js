'use strict';

module.exports = {
  type: 'software-list',
  list: {
    CudaText: {
      site: {
        FossHub: 'https://www.fosshub.com/CudaText.html'
      },
      downloadChoice: /cudatext-win-x64-(.*).zip/,
      install: 'install'
    },
    LogViewer: {
      commercial: 3,
      url: 'http://uvviewsoft.com/logviewer/download.htm',
      version: 'body > table:nth-child(2) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(3) > td > p:nth-child(1)',
      download: 'http://uvviewsoft.com/logviewer/files/uvviewsoft_LogViewer.zip',
      install: 'install_zipped_single'
    },
    'TC Plugins Manager': {
      url: 'https://totalcmd.net/plugring/tc_plugman.html',
      version: 'h1',
      download: 'http://uvviewsoft.com/files_tc/util_TCPlugman.zip',
      install: 'install'
    },
    'Universal Viewer': {
      commercial: 3,
      url: 'http://uvviewsoft.com/uviewer/download.htm',
      version: 'body > table:nth-child(2) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > ul:nth-child(3) > li:nth-child(1) > b',
      download: 'http://uvviewsoft.com/uviewer/files/UniversalViewerPro.zip',
      install: 'install',
      other: {
        free: {
          commercial: 0,
          version: 'body > table:nth-child(2) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > ul:nth-child(5) > li:nth-child(1) > b',
          download: 'http://uvviewsoft.com/uviewer/files/UniversalViewer.zip'
        }
      }
    }
  }
};
