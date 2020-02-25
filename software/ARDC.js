'use strict'

let data = {
  url: 'https://www.cnblogs.com/we-hjb/tag/ARDC/',
  version: '[id^="PostsList1_rpPosts_TitleUrl_"]',
  changelog: async (res, $, fns, choice) => [(await fns.walkLink(res, fns, {
    selector: '[id^="PostsList1_rpPosts_TitleUrl_"]'
  }, {
    selector: '#cnblogs_post_body',
    attr: 'html'
  })), true],
  download: async (res, $, fns, choice) => fns.walkLink(res, fns, {
    selector: '[id^="PostsList1_rpPosts_TitleUrl_"]'
  }, {
    selector: '#cnblogs_post_body a[href$=".7z"]'
  }),
  install: 'install'
}
module.exports = data
