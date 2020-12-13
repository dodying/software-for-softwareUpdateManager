'use strict';

module.exports = {
  commercial: 3,
  url: 'https://www.neuber.com/taskmanager/update.html',
  version: ['blockquote>p>strong', 'text', /(\d+[\d.]+\d+[a-z]?)/i],
  changelog: 'blockquote>p+ul',
  download: 'https://www.neuber.com/download/SecurityTaskManager_Setup.exe',
  install: 'install'
};
