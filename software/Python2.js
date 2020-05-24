'use strict';

const data = {
  url: 'https://www.python.org/downloads/windows/',
  version: 'a[href^="/downloads/release/python-2"]',
  changelog: {
    url: 'a[href^="/downloads/release/python-2"]',
    selector: '.main-content'
  },
  download: 'https://www.python.org/ftp/python/{version}/python-{version}.amd64.msi',
  // preferPath: 'python.exe',
  // install: ['install_msi_cli', ['ADDLOCAL=ALL']]
  install: info => {
    const installed = info.fns.install.msi(info, null, 'python.exe');
    if (installed) {
      const path = require('path');
      const fse = require('fs-extra');
      const cp = require('child_process');

      const bundledPath = path.resolve(info.parentPath, 'Lib\\ensurepip\\_bundled');
      const whls = fse.readdirSync(bundledPath);
      let pip = whls.filter(i => i.match(/^pip-/))[0];
      pip = path.resolve(bundledPath, pip);
      const pipNew = path.resolve(info.parentPath, 'pip.whl');
      fse.copySync(pip, pipNew);
      whls.forEach(whl => {
        cp.execSync(`cd /d ${info.parentPath} & ${path.resolve(info.parentPath, 'python.exe')} pip.whl/pip install --no-index ${path.resolve(bundledPath, whl)}`);
      });
      fse.unlinkSync(pipNew);
    } else {
      return false;
    }
  }
};
module.exports = data;
