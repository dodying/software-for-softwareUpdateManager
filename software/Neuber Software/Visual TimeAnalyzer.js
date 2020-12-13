'use strict';

module.exports = {
  commercial: 3,
  url: 'https://www.neuber.com/timeanalyzer/update.html',
  version: ['blockquote>p>strong', 'text', /(\d+[\d.]+\d+[a-z]?)/i],
  changelog: 'blockquote>p+ul',
  download: 'https://www.neuber.com/download/TimeAnalyzer_Setup.exe',
  install: 'install'
};
