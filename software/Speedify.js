'use strict'

let data = {
  commercial: 3,
  url: 'https://www.softpedia.com/get/Internet/Other-Internet-Related/Speedify.shtml',
  version: {
    func: async (res, $) => res.body.match(/spjs_prog_version="(.*?)";/)[1]
  },
  download: {
    plain: 'https://downloads.speedify.com/speedify.php?platform=win'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath, null, '$TEMP\\Speedify\\$_13_')
  }
}
module.exports = data
