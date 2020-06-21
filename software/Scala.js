'use strict';

module.exports = {
  site: {
    GitHub: 'https://github.com/scala/scala/releases/latest'
  },
  versionChoice: i => !i.prerelease,
  download: 'https://downloads.lightbend.com/scala/{version}/scala-{version}.msi',
  install: ['install_msi', null, 'bin/scala.bat']
};
