'use strict'

let data = {
  url: 'http://www.eagleget.com/download-eagleget-portable/',
  version: 'a[href^="http://dl."]',
  changelog: async (res, $, fns, choice) => [(await fns.walkLink('http://forum.eagleget.com/viewforum.php?id=3', fns, {
    selector: '[href^="viewtopic.php?id="]:contains("Portable")',
    sort: true
  }, {
    selector: '.postmsg',
    attr: 'html'
  })), true],
  download: 'a[href^="http://dl."]',
  install: 'install'
}
module.exports = data
