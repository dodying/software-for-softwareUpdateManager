'use strict';

let download;

const data = {
  url: 'https://github.com/AdoptOpenJDK',
  version: async (res, $, fns, choice = { version: 14, jvm: 'hotspot', type: 'jdk' }) => {
    const uri1 = `https://api.adoptopenjdk.net/v3/assets/feature_releases/${choice.version}/ga?jvm_impl=${choice.jvm}&vendor=adoptopenjdk`;
    const res1 = await fns.req(uri1);
    const info = res1.json.find(i => i.binaries.find(i => i.os === 'windows' && i.architecture === 'x64' && i.image_type === choice.type));
    download = info.binaries.find(i => i.os === 'windows' && i.architecture === 'x64' && i.image_type === choice.type).package.link;
    return info.version_data.semver;
  },
  download: () => download,
  install: 'install',
  other: {
    '14-hotspot-jdk': { versionChoice: { version: 14, jvm: 'hotspot', type: 'jdk' } }
  }
};

for (let version = 8; version <= 14; version++) {
  data.other[`${version}`] = { versionChoice: { version, jvm: 'hotspot', type: 'jdk' } };
  for (const jvm of ['hotspot', 'openj9']) {
    data.other[`${version}`] = { versionChoice: { version, jvm, type: 'jdk' } };
    for (const type of ['jdk', 'jre']) {
      data.other[`${version}-${jvm}-${type}`] = { versionChoice: { version, jvm, type } };
    }
  }
}
module.exports = data;
