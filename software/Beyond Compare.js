'use strict'

let data = {
  commercial: 3,
  url: 'https://scootersoftware.com/download.php?zz=v4changelog',
  version: '.changelog>h2',
  changelog: {
    selector: '.changelog',
    attr: 'text',
    match: /^[\d.]+/,
    split: true
  },
  download: async (res, $, fns, choice) => fns.walkLink('https://scootersoftware.com/download.php', fns, '#content a[href*="zh"]'),
  install: 'install_inno_type'
}
module.exports = data
