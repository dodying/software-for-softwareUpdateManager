'use strict';

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

const data = {
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
};
module.exports = data;
