'use strict';

module.exports = {
  commercial: 3,
  url: 'https://www.neuber.com/network-taskmanager/update.html',
  version: ['blockquote>p>strong', 'text', /(\d+[\d.]+\d+[a-z]?)/i],
  changelog: 'blockquote>p+ul',
  download: 'https://www.neuber.com/download/network-taskmanager.exe',
  install: 'install'
};
