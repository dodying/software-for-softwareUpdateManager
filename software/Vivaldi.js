'use strict'

let downloadUrl

let data = {
  // ?commercial:
  // 1. boolean: false=Free true=Commercial
  // 2. number: 0=Free 1=FreePersonal 2=Freemium 3=Commercial

  // ?useProxy: true/false,
  // ?withoutHeader: true/false,

  // ?fixedPath:
  // 1. string
  // 2. array  eg: ['%ProgramFiles(x86)%\\Tencent\\QQPCMgr', /[\d.]+/, 'QQPCMgr.exe']

  // ?preferPath: 'preferPath',

  // url or site, either needed
  url: 'https://vivaldi.com/',
  site: {
    // key of site, should be found in folder templates
    // value of site, should be the url
    Softpedia: 'https://www.softpedia.com/get/Internet/Browsers/Vivaldi.shtml'
  },

  // ?versionChoice, ?downloadChoice, ?installChoice
  // they are useful when use "site" or "other"
  downloadChoice: /x64$/,

  version: {
    selector: 'a[href$=".exe"]',
    // ?attr:
    // 1. text or omitted => text()
    // 2. html => html()
    // 3. other => attr(other)
    //
    // ?match:
    // 1. omitted => /(\d+[\d.]+\d+)/[1]
    // 2. /other/ => /other/[1]
    //
    // ?replace:
    // 1. omitted => nothing
    // 2. '$2.$3' => eg: text='1a' match=/((\d+)(\w+))/ result='1.a'
    // ---
    // or func: async (res, $, fns, choice) => version
    attr: 'href'
  },

  /**
   * ?changelog:
   * omitted => nothing
   */
  changelog: {
    // ?url: same as download.plain or selector
    url: 'https://update.vivaldi.com/update/2.0/relnotes/{version}.html',
    selector: '.latestchanges'
    // ?attr:
    // 1. text or omitted => text()
    // 2. html => html()
    // 3. other => attr(other)

    // ?match: '', // omitted => /(.*)/[1]
    // ?split: boolean
    // ---
    // or func: async (res, $, fns, choice) => changelog or [changelog, convertNeed]
  },

  /**
   * ?download:
   * omitted => open url
   */
  download: {
    // --- mode 0 ---
    // plain: 'url/to/download'
    //   you can use variables with {}
    //   defined variables:
    //     version: the latest version
    // plain: 'https://downloads.vivaldi.com/stable/Vivaldi.{version}.x64.exe',

    // --- mode 1 ---
    selector: 'a[href$=".exe"]'
    // ?attr:
    // 1. omitted => attr('href')
    // 2. text => text()
    // 3. html => html()
    // 4. other => attr(other)

    // ?match: '', // omitted => /(.*)/[1]

    // --- mode 2 ---
    // func: async (res, $, fns, choice) => url or [url,ext]

    // ?output:
    // save to which extension, format: '.ext'
    // eg: output='.zip', it'll be named as 'Telegram-version.zip'
    // or omitted: extension according to download url
  },

  /**
   * ?install
   * omitted => install manually
   * @type {async function}
   * @returns {boolean} if install completed
   * @param {object} info
   */
  install: ['install_zipped', 'install', null, null, 'Vivaldi-bin'],

  // ?beforeInstall: async function(info)
  // ?afterInstall: async function(info)

  // other version such as beta, nightly, pro
  // ?other:
  other: {
    snapshots: {
      url: 'https://vivaldi.com/blog/snapshots/',
      version: {
        func: async (res, $, fns, choice) => {
          let uri1 = $('.download-vivaldi-sidebar>a[href*="snapshot"]').eq(0).attr('href')
          let res1 = await fns.req(uri1)
          let $1 = fns.cheerio.load(res1.body)
          downloadUrl = $1('[href^="https://downloads.vivaldi.com/snapshot/Vivaldi"][href$="x64.exe"]').eq(0).attr('href')
          return downloadUrl.match(/Vivaldi.(.*?).x64.exe/)[1]
        }
      },
      download: {
        func: async (res, $) => downloadUrl
      }
    }
  }
}
module.exports = data
