'use strict'

let version

let data = {
  commercial: 3,
  url: 'https://www.cantabilesoftware.com/releaseNotes3500.json',
  version: (res, $) => `3.0.${(version = res.json.releases.filter(i => !i.experimental)[0].build)}.0`,
  changelog: async (res, $) => res.json.releases.filter(i => !i.experimental)[0].points.join('\n'),
  download: () => `https://download.cantabilesoftware.com/Cantabile-x64-${version}.zip`,
  install: 'install',
  other: {
    experimental: {
      version: (res, $) => `3.0.${(version = res.json.releases[0].build)}.0`,
      changelog: async (res, $) => res.json.releases[0].points.join('\n')
    }
  }
}
module.exports = data
