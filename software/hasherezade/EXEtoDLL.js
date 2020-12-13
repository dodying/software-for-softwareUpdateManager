'use strict';

module.exports = {
  site: {
    AppVeyor: 'https://ci.appveyor.com/api/projects/hasherezade/exe-to-dll'
  },
  downloadChoice: ['Release.zip', 'Environment: env_arch=x64; Configuration: Release'],
  install: ['install_zipped_single', 'exe_to_dll.exe']
};
