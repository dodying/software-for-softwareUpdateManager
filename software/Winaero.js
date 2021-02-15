'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Alt+Tab Tuner': {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Tweak/System-Tweak/Alt-Tab-Tuner.shtml'
      },
      install: 'install_zipped_single'
    },
    ExecTI: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Tweak/System-Tweak/ExecTI-Run-as-TrustedInstaller.shtml'
      },
      install: 'install_zipped_single'
    },
    'Win+X Menu Editor': {
      site: {
        MajorGeeks: 'https://www.majorgeeks.com/mg/getmirror/winx_menu_editor,1.html'
      },
      install: 'install'
    },
    'Winaero Tweaker': {
      commercial: 3,
      site: {
        Softpedia: 'https://www.softpedia.com/get/Tweak/System-Tweak/Winaero-Tweaker.shtml'
      },
      install: ['install_zipped', 'install_inno_cli']
    }
  }
};
