'use strict';

module.exports = {
  type: 'software-list',
  list: {
    PowerWord: {
      site: {
        'Tencent SoftMgr': 'https://pc.qq.com/detail/16/detail_1216.html'
      }
    },
    TypeEasy: {
      url: 'http://www.51dzt.com/',
      preferPath: 'ksolaunch.exe',
      version: ['a[href$=".exe"]', 'href'],
      download: 'a[href$=".exe"]',
      install: ['install_zipped', 'install', '\\$EXEFILE', [/^\$/, /^config\.xml$/, /^TypeEasy\.exe$/]]
    },
    WPS: {
      url: 'http://pc.wps.cn/',
      preferPath: 'ksolaunch.exe',
      version: '.verson_txt',
      download: '.banner_txt>a[href$=".exe"]',
      install: info => {
        return info.fns.install.zipped(info, (output, iPath) => {
          const path = require('path');
          const fs = require('fs');

          const dir = path.resolve(info.fns.dirname, 'unzip/$_11_');

          const oem = path.resolve(dir, 'oem.ini');
          let content = fs.readFileSync(oem, 'utf-8');
          content = content.replace('[Setup]', `[Setup]\nINSTALLPATH=${path.dirname(iPath)}\\`).replace(/Silent=\d+/i, 'Silent=1').replace(/(Launch.*?)=\d+/i, '$1=0').replace(/SendInstallSource=\d+/, 'SendInstallSource=0').replace(/AutoRunWhenStart=\d+/, 'AutoRunWhenStart=0');
          fs.writeFileSync(oem, content);

          const exe = path.resolve(dir, '$EXEFILE');
          fs.renameSync(exe, exe + '.exe');
          return info.fns.install.cli(info, exe + '.exe', [], { wait: true });
        });
      }
    },
    WPSPDF: {
      url: 'http://wpspdf.cn/',
      preferPath: 'ksolaunch.exe',
      version: ['a[href$=".exe"]', 'href'],
      download: 'a[href$=".exe"]',
      install: info => {
        return info.fns.install.zipped(info, (output, iPath) => {
          const path = require('path');
          const fs = require('fs');

          const dir = path.resolve(info.fns.dirname, 'unzip/$_11_');

          const oem = path.resolve(dir, 'oem.ini');
          let content = fs.readFileSync(oem, 'utf-8');
          content = content.replace('[Setup]', `[Setup]\nINSTALLPATH=${path.dirname(iPath)}\\`).replace(/Silent=\d+/i, 'Silent=1').replace(/(Launch.*?)=\d+/i, '$1=0').replace(/SendInstallSource=\d+/, 'SendInstallSource=0').replace(/AutoRunWhenStart=\d+/, 'AutoRunWhenStart=0');
          fs.writeFileSync(oem, content);

          const exe = path.resolve(dir, '$EXEFILE');
          fs.renameSync(exe, exe + '.exe');
          return info.fns.install.cli(info, exe + '.exe', [], { wait: true });
        });
      }
    }
  }
};
