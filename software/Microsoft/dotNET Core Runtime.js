'use strict';

let latest;

const data = {
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

};
module.exports = data;
