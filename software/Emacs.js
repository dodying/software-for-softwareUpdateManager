'use strict';

module.exports = {
  url: 'https://ftp.gnu.org/gnu/emacs/windows/',
  version: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a',
    matchCheck: /emacs-\d+\//,
    sort: true
  }, {
    selector: 'a',
    match: /emacs-(.*?)-x86_64-installer.exe/
  }),
  changelog: ['https://www.gnu.org/savannah-checkouts/gnu/emacs/emacs.html', '#Releases~ul'],
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: 'a',
    matchCheck: /emacs-\d+\//,
    sort: true
  }, {
    selector: 'a',
    matchCheck: /emacs-(.*?)-x86_64-installer.exe/
  }),
  install: 'install_nsis_cli'
};
