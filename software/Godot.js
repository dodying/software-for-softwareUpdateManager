'use strict';

module.exports = {
  url: 'https://godotengine.org/download/windows',
  version: ['.download>a[href$="win64.exe.zip"]', 'href', /godotengine\/(.*?)\//],
  download: '.download>a[href$="win64.exe.zip"]',
  install: 'install',
  other: {
    mono: {
      version: ['.download>a[href$="win64.zip"][href*="/mono/"]', 'href', /godotengine\/(.*?)\//],
      download: '.download>a[href$="win64.zip"][href*="/mono/"]'
    }
  }
};
