// 'use strict';

// const data = {
//   commercial: 2,
//   url: 'https://forum.odrive.com/c/release-notes',
//   version: (res, $) => {
//     let json = JSON.parse($('#data-preloaded').attr('data-preloaded'));
//     json = Object.entries(json).find(i => i[0].match(/^topic_list_c/))[1];
//     return JSON.parse(json).topic_list.topics.filter(i => i.title.match('Win v'))[0].title.match(/Win v.(\d+)/)[1];
//   },
//   download: 'https://www.odrive.com/downloaddesktop?platform=win',
//   install: ['install_wix', null, 'odrive.x64.msi', 'odrive.exe']
// };
// module.exports = data;
'use strict';

module.exports = {
  commercial: 2,
  site: {
    download: 'https://forum.odrive.com/c/release-notes'
  },
  versionChoice: 'https://www.odrive.com/downloaddesktop?platform=win',
  install: ['install_wix', null, 'odrive.x64.msi', 'odrive.exe']
};
