'use strict';

module.exports = {
  type: 'software-list',
  list: {
    'Alpha Tool': {
      site: {
        GitHub: 'https://github.com/lordmulder/alpha-tool/releases/latest'
      },
      install: 'install'
    },
    AvisynthChecker: {
      site: {
        GitHub: 'https://github.com/lordmulder/AvisynthChecker/releases/latest'
      },
      install: ['install_zipped_single', 'avs_check_x64.exe']
    },
    cecho: {
      site: {
        GitHub: 'https://github.com/lordmulder/cecho/releases/latest'
      },
      install: 'install_zipped_single'
    },
    'Chromium Updater': {
      site: {
        GitHub: 'https://github.com/lordmulder/Chromium-Updater/releases/latest'
      },
      install: 'install_zipped_single'
    },
    ClearClipboard: {
      site: {
        GitHub: 'https://github.com/lordmulder/ClearClipboard/releases/latest'
      },
      install: ['install_zipped_single', 'x64\\\\ClearClipboard.exe']
    },
    'Double File Scanner': {
      site: {
        GitHub: 'https://github.com/lordmulder/DoubleFilerScanner/releases/latest'
      },
      install: 'install_zipped_single'
    },
    INetGet: {
      site: {
        GitHub: 'https://github.com/lordmulder/INetGet/releases/latest'
      },
      install: ['install_zipped_single', 'INetGet.x64.exe']
    },
    LameXP: {
      site: {
        GitHub: 'https://github.com/lordmulder/LameXP/releases/latest'
      },
      versionChoice: ['.zip$', /LameXP v([\d.]+)/, false, 'name'],
      install: 'install_zipped_single'
    },
    LoggingUtil: {
      site: {
        GitHub: 'https://github.com/lordmulder/LoggingUtil/releases/latest'
      },
      install: 'install_zipped_single'
    },
    MediaInfoXP: {
      site: {
        GitHub: 'https://github.com/lordmulder/mediainfo-gui/releases/latest'
      },
      versionChoice: 'MediaInfo-GUI(.*).zip',
      install: 'install_zipped_single',
      other: {
        cli: {
          versionChoice: 'MediaInfo-CLI(.*).zip'
        }
      }
    },
    MParallel: {
      site: {
        GitHub: 'https://github.com/lordmulder/MParallel/releases/latest'
      },
      versionChoice: 'win64.zip',
      install: 'install_zipped_single'
    },
    mplayer: {
      site: {
        GitHub: 'https://github.com/lordmulder/mplayer-setup-win32/releases/latest'
      },
      versionChoice: '.exe',
      install: ['install_zipped', 'install']
    },
    MSleep: {
      site: {
        GitHub: 'https://github.com/lordmulder/MSleep/releases/latest'
      },
      install: ['install', null, 'x64']
    },
    'Real OS Version': {
      site: {
        GitHub: 'https://github.com/lordmulder/RealOSVersion/releases/latest'
      },
      install: 'install'
    },
    'Simple Tag Creator': {
      site: {
        GitHub: 'https://github.com/lordmulder/tag/releases'
      },
      install: 'install_zipped_single'
    },
    'Simple x264 Launcher': {
      site: {
        GitHub: 'https://github.com/lordmulder/Simple-x264-Launcher/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install'
    },
    TimedExec: {
      site: {
        GitHub: 'https://github.com/lordmulder/TimedExec/releases/latest'
      },
      install: ['install_zipped_single', 'x64\\\\TimedExec.exe']
    },
    TimerInterval: {
      site: {
        GitHub: 'https://github.com/lordmulder/TimerInterval/releases/latest'
      },
      install: ['install_zipped_single', 'TimerInterval.x64.exe']
    },
    wma2wav: {
      site: {
        GitHub: 'https://github.com/lordmulder/wma2wav/releases/latest'
      },
      install: ['install_zipped_single', 'wma2wav-x64.exe']
    }
  }
};
