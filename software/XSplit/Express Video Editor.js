'use strict'

let json

let data = {
  commercial: 2,
  url: 'https://www.xsplit.com/video-editor',
  version: async (res, $, fns, choice) => {
    let res1 = await fns.req({
      uri: 'https://www.xsplit.com/serviceapi/2/download?filter[active]=1&filter[application_id]=4&sort=-release_date&filter[beta_release]=0',
      headers: {
        'content-type': 'application/vnd.api+json'
      }
    })
    json = res1.json.data[0].attributes
    return json.version
  },
  changelog: () => json.release_notes_url,
  download: () => json.download_url,
  install: 'install_ai'
}
module.exports = data
