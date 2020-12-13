'use strict';
let json;

const data = {
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
};

for (const product of ['Stable', 'Beta', 'Dev']) {
  for (const arch of ['x64', 'x86', 'arm64']) {
    data.other[`${product}-${arch}`] = { versionChoice: [product, arch] };
  }
}

module.exports = data;
