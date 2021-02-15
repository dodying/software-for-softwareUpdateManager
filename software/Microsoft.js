'use strict';

let latest;
let json;
// https://www.microsoftedgeinsider.com/en-us/download?platform=win10
// https://tools.shuax.com/edge/
// https://go.microsoft.com/fwlink/?linkid=2069324&Channel=Stable&language=cn
let version, channel;
const getVersion = async (res, $, fns, choice) => {
  const res1 = await fns.req({
    uri: `https://msedge.api.cdp.microsoft.com/api/v1/contents/Browser/namespaces/Default/names/msedge-${channel}-win-x64/versions/latest?action=select`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'User-Agent': 'Microsoft Edge Update/1.3.107.13;winhttp',
      // 'X-Old-UID': 'age=-1; cnt=1',
      // 'MS-CorrelationId': '{B6D5F1A8-223A-4FCB-B3FB-BB955B87A86C}',
      // 'MS-RequestId': '{22722DD2-7E5E-4188-935B-A01494EE7C31}',
      // 'MS-CV': 'qPHVtjoiy0+z+7uVW4eobA.0',
      // 'X-Last-HR': '0x0',
      // 'X-Last-HTTP-Status-Code': '0',
      // 'X-Retry-Count': '0',
      // 'X-HTTP-Attempts': '1'
    },
    body: '{"targetingAttributes":{"AppAp":"","AppCohort":"","AppLang":"en-us","AppRollout":1.0,"AppVersion":"","IsInternalUser":false,"IsMachine":true,"OsArch":"x64","OsPlatform":"win","OsVersion":"10.0.17763.1","Updater":"MicrosoftEdgeUpdate","UpdaterVersion":"1.3.107.13"}}'
  });
  return (version = res1.json.ContentId.Version);
};

module.exports = {
  type: 'software-list',
  list: {
    ApplicationInspector: {
      site: {
        GitHub: 'https://github.com/microsoft/ApplicationInspector/releases/latest'
      },
      versionChoice: '_windows_(.*).zip',
      install: 'install'
    },
    'dotNET Core Runtime': {
      fixedPath: '%ProgramFiles%/dotnet/dotnet.exe',
      url: 'https://dotnetcli.blob.core.windows.net/dotnet/release-metadata/releases-index.json',
      version: async (res, $, fns, choice = 'lts') => {
        const uri1 = res.json['releases-index'].find(i => i['support-phase'] === choice)['releases.json'];
        const res1 = await fns.req(uri1);
        latest = res1.json.releases.find(i => i['release-version'] === res1.json['latest-release']);
        return res1.json['latest-release'];
      },
      download: async (res, $, fns, choice) => latest.windowsdesktop.files.find(i => i.rid === 'win-x64').url,
      other: {
        preview: {
          versionChoice: 'preview'
        }
      }

    },
    'Edge-Commercial': {
      fixedPath: '%ProgramFiles(x86)%\\Microsoft\\Edge\\Application\\msedge.exe',
      url: 'https://www.microsoft.com/en-us/edge/business/download',
      version: (res, $, fns, choice = ['Stable', 'x64']) => {
        json = $('#commercial-json-data').attr('data-whole-json');
        json = JSON.parse(json);
        json = json.find(i => i.Product === choice[0]);
        json = json.Releases.find(i => i.Architecture === choice[1]);
        return json.ProductVersion;
      },
      download: () => json.Artifacts[0].Location,
      install: ['install_cli', null, [], { wait: true }],
      other: {}
    },
    Edge: {
      url: 'https://www.microsoftedgeinsider.com/en-us/download?platform=win10',
      version: async (res, $, fns, choice) => { channel = 'stable'; return getVersion(res, $, fns, choice); },
      changelog: {
        url: 'https://docs.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel',
        selector: '[role="main"]',
        attr: 'text',
        match: /^Version [\d.]+/,
        split: true
      },
      download: {
        func: async (res, $, fns, choice) => {
          const res1 = await fns.req({
            uri: `https://msedge.api.cdp.microsoft.com/api/v1/contents/Browser/namespaces/Default/names/msedge-${channel}-win-x64/versions/${version}/files?action=GenerateDownloadInfo`,
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'User-Agent': 'Microsoft Edge Update/1.3.107.13;winhttp',
              'X-Old-UID': 'age=-1; cnt=1',
              'MS-CorrelationId': '{B6D5F1A8-223A-4FCB-B3FB-BB955B87A86C}',
              'MS-RequestId': '{22722DD2-7E5E-4188-935B-A01494EE7C31}',
              'MS-CV': 'qPHVtjoiy0+z+7uVW4eobA.0',
              'X-Last-HR': '0x0',
              'X-Last-HTTP-Status-Code': '0',
              'X-Retry-Count': '0',
              'X-HTTP-Attempts': '1'
            },
            body: '{}'
          });
          return res1.json.filter(i => i.FileId === `MicrosoftEdge_X64_${version}.exe`)[0].Url;
        },
        output: '.exe'
      },
      install: ['install_zipped', 'install'],
      other: {
        beta: {
          version: async (res, $, fns, choice) => { channel = 'beta'; return getVersion(res, $, fns, choice); },
          changelog: {
            url: 'https://docs.microsoft.com/en-us/deployedge/microsoft-edge-relnote-beta-channel',
            selector: '[role="main"]',
            attr: 'text',
            match: /^Version [\d.]+/,
            split: true
          }
        },
        dev: {
          version: async (res, $, fns, choice) => { channel = 'dev'; return getVersion(res, $, fns, choice); },
          changelog: null
        },
        canary: {
          version: async (res, $, fns, choice) => { channel = 'canary'; return getVersion(res, $, fns, choice); },
          changelog: null
        }
      }
    },
    Ethr: {
      site: {
        GitHub: 'https://github.com/microsoft/ethr/releases/latest'
      },
      versionChoice: 'windows.zip',
      install: 'install'
    },
    'Microsoft Support and Recovery Assistant': {
      url: 'https://www.microsoft.com/en-us/download/100607',
      version: '#refineDrawer1 .header:contains("Version")+p',
      download: async (res, $, fns, choice) => {
        const uri1 = res.body.match(/\$\("a.download-button"\).attr\("href","(.*?)"\)/)[1];
        const res1 = await fns.req(uri1);
        return res1.body.match(/downloadData=\{base_0:\{url:"(.*?)"/)[1];
      }
    },
    OneDrive: {
      url: 'https://support.office.com/en-us/article/onedrive-release-notes-845dcf18-f921-435e-bf28-4e24b95e5fc0?ui=en-US&rs=en-US&ad=US',
      version: '#ID0EACAAA-supTabControlContent-1>p',
      changelog: '.ocpSection>ul',
      download: 'https://go.microsoft.com/fwlink/?linkid=844652',
      fixedPath: '%LOCALAPPDATA%\\Microsoft\\OneDrive\\OneDrive.exe',
      install: 'install_cli'
    },
    OneNote: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Office-tools/Other-Office-Tools/Microsoft-OneNote.shtml'
      },
      download: 'https://www.onenote.com/download/win32/x86/zh-CN',
      fixedPath: '%ProgramFiles(x86)%\\Microsoft Office\\root\\Office16\\ONENOTE.EXE',
      install: ['install_cli', null, [], { wait: true }],
      other: {
        x64: {
          download: 'https://www.onenote.com/download/win32/x64/zh-CN',
          fixedPath: '%ProgramFiles%\\Microsoft Office\\root\\Office16\\ONENOTE.EXE'
        }
      }
    },
    PowerToys: {
      fixedPath: '%ProgramFiles%/PowerToys/PowerToys.exe',
      site: {
        GitHub: 'https://github.com/microsoft/PowerToys/releases/latest'
      },
      versionChoice: '.msi',
      install: 'install_msi_cli'
    },
    Skype: {
      site: {
        Softpedia: 'https://www.softpedia.com/get/Office-tools/Fax-Telephony/Skype.shtml'
      },
      install: 'install_inno',
      other: {
        Preview: {
          versionChoice: 'Preview',
          downloadChoice: 'Preview'
        },
        Classic: {
          versionChoice: 'Classic',
          downloadChoice: 'Classic',
          install: null
        }
      }
    },
    SysinternalsSuite: {
      url: 'https://docs.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite',
      version: ['#main > p:nth-child(4)', 'text', /Updated: (.*)/],
      download: 'https://download.sysinternals.com/files/SysinternalsSuite.zip',
      install: 'install'
    },
    'Windows Admin Center': {
      url: 'https://docs.microsoft.com/en-us/windows-server/manage/windows-admin-center/support/release-history',
      version: '#main>ul>li>a[href*="/wac"]',
      download: 'https://aka.ms/wacdownload',
      install: 'install_msi_cli'
    },
    'Windows Terminal': {
      fixedPath: '%ProgramFiles%/WindowsApps/Microsoft.WindowsTerminal_1.0.1401.0_x64__8wekyb3d8bbwe',
      site: {
        GitHub: 'https://github.com/microsoft/terminal/releases/latest'
      },
      versionChoice: 'Microsoft.WindowsTerminal_(.*?).msixbundle',
      install: (info) => {
        return info.fns.install.cli(info, 'powershell', ['-Command', `Add-AppXPackage "${info.output}"`]);
      },
      other: {
        preview: {
          versionChoice: 'Microsoft.WindowsTerminalPreview_(.*?).msixbundle'
        }
      }
    },
    winget: {
      site: {
        GitHub: 'https://github.com/microsoft/winget-cli/releases/latest'
      },
      versionChoice: 'Microsoft.DesktopAppInstaller_(.*?).appxbundle',
      install: (info) => {
        return info.fns.install.cli(info, 'powershell', ['-Command', `Add-AppXPackage "${info.output}"`]);
      }
    },
    必应词典: {
      site: {
        'Tencent SoftMgr': 'https://pc.qq.com/detail/0/detail_2900.html'
      }
    }
  }
};
