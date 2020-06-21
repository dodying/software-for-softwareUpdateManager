'use strict';

module.exports = {
  url: 'https://www.eclipse.org/downloads/packages/',
  version: ['.page-header', 'text', /Eclipse IDE (.*?) Packages/],
  download: (res, $, fns, choice = 'java') => 'https://mirrors.ustc.edu.cn/eclipse' + $(`.windows>[href*="-${choice}-"]`).attr('href').match(/\?file=(.*)(&|$)/)[1],
  install: 'install',
  other: {
    java: { downloadChoice: 'java' },
    jee: { downloadChoice: 'jee' },
    cpp: { downloadChoice: 'cpp' },
    committers: { downloadChoice: 'committers' },
    php: { downloadChoice: 'php' },
    dsl: { downloadChoice: 'dsl' },
    javascript: { downloadChoice: 'javascript' },
    rcp: { downloadChoice: 'rcp' },
    modeling: { downloadChoice: 'modeling' },
    parallel: { downloadChoice: 'parallel' },
    rust: { downloadChoice: 'rust' },
    testing: { downloadChoice: 'testing' },
    scout: { downloadChoice: 'scout' },
    installer: {
      download: (res, $) => 'https://mirrors.ustc.edu.cn/eclipse' + $('[href$="eclipse-inst-win64.exe"]').attr('href').match(/\?file=(.*)(&|$)/)[1],
      install: 'install_single'
    },
    platform: {
      url: 'https://download.eclipse.org/eclipse/downloads/',
      version: ['[title="Latest Release"]', 'text', /(.*)/],
      download: (res, $) => 'https://mirrors.ustc.edu.cn/eclipse' + '/eclipse/downloads/' + $('[title="Latest Release"]').attr('href') + `eclipse-platform-${$('[title="Latest Release"]').text()}-win32-x86_64.zip`
    }
  }
};
