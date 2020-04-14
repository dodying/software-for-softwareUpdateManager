'use strict';

const data = {
  url: 'https://www.sumatrapdfreader.org/sumatra.js',
  version: (res, $) => res.body.match(/gSumVer = "(.*)"/)[1],
  changelog: ['https://www.sumatrapdfreader.org/news.html', '.bulleted-list'],
  download: 'https://www.sumatrapdfreader.org/dl2/SumatraPDF-{version}-64.zip',
  install: 'install_zipped_single',
  other: {
    daily: {
      url: 'https://kjkpubsf.sfo2.digitaloceanspaces.com/software/sumatrapdf/sumadaily.js',
      changelog: null,
      version: (res, $) => res.body.match(/sumLatestExeZip64\s*=\s*"(.*?)";/)[1].match(/prerel-(\d+)-64.zip/)[1],
      download: (res, $) => res.body.match(/sumLatestExeZip64\s*=\s*"(.*?)";/)[1]
    },
    'pre-release': {
      url: 'https://kjkpubsf.sfo2.digitaloceanspaces.com/software/sumatrapdf/sumatralatest.js',
      changelog: null,
      version: (res, $) => res.body.match(/sumLatestExeZip64\s*=\s*"(.*?)";/)[1].match(/prerel-(\d+)-64.zip/)[1],
      download: (res, $) => res.body.match(/sumLatestExeZip64\s*=\s*"(.*?)";/)[1]
    }
  }
};
module.exports = data;
