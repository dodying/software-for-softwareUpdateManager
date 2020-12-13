'use strict';

const data = {
  url: 'http://help.jianguoyun.com/?p=1415',
  version: ['[dir="ltr"]>strong', 'text', /（WPF\s*([\d.]+)）/],
  changelog: '[dir="ltr"]+ol',
  download: 'https://www.jianguoyun.com/static/exe/installer/NutstoreWindowsInstaller.exe',
  fixedPath: '%ProgramFiles%\\Nutstore\\Nutstore.exe',
  install: 'install_ai_cli'
};
module.exports = data;
