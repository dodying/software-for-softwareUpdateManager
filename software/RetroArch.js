'use strict'

let data = {
  url: 'https://buildbot.libretro.com/stable/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '.fb-n>a',
    sort: true,
    attr: 'text'
  }),
  changelog: ['https://retroarch.com/?page=changelog', '.changelog-update-descriptions'],
  download: 'https://buildbot.libretro.com/stable/{version}/windows/x86_64/RetroArch.7z',
  install: 'install'
}
module.exports = data
