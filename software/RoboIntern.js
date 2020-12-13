'use strict';

const data = {
  url: 'https://robointern.tech/release-log.html',
  version: '.releaselog-section b',
  changelog: {
    selector: '.releaselog-section',
    attr: 'text',
    match: /^RoboIntern [\d.]+/,
    split: true
  },
  download: 'https://robointern.tech/release/RoboIntern.zip',
  install: 'install'
};
module.exports = data;
