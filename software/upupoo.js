'use strict';

const data = {
  url: 'http://www.upupoo.com/',
  version: '.editionTip',
  download: (res) => res.body.match(/window.open\('(.*?)'/)[1],
  install: info => {
    const fse = require('fs-extra');
    const path = require('path');
    const cp = require('child_process');

    const name = Math.random().toString().substr(2);

    cp.execSync(`plugins\\7z.exe x -sccUTF-8 -y -o"unzip\\${name}\\" "${info.output}"`);
    const fromNew = `unzip\\${name}`;
    const list = fse.readdirSync(fromNew);

    if (!fse.existsSync(info.parentPath)) fse.mkdirsSync(info.parentPath);
    let tempPath = 'unzip\\upupoo';
    tempPath = path.resolve(info.fns.dirname, tempPath);
    fse.mkdirSync(tempPath);

    let myDocuments = cp.execSync('reg query "HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\User Shell Folders" /v Personal').toString();
    myDocuments = myDocuments.match(/REG_EXPAND_SZ\s+(.*)\s/)[1];
    const myDocumentsDir = path.resolve(myDocuments, 'Upupoo');
    if (!fse.existsSync(myDocumentsDir)) fse.mkdirsSync(myDocumentsDir);

    list.filter(i => path.extname(i) === '.zip').forEach(i => {
      const _thisFullPath = path.resolve(info.fns.dirname, fromNew, i);
      let outputDir;
      if (i === 'bizhi.zip') {
        outputDir = path.resolve(path.parse(info.path).root, 'UpupooResource');
      } else if (i === 'resource.zip') {
        outputDir = myDocumentsDir;
      } else {
        outputDir = tempPath;
      }
      cp.execSync(`plugins\\7z.exe x -sccUTF-8 -y -o"${outputDir}\\" "${_thisFullPath}"`);
    });

    list.filter(i => path.extname(i) === '.upup').forEach(i => {
      const _thisFullPath = path.resolve(info.fns.dirname, fromNew, i);
      const _thisFullPathNew = path.resolve(myDocumentsDir, i);
      fse.copySync(_thisFullPath, _thisFullPathNew);
    });

    fse.copySync(tempPath, info.parentPath);
    return true;
  }
};
module.exports = data;
