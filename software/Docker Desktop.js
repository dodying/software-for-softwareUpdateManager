'use strict';

module.exports = {
  fixedPath: '%ProgramFiles%\\Docker\\Docker\\Docker Desktop.exe',
  url: 'https://docs.docker.com/docker-for-windows/release-notes/',
  version: 'h2[id^="docker-desktop-community"]',
  changelog: {
    selector: '.section',
    attr: 'text',
    match: /^Docker Desktop Community [\d.]+/,
    split: true
  },
  download: 'https://desktop.docker.com/win/stable/Docker%20Desktop%20Installer.exe',
  other: {
    edge: {
      url: 'https://docs.docker.com/docker-for-windows/edge-release-notes/',
      download: 'https://desktop.docker.com/win/edge/Docker%20Desktop%20Installer.exe'
    }
  }
};
