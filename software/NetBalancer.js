'use strict'

let data = {
  commercial: 3,
  url: 'https://netbalancer.com/download',
  version: '#Download',
  changelog: async (res, $, fns, choice) => [(await fns.walkLink('https://netbalancer.com/news', fns, '[href^="https://netbalancer.com/news/article/"]', {
    selector: '.news-content',
    attr: 'html'
  })), true],
  download: 'https://netbalancer.com/downloads/NetBalancerSetup.exe',
  install: 'install_inno_cli'
}
module.exports = data
