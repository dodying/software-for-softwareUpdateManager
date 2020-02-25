'use strict'

let data = {
  commercial: 3,
  url: 'https://www.goldwave.com/release.php',
  version: '#downloadprimary',
  changelog: async (res, $, fns, choice) => [(await fns.walkLink('https://goldwave.ca/forums/viewforum.php?f=5', fns, '.topictitle', {
    selector: '.content',
    attr: 'html'
  })), true],
  download: '#downloadprimary',
  install: 'install'
}
module.exports = data
