'use strict'

let data = {
  url: 'https://getpublii.com/download/',
  version: ['.download-files>tbody>tr:nth-child(3)>td:nth-child(2)', 'text', /([\d.]+) \(build (\d+)\)/, '$1.$2'],
  changelog: async (res, $, fns, choice) => [(await fns.walkLink('https://getpublii.com/blog/', fns, '.card>h2>a:contains("Release")', {
    selector: '.post-entry',
    attr: 'html'
  })), true],
  download: '.download-files>tbody>tr:nth-child(3)>td:nth-child(4)>a',
  install: 'install_inno'
}
module.exports = data
