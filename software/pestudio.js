'use strict';

module.exports = {
  commercial: 2,
  url: 'https://www.winitor.com/tools/pestudio/changes.log',
  version: (res) => res.body.match(/Version ([\d.]+)/)[1],
  changelog: {
    match: /^Version [\d.]+/,
    split: true
  },
  download: 'https://www.winitor.com/tools/pestudio/current/pestudio.zip',
  install: 'install'
};
