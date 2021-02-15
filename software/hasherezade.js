'use strict';

module.exports = {
  type: 'software-list',
  list: {
    DLLtoEXE: {
      site: {
        GitHub: 'https://github.com/hasherezade/dll_to_exe/releases/latest'
      },
      versionChoice: 'dll_to_exe.exe',
      install: 'install_single'
    },
    EXEtoDLL: {
      site: {
        AppVeyor: 'https://ci.appveyor.com/api/projects/hasherezade/exe-to-dll'
      },
      downloadChoice: ['Release.zip', 'Environment: env_arch=x64; Configuration: Release'],
      install: ['install_zipped_single', 'exe_to_dll.exe']
    },
    HollowsHunter: {
      site: {
        GitHub: 'https://github.com/hasherezade/hollows_hunter/releases/latest'
      },
      versionChoice: 'hollows_hunter64.zip',
      install: 'install'
    },
    'IAT patcher': {
      site: {
        GitHub: 'https://github.com/hasherezade/IAT_patcher/releases/latest'
      },
      versionChoice: 'IAT_Patcher_x64.zip',
      install: 'install'
    },
    'Module Overloading': {
      site: {
        GitHub: 'https://github.com/hasherezade/module_overloading/releases/latest'
      },
      versionChoice: 'module_overloader64.exe',
      install: 'install_single'
    },
    'PE-sieve': {
      site: {
        GitHub: 'https://github.com/hasherezade/pe-sieve/releases/latest'
      },
      versionChoice: 'pe-sieve64.zip',
      install: 'install_zipped_single'
    },
    PEtoShellcode: {
      site: {
        GitHub: 'https://github.com/hasherezade/pe_to_shellcode/releases/latest'
      },
      versionChoice: 'pe2shc.exe',
      install: 'install_single',
      other: {
        runshc32: {
          versionChoice: 'runshc32.exe'
        },
        runshc64: {
          versionChoice: 'runshc64.exe'
        }
      }
    },
    'Process Chameleon': {
      site: {
        GitHub: 'https://github.com/hasherezade/process_chameleon/releases/latest'
      },
      versionChoice: 'process_chameleon.zip',
      install: ['install_zipped_single', 'lil_calc64.exe']
    },
    'process Doppelganging': {
      site: {
        GitHub: 'https://github.com/hasherezade/process_doppelganging/releases/latest'
      },
      install: ['install_zipped_single', 'proc_doppel64.exe']
    }
  }
};
