'use strict';

module.exports = {
  type: 'software-list',
  list: {
    '2Browse': {
      url: 'https://www.carifred.com/2browse/',
      version: 'p:contains("Current version")',
      download: 'https://www.carifred.com/2browse/2Browse.exe',
      install: 'install_single'
    },
    'Account Profile Fixer': {
      url: 'https://www.carifred.com/apf/',
      version: 'p:contains("Current version")',
      download: 'https://www.carifred.com/apf/AccountProfileFixer.exe',
      install: 'install_single'
    },
    'Clear Disk Info': {
      url: 'https://www.carifred.com/cleardiskinfo/',
      version: 'p:contains("Current version")',
      download: 'https://www.carifred.com/cleardiskinfo/ClearDiskInfo.exe',
      install: 'install_single'
    },
    'File Extension Fixer': {
      url: 'https://www.carifred.com/exefixer',
      version: 'p:contains("Current version")',
      download: 'https://www.carifred.com/exefixer/ExeFixer.exe',
      install: 'install_single'
    },
    'File Version Info Editor': {
      url: 'https://www.carifred.com/fvie',
      version: 'p:contains("Current version")',
      download: 'https://www.carifred.com/fvie/FVIE.exe',
      install: 'install_single'
    },
    'Multiple Reboot Scheduler': {
      url: 'https://www.carifred.com/mrs/',
      version: 'p:contains("Current version")',
      download: 'https://www.carifred.com/mrs/MultipleRebootScheduler.exe',
      install: 'install_single'
    },
    'PCData Back': {
      url: 'https://www.carifred.com/pcdata_back',
      version: () => '1', // 'p:contains("Current version")',
      download: 'https://www.carifred.com/pcdata_back/PCData%20Back.exe',
      install: 'install_single'
    },
    'Quick Any2Ico': {
      url: 'https://www.carifred.com/quick_any2ico',
      version: 'p:contains("Current version")',
      download: 'https://www.carifred.com/quick_any2ico/Quick_Any2Ico.exe',
      install: 'install_single'
    },
    'Quick User Manager': {
      url: 'https://www.carifred.com/quick_user_manager/',
      version: 'p:contains("Current version")',
      download: 'https://www.carifred.com/quick_user_manager/QuickUserManager.exe',
      install: 'install_single'
    },
    'Recent File Seeker': {
      url: 'https://www.carifred.com/rfs',
      version: () => '1', // 'p:contains("Current version")',
      download: 'https://www.carifred.com/rfs/RecentFileSeeker.exe',
      install: 'install_single'
    },
    'SimplySync Backup': {
      url: 'https://www.carifred.com/simplysync_backup/',
      version: 'p:contains("Current version")',
      download: 'https://www.carifred.com/simplysync_backup/SimplySync.exe',
      install: 'install_single'
    },
    'Stop Resetting My Apps': {
      url: 'https://www.carifred.com/stop_resetting_my_apps/',
      version: 'p:contains("Current version")',
      download: 'https://www.carifred.com/stop_resetting_my_apps/StopResettingMyApps.exe',
      install: 'install_single'
    },
    'Tech Tool Store': {
      commercial: 3,
      url: 'https://www.carifred.com/tech_tool_store/',
      version: 'p:contains("Current version")',
      download: 'https://www.carifred.com/tech_tool_store/TechToolStore.exe',
      install: 'install_single'
    },
    'Ultra Adware Killer': {
      url: 'https://www.carifred.com/ultra_adware_killer/',
      version: 'p:contains("Current version")',
      download: 'https://www.carifred.com/ultra_adware_killer/UltraAdwareKiller.exe',
      install: 'install_single'
    },
    'Ultra Virus Killer': {
      commercial: 3,
      url: 'https://www.carifred.com/uvk',
      version: 'p:contains("Current version")',
      download: 'https://www.carifred.com/uvk/UVKInstaller.exe',
      install: 'install_single'
    },
    'WAU Manager': {
      url: 'https://www.carifred.com/wau_manager/',
      version: 'p:contains("Current version")',
      download: 'https://www.carifred.com/wau_manager/WAU%20Manager.exe',
      install: 'install_single'
    }
  }
};
