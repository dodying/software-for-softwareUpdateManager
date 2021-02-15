'use strict';

module.exports = {
  type: 'software-list',
  list: {
    FontRenamer: {
      url: 'https://www.neuber.com/free/fontrenamer/',
      version: () => '1',
      download: 'https://www.neuber.com/free/fontrenamer/fontrenamer.zip',
      install: 'install_zipped_single'
    },
    FontTwister: {
      commercial: 3,
      url: 'https://www.neuber.com/twister/update.html',
      version: ['blockquote>p>strong', 'text', /(\d+[\d.]+\d+[a-z]?)/i],
      changelog: 'blockquote>p+ul',
      download: 'https://www.neuber.com/download/FontTwister.exe',
      install: 'install'
    },
    IconView: {
      url: 'https://www.neuber.com/free/iconview/',
      version: () => '1',
      download: 'https://www.neuber.com/free/iconview/iconview.exe',
      install: 'install_single'
    },
    'Network Security Task Manager': {
      commercial: 3,
      url: 'https://www.neuber.com/network-taskmanager/update.html',
      version: ['blockquote>p>strong', 'text', /(\d+[\d.]+\d+[a-z]?)/i],
      changelog: 'blockquote>p+ul',
      download: 'https://www.neuber.com/download/network-taskmanager.exe',
      install: 'install'
    },
    'PC On-Off Time': {
      url: 'https://www.neuber.com/free/pctime/',
      version: () => '1',
      download: 'https://www.neuber.com/free/pctime/pctime.zip',
      install: 'install_zipped_single'
    },
    'Security Task Manager': {
      commercial: 3,
      url: 'https://www.neuber.com/taskmanager/update.html',
      version: ['blockquote>p>strong', 'text', /(\d+[\d.]+\d+[a-z]?)/i],
      changelog: 'blockquote>p+ul',
      download: 'https://www.neuber.com/download/SecurityTaskManager_Setup.exe',
      install: 'install'
    },
    'Svchost Process Analyzer': {
      url: 'https://www.neuber.com/free/svchost-analyzer/',
      version: () => '1',
      download: 'https://www.neuber.com/download/SvchostAnalyzer.exe',
      install: 'install_single'
    },
    Typograf: {
      commercial: 3,
      url: 'https://www.neuber.com/typograph/update.html',
      version: ['blockquote>p>strong', 'text', /(\d+[\d.]+\d+[a-z]?)/i],
      changelog: 'blockquote>p+ul',
      download: 'http://www.neuber.com/download/Typograph_Setup.exe',
      install: 'install'
    },
    'Visual TimeAnalyzer': {
      commercial: 3,
      url: 'https://www.neuber.com/timeanalyzer/update.html',
      version: ['blockquote>p>strong', 'text', /(\d+[\d.]+\d+[a-z]?)/i],
      changelog: 'blockquote>p+ul',
      download: 'https://www.neuber.com/download/TimeAnalyzer_Setup.exe',
      install: 'install'
    },
    VoicesInstaller: {
      url: 'https://www.neuber.com/free/voicesinstaller/',
      version: () => '1',
      download: 'https://www.neuber.com/download/VoicesInstaller.exe',
      install: 'install_single'
    }
  }
};
