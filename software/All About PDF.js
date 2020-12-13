'use strict';

module.exports = {
  commercial: 3,
  url: 'https://allaboutpdf.com/versionhistory',
  version: 'h3',
  changelog: {
    selector: '#content>div>div>div>div:nth-child(2)',
    attr: 'text',
    match: /^BUILD [\d.]+/,
    split: true
  },
  download: 'http://download.allaboutpdf.com/all-about-pdf.zip',
  install: 'install'
};
