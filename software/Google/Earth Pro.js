'use strict'

let data = {
  url: 'https://support.google.com/earth/answer/168344',
  fixedPath: '%ProgramFiles%\\Google\\Google Earth Pro\\client\\googleearth.exe',
  version: ['a[href$="-x64.exe"]', 'href'],
  changelog: ['https://support.google.com/earth/answer/40901?hl=zh-Hans', '.zippy-wrapper'],
  download: 'a[href$="-x64.exe"]',
  install: ['install_cli', null, ['OMAHA=1'], { wait: true }]
}
module.exports = data
