'use strict'

let data = {
  commercial: 2,
  url: 'https://forum.odrive.com/c/release-notes',
  version: (res, $) => JSON.parse(JSON.parse($('#data-preloaded').attr('data-preloaded'))['topic_list_c/release-notes/l/latest'])['topic_list']['topics'].filter(i => i.title.match('Win v'))[0].title.match(/Win v.(\d+)/)[1],
  download: 'https://www.odrive.com/downloaddesktop?platform=win',
  install: ['install_wix', null, 'odrive.x64.msi', 'odrive.exe']
}
module.exports = data
