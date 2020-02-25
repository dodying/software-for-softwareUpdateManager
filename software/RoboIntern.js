'use strict'

let data = {
  url: 'https://robointern.tech/release-log.html',
  version: ['.download-section b'],
  changelog: {
    selector: '.download-section',
    attr: 'text',
    match: /^RoboIntern [\d.]+/,
    split: true
  },
  download: 'https://robointern.tech/release/RoboIntern.zip',
  install: 'install'
}
module.exports = data
