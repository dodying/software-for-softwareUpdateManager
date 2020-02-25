'use strict'

let data = {
  commercial: 3,
  url: 'https://www.netlimiter.com/',
  version: ['[href$=".exe"]', 'href'],
  changelog: async (res, $, fns, choice) => [(await fns.walkLink('https://www.netlimiter.com/releases', fns, '[href^="/releases/"]', {
    selector: '.jumbotron+.container',
    attr: 'html'
  })), true],
  download: '[href$=".exe"]',
  install: 'install_ai_cli'
}
module.exports = data
