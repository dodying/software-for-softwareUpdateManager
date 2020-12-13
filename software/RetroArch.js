'use strict';

module.exports = {
  url: 'https://retroarch.com/?page=platforms',
  version: (res) => res.body.match(/version = "(.*?)"/)[1],
  changelog: ['https://retroarch.com/?page=changelog', '.changelog-update-descriptions'],
  download: 'http://buildbot.libretro.com/stable/{version}/windows/x86_64/RetroArch-x64-setup.exe',
  install: ['install_zipped', 'install', '.7z']
};
