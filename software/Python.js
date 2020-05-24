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
  // install: ['install_cli', null, ['/quiet', '/passive', 'TargetDir={dir}', 'AssociateFiles=1', 'CompileAll=1', 'PrependPath=1']]
  install: info => {
    const excludes = [/^py\.exe$/i, /\.msi$/i];
    let installMsi = ['core.msi', 'dev.msi', 'doc.msi', 'exe.msi', 'lib.msi', 'tcltk.msi', 'test.msi', 'tools.msi'];

    const path = require('path');
    const fse = require('fs-extra');
    const cp = require('child_process');

    const install = () => {
      const tmp = path.resolve(info.fns.dirname, 'unzip', info.name);

      cp.execSync(`plugins\\dark.exe "${info.output}" -x "${tmp}"`);

      let fromNew = path.resolve(tmp, 'AttachedContainer');
      let list = fse.readdirSync(fromNew);
      while (list.length === 1) {
        fromNew = path.resolve(fromNew, list[0]);
        if (!fse.statSync(fromNew).isDirectory()) {
          fromNew = path.parse(fromNew).dir;
          break;
        }
        list = fse.readdirSync(fromNew);
      }

      installMsi = list.filter(file => {
        return installMsi.some(i => typeof i === 'string' ? i === file : !!file.match(i));
      });

      for (const file of list) {
        const { name, ext } = path.parse(file);
        if (ext !== '.msi') continue;
        const _path = path.resolve('./', fromNew, file);

        if (!installMsi.includes(file)) {
          // fse.removeSync(_path)
          continue;
        }

        console.log(`Installing:\tExtract from ${file}`);
        const folderNew = path.resolve(path.parse(__dirname).dir, fromNew, name + '_msi');
        cp.execSync(`start /wait msiexec /a "${_path}" /passive /qr /norestart TARGETDIR="${folderNew}"`);
        fse.removeSync(_path);

        if (fse.existsSync(folderNew)) {
          info.fns.copy(folderNew, path.resolve(info.fns.dirname, fromNew), excludes);
          fse.removeSync(folderNew);
        }
      }
      info.fns.copy(fromNew, info.parentPath, excludes);
      return true;
    };

    const killed = info.fns.kill(info.parentPath);
    if (!killed) return false;

    try {
      const installed = install();
      return installed;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
  afterInstall: info => {
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
  }
};
module.exports = data;
