'use strict';

let json;

const data = {
  commercial: 2,
  url: 'https://www.xsplit.com/broadcaster',
  version: async (res, $, fns, choice) => {
    const res1 = await fns.req({
      uri: 'https://www.xsplit.com/serviceapi/2/download?filter[active]=1&filter[application_id]=1&sort=-release_date&filter[beta_release]=0',
      headers: {
        'content-type': 'application/vnd.api+json'
      }
    });
    json = res1.json.data[0].attributes;
    return json.version;
  },
  changelog: () => json.release_notes_url,
  download: 'https://cdn2.xsplit.com/download/bc/m43/{version}/xbc_web_installer_{version}.exe',
  install: 'install_ai'
};
module.exports = data;
