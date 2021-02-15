'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Advanced SystemCare': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/advanced_systemcare,1.html'
      },
      install: 'install_inno'
    },
    'Driver Booster': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/iobit_driver_booster,1.html'
      },
      install: 'install_inno',
      afterInstall: info => {
        const path = require('path');
        const fse = require('fs-extra');

        const parentPath2 = path.parse(info.parentPath).dir;

        fse.moveSync(path.join(info.parentPath, '{cm_AppVer}'), path.join(parentPath2, 'Driver Booster-Main'));
        fse.removeSync(info.parentPath);
        fse.moveSync(path.join(parentPath2, 'Driver Booster-Main'), info.parentPath);
      }
    },
    'IObit Game Booster': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/iobit_game_booster,1.html'
      },
      install: 'install_inno_type'
    },
    'IObit Malware Fighter': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/iobit_malware_fighter,1.html'
      },
      install: ['install_inno_type', null, null, { '{code_GetUserProgdata}': null }]
    },
    'IObit Toolbox': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/iobit_toolbox,1.html'
      },
      install: 'install'
    },
    'IObit Undelete': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/iobit_undelete,1.html'
      },
      install: 'install_single'
    },
    'IObit Uninstaller': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/iobit_uninstaller,1.html'
      },
      install: 'install_inno_type'
    },
    'IObit Unlocker': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/iobit_unlocker,1.html'
      },
      install: ['install_inno_type', null, { IObitUnlockerExtension: '2', IObitUnlocker: '9' }]
    },
    'Protected Folder': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/iobit_protected_folder,1.html'
      },
      install: 'install_inno_type'
    },
    'Random Password Generator': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/random_password_generator,1.html'
      },
      install: 'install_inno'
    },
    'Smart Defrag': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/iobit_smartdefrag,1.html'
      },
      install: 'install_inno'
    },
    'Start Menu 8': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/start_menu_8,1.html'
      },
      install: ['install_inno_type', null, null, { '{code_CustomDefaultDir}': '{dir}' }]
    },
    WinMetro: {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/winmetro,1.html'
      },
      install: 'install_inno'
    }
  }
};
