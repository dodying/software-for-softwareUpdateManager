// 'use strict'

// let data = {
//   url: 'https://notepad-plus-plus.org/download/',
//   version: 'h2>a',
//   changelog: async (res, $, fns, choice) => [(await fns.walkLink(res, fns, 'h2>a', {
//     selector: 'ol',
//     attr: 'html'
//   })), true],
//   download: async (res, $, fns, choice) => fns.walkLink(res, fns, 'h2>a', '[href$="bin.x64.7z"]'),
//   install: 'install'
// }
// module.exports = data
'use strict'

let data = {
  site: {
    GitHub: 'https://github.com/notepad-plus-plus/notepad-plus-plus/releases/latest'
  },
  downloadChoice: 'bin.x64.7z',
  install: 'install'
}
module.exports = data
