'use strict'

let data = {
  url: 'https://www.miranda-ng.org/distr/stable/',
  version: ['[href*="miranda-ng-v"][href$="x64.7z"]', 'href'],
  changelog: async (res, $, fns, choice) => [(await fns.walkLink('https://wiki.miranda-ng.org/index.php?title=Changelog', fns, 'li>a[title^="Changelog/"]', {
    selector: '.mw-parser-output',
    attr: 'html'
  })), true],
  download: '[href*="miranda-ng-v"][href$="x64.7z"]',
  install: 'install'
}
module.exports = data
