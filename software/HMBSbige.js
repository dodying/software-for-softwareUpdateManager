'use strict';

module.exports = {
  type: 'software-list',
  list: {
    '010EditorKeygen': {
      site: {
        GitHub: 'https://github.com/HMBSbige/010EditorKeygen/releases/latest'
      },
      install: 'install_zipped_single'
    },
    AutoSplitVideo: {
      site: {
        GitHub: 'https://github.com/HMBSbige/AutoSplitVideo/releases/latest'
      },
      versionChoice: 'Win32-.*.7z',
      install: 'install'
    },
    BilibiliLiveRecordDownLoader: {
      site: {
        GitHub: 'https://github.com/HMBSbige/BilibiliLiveRecordDownLoader/releases/latest'
      },
      versionChoice: 'Win64-.*.7z',
      install: 'install',
      other: {
        netcore: {
          versionChoice: 'netcore-.*.7z'
        }
      }
    },
    GetCNDomainsAndIPv4: {
      site: {
        GitHub: 'https://github.com/HMBSbige/GetCNDomainsAndIPv4/releases/latest'
      },
      install: 'install'
    },
    NatTypeTester: {
      site: {
        GitHub: 'https://github.com/HMBSbige/NatTypeTester/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    },
    ShadowsocksR: {
      tags: ['proxy'],
      site: {
        GitHub: 'https://github.com/HMBSbige/ShadowsocksR-Windows/releases/latest'
      },
      versionChoice: 'Portable-Win64-.*.7z',
      install: 'install',
      other: {
        netcore: {
          versionChoice: 'netcore-.*.7z'
        }
      }
    },
    SteamAccountSwitcher: {
      site: {
        GitHub: 'https://github.com/HMBSbige/SteamAccountSwitcher/releases/latest'
      },
      versionChoice: '.exe',
      install: 'install_single'
    }
  }
};
