'use strict'

let download
let data = {
  url: 'https://epicbrowser.com/',
  version: async (res, $, fns, choice) => {
    let res1 = await fns.req({
      uri: `https://updates.epicbrowser.com/service/update2`,
      method: 'POST',
      body: '<?xml version="1.0" encoding="UTF-8"?><request protocol="3.0" version="1.3.27.13" ismachine="0" sessionid="{4FB7729B-9C03-4F12-BF77-CFB9D63F5273}" installsource="taggedmi" testsource="auto" requestid="{67437980-1A7B-44A8-AA91-7B767F7E10E7}"><os platform="win" version="6.2" sp="" arch="x64"/><app appid="{A3AA2AD6-C357-4BB3-9625-6550647D956D}" version="" nextversion="" lang="en" brand="" client="" installage="-1"><updatecheck/></app></request>'
    })

    let $1 = fns.cheerio.load(res1.body)
    download = $1('url[codebase]').attr('codebase') + $1('package[name]').attr('name')
    return $1('manifest[version]').attr('version')
  },
  download: (res, $) => download,
  install: ['install_zipped', 'install']
}
module.exports = data
