'use strict';

const data = {
  url: 'https://www.python.org/downloads/windows/',
  version: 'a[href^="/downloads/release/python-3"]',
  changelog: {
    url: 'a[href^="/downloads/release/python-3"]',
    selector: '.main-content'
  },
  download: 'https://www.python.org/ftp/python/{version}/python-{version}-amd64.exe',
  // https://docs.python.org/3/using/windows.html#installing-without-ui
  install: ['install_cli', null, ['/quiet', '/passive', 'TargetDir={dir}', 'AssociateFiles=1', 'CompileAll=1']],
  other: {
    2: {
      version: 'a[href^="/downloads/release/python-2"]',
      changelog: {
        url: 'a[href^="/downloads/release/python-2"]',
        selector: '.main-content'
      },
      download: 'https://www.python.org/ftp/python/{version}/python-{version}.amd64.msi',
      preferPath: 'python.exe',
      install: ['install_msi_cli', ['ADDLOCAL=ALL']]
    }
  }
};
module.exports = data;
