'use strict'

// https://api.pzhacm.org/iivb/cu.json

let channel, appid, download
let getVersion = async (res, $, fns, choice) => {
  let res1 = await fns.req({
    uri: `https://update.googleapis.com/service/update2`,
    method: 'POST',
    headers: {
      // 'Cache-Control': 'no-cache',
      // 'Connection': 'Keep-Alive',
      // 'Pragma': 'no-cache',
      // 'User-Agent': 'Google Update/1.3.34.11;winhttp;cup-ecdsa',
      // 'X-Old-UID': 'age=-1; cnt=1',
      'X-Goog-Update-AppId': appid
      // 'X-Goog-Update-Updater': 'Omaha-1.3.34.11',
      // 'X-Goog-Update-Interactivity': 'fg',
      // 'X-Last-HR': '0x0',
      // 'X-Last-HTTP-Status-Code': '0',
      // 'X-Retry-Count': '0',
      // 'X-HTTP-Attempts': '1'
    },
    body: `<?xml version="1.0" encoding="UTF-8"?><request protocol="3.0" updater="Omaha" updaterversion="1.3.34.11" shell_version="1.3.34.11" ismachine="0" sessionid="{98004AE1-A134-445C-88CC-38D73A708DF9}" installsource="taggedmi" requestid="{FCE97847-CDB0-49A6-A829-453ADDAE824C}" dedup="cr" domainjoined="0"><hw physmemory="8" sse="1" sse2="1" sse3="1" ssse3="1" sse41="1" sse42="1" avx="1"/><os platform="win" version="10.0.17763.1" sp="" arch="x64"/><app appid="${appid}" version="" nextversion="" ap="x64-${channel}-statsdef_1" lang="zh-CN" brand="" client="" installage="-1" installdate="-1" iid="{4C539C69-EB94-04BD-D6D6-849FA977EAFD}"><updatecheck/><data name="install" index="empty"/></app></request>`
  })

  let $1 = fns.cheerio.load(res1.body)
  download = $1('url[codebase^="http://dl.google.com"]').attr('codebase') + $1('package[name]').attr('name')
  return $1('manifest[version]').attr('version')
}

let data = {
  url: 'https://www.google.cn/chrome/',
  version: async (res, $, fns, choice) => { channel = 'stable'; appid = '{8A69D345-D564-463C-AFF1-A69D9E530F96}'; return getVersion(res, $, fns, choice) },
  download: (res, $) => download,
  install: ['install_zipped', 'install'],
  other: {
    beta: {
      version: {
        func: async (res, $, fns, choice) => { channel = 'beta'; appid = '{8237E44A-0054-442C-B6B6-EA0509993955}'; return getVersion(res, $, fns, choice) }
      }
    },
    dev: {
      version: {
        func: async (res, $, fns, choice) => { channel = 'dev'; appid = '{401C381F-E0DE-4B85-8BD8-3F3F14FBDA57}'; return getVersion(res, $, fns, choice) }
      }
    },
    canary: {
      version: {
        func: async (res, $, fns, choice) => { channel = 'canary'; appid = '{4EA16AC7-FD5A-47C3-875B-DBF4A2008C20}'; return getVersion(res, $, fns, choice) }
      }
    }
  }
}
module.exports = data
