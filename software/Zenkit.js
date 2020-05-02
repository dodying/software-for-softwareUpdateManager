'use strict';

const data = {
  url: 'https://zenkit.com/en/platforms/',
  version: ['[href$=".exe"]+div', 'text', /Version ([\d-]+)/],
  download: 'https://static.zenkit.com/downloads/desktop-apps/base/zenkit-base-windows.exe',
  install: ['install_zipped', 'install', 'app-64.7z'],
  other: {
    todo: {
      url: 'https://zenkit.com/en/todo/platforms/',
      download: 'https://static.zenkit.com/downloads/desktop-apps/todo/zenkit-todo-windows.exe'
    }
  }
};
module.exports = data;
