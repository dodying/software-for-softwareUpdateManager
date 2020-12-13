'use strict';

const data = {
  url: 'https://api.bell-sw.com/v1/liberica/releases?version-modifier=latest&bitness=64&os=windows&arch=x86&package-type=zip&bundle-type=jdk',
  version: (res, $, fns, choice) => res.json[0].version,
  download: (res, $, fns, choice) => res.json[0].downloadUrl,
  install: 'install',
  other: {
    latest: {},
    lts: { url: 'https://api.bell-sw.com/v1/liberica/releases?version-modifier=latest&bitness=64&release-type=lts&os=windows&arch=x86&package-type=zip&bundle-type=jdk' }
  }
};

const releaseTypes = ['lts', 'all'];
const bundleTypes = ['jdk', 'jdk-full', 'jdk-lite', 'jre', 'jre-full'];
for (const type of bundleTypes) {
  data.other[`latest-${type}`] = { url: `https://api.bell-sw.com/v1/liberica/releases?version-modifier=latest&bitness=64&os=windows&arch=x86&package-type=zip&bundle-type=${type}` };
  data.other[`lts-${type}`] = { url: `https://api.bell-sw.com/v1/liberica/releases?version-modifier=latest&bitness=64&release-type=lts&os=windows&arch=x86&package-type=zip&bundle-type=${type}` };
}
// release-type lts/all
// bundle-type jdk, jdk-full, jdk-lite, jre, jre-full

for (let version = 8; version <= 15; version++) {
  data.other[`${version}`] = { url: `https://api.bell-sw.com/v1/liberica/releases?version-feature=${version}&version-modifier=latest&bitness=64&os=windows&arch=x86&package-type=zip&bundle-type=jdk` };
  for (const release of releaseTypes) {
    data.other[`${version}-${release}`] = { url: `https://api.bell-sw.com/v1/liberica/releases?version-feature=${version}&version-modifier=latest&bitness=64&os=windows&arch=x86&package-type=zip&bundle-type=jdk&release-type=${release}` };
    for (const type of bundleTypes) {
      data.other[`${version}-${release}-${type}`] = { url: `https://api.bell-sw.com/v1/liberica/releases?version-feature=${version}&version-modifier=latest&bitness=64&os=windows&arch=x86&package-type=zip&bundle-type=${type}&release-type=${release}` };
    }
  }
}
module.exports = data;
