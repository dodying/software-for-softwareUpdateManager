'use strict';

const data = {
  url: 'http://client-download.steampowered.com/client/steam_client_win32',
  version: (res, $) => res.body.match(/"version"\s+"(.*?)"/)[1],
  download: 'https://media.st.dl.pinyuncloud.com/client/installer/SteamSetup.exe',
  install: 'install_nsis'
};
module.exports = data;
