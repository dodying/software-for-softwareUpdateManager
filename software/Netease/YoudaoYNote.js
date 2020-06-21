'use strict';

module.exports = {
  url: 'https://note.youdao.com/update/updateConfig.json',
  version: (res) => res.json.PC.version,
  download: 'http://download.ydstatic.com/notewebsite/downloads/YNote.exe',
  install: 'install_nsis'
};
