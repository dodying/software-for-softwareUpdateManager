'use strict';

const data = {
  url: 'https://download.racket-lang.org/',
  version: 'h3',
  download: 'https://mirror.racket-lang.org/installers/{version}/racket-{version}-x86_64-win32.exe',
  install: 'install_nsis',
  other: {
    CS: {
      download: 'https://mirror.racket-lang.org/installers/{version}/racket-{version}-x86_64-win32-cs.exe'
    },
    'Minimal Racket': {
      download: 'https://mirror.racket-lang.org/installers/{version}/racket-minimal-{version}-x86_64-win32.exe'
    },
    'Minimal Racket-CS': {
      download: 'https://mirror.racket-lang.org/installers/{version}/racket-minimal-{version}-x86_64-win32-cs.exe'
    }
  }
};
module.exports = data;
